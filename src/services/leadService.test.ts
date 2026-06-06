import {describe, expect, it, vi} from 'vitest';
import {LeadService} from './leadService';
import {LeadOutbox, type KeyValueStore} from './leadOutbox';
import type {ContactLeadPayload, NewsletterLeadPayload} from '../types';

// Fresh in-memory outbox per test (no Firebase, no browser).
function makeStore(): KeyValueStore {
    let blob: string | null = null;
    return {
        getItem: () => blob,
        setItem: (_k, v) => {blob = v;},
    };
}

function freshOutbox() {
    let n = 0;
    return new LeadOutbox({
        store: makeStore(),
        clock: () => 1_000_000,
        generateId: () => `id-${++n}`,
    });
}

const contact: ContactLeadPayload = {
    name: 'Ada',
    email: 'ada@example.com',
    subject: 'Daire',
    message: 'Bilgi almak istiyorum',
    category: 'realestate',
    source: 'contact_form',
    language: 'tr',
    consentAt: '2026-06-06T00:00:00.000Z',
};

const newsletter: NewsletterLeadPayload = {
    email: 'sub@example.com',
    language: 'en',
    consentAt: '2026-06-06T00:00:00.000Z',
};

describe('LeadService.submitContact', () => {
    it('returns success with the docId when delivery succeeds', async () => {
        const deliver = vi.fn().mockResolvedValue({docId: 'contacts/abc'});
        const svc = new LeadService(freshOutbox(), deliver);

        const result = await svc.submitContact(contact);

        expect(result.success).toBe(true);
        expect(result.docId).toBe('contacts/abc');
        expect(result.id).toBe('id-1');
        // The payload reached the deliver fn unchanged, with the idempotency id.
        const arg = deliver.mock.calls[0][0];
        expect(arg.kind).toBe('contact');
        expect(arg.payload).toEqual(contact);
        expect(arg.id).toBe('id-1');
    });

    it('returns queued (NOT silent success, NOT lost) when delivery fails', async () => {
        const deliver = vi.fn().mockRejectedValue(new Error('offline'));
        const outbox = freshOutbox();
        const svc = new LeadService(outbox, deliver);

        const result = await svc.submitContact(contact);

        // The critical assertion: a failed delivery is reported as queued+saved,
        // never as a fake { success: true } (the old silent-drop bug).
        expect(result.success).toBe(false);
        expect(result.queued).toBe(true);
        expect(result.error).toBe('offline');
        // And the lead is durably retained for retry.
        expect(outbox.pending()).toHaveLength(1);
        expect(outbox.pending()[0].payload).toEqual(contact);
    });

    it('does not throw when delivery rejects', async () => {
        const svc = new LeadService(freshOutbox(), vi.fn().mockRejectedValue(new Error('x')));
        await expect(svc.submitContact(contact)).resolves.toBeDefined();
    });
});

describe('LeadService.subscribeNewsletter', () => {
    it('enqueues and delivers a newsletter lead', async () => {
        const deliver = vi.fn().mockResolvedValue({docId: 'newsletter/n1'});
        const svc = new LeadService(freshOutbox(), deliver);

        const result = await svc.subscribeNewsletter(newsletter);

        expect(result.success).toBe(true);
        expect(deliver.mock.calls[0][0].kind).toBe('newsletter');
    });
});

describe('LeadService.flush / retry', () => {
    it('flush re-attempts queued items and reports the delivered count', async () => {
        const deliver = vi.fn()
            .mockRejectedValueOnce(new Error('temp'))
            .mockResolvedValueOnce({docId: 'd1'});
        const outbox = freshOutbox();
        const svc = new LeadService(outbox, deliver);

        await svc.submitContact(contact);     // attempt 1 fails -> queued (backed off)
        const delivered = await svc.retry('id-1'); // force retry now

        expect(delivered).toBe(true);
        expect(outbox.list()[0].status).toBe('sent');
    });
});
