import {beforeEach, describe, expect, it, vi} from 'vitest';
import {
    backoffDelay,
    BACKOFF_MAX_MS,
    LeadOutbox,
    MAX_ATTEMPTS,
    OUTBOX_STORAGE_KEY,
    type KeyValueStore,
} from './leadOutbox';
import type {ContactLeadPayload, OutboxItem} from '../types';

// A deterministic in-memory store so the outbox is testable without a browser.
function makeStore(): KeyValueStore & {dump(): string | null} {
    let blob: string | null = null;
    return {
        getItem: () => blob,
        setItem: (_k, v) => {
            blob = v;
        },
        dump: () => blob,
    };
}

// A controllable clock.
function makeClock(start = 1_000_000): {now: () => number; advance(ms: number): void} {
    let t = start;
    return {now: () => t, advance: (ms) => {t += ms;}};
}

const payload: ContactLeadPayload = {
    name: 'Ada',
    email: 'ada@example.com',
    subject: 'Villa',
    message: 'Interested',
    category: 'realestate',
    source: 'contact_form',
    language: 'tr',
    consentAt: '2026-06-06T00:00:00.000Z',
};

let idCounter = 0;
const seqId = () => `id-${++idCounter}`;

function newOutbox() {
    idCounter = 0;
    const store = makeStore();
    const clock = makeClock();
    const outbox = new LeadOutbox({store, clock: clock.now, generateId: seqId});
    return {outbox, store, clock};
}

describe('backoffDelay', () => {
    it('grows exponentially from the base', () => {
        expect(backoffDelay(1)).toBe(2_000);
        expect(backoffDelay(2)).toBe(4_000);
        expect(backoffDelay(3)).toBe(8_000);
    });

    it('caps at BACKOFF_MAX_MS', () => {
        expect(backoffDelay(20)).toBe(BACKOFF_MAX_MS);
    });
});

describe('LeadOutbox.enqueue (durability)', () => {
    beforeEach(() => {idCounter = 0;});

    it('persists the lead to storage BEFORE any delivery attempt', () => {
        const {outbox, store} = newOutbox();
        const item = outbox.enqueue('contact', payload);

        // It returned a durable id (the idempotency key)...
        expect(item.id).toBe('id-1');
        expect(item.status).toBe('pending');

        // ...and it is already written to storage (the no-silent-drop guarantee).
        const persisted = JSON.parse(store.dump() as string) as OutboxItem[];
        expect(persisted).toHaveLength(1);
        expect(persisted[0].id).toBe('id-1');
        expect(persisted[0].payload).toEqual(payload);
    });

    it('survives a "reload" — a fresh instance reads the same storage', () => {
        const store = makeStore();
        const a = new LeadOutbox({store, clock: makeClock().now, generateId: seqId});
        a.enqueue('contact', payload);

        const b = new LeadOutbox({store, clock: makeClock().now, generateId: seqId});
        expect(b.pending()).toHaveLength(1);
        expect(b.pending()[0].payload).toEqual(payload);
    });
});

describe('LeadOutbox.flush (delivery + idempotency)', () => {
    it('delivers a due item and marks it sent with the backend docId', async () => {
        const {outbox} = newOutbox();
        outbox.enqueue('contact', payload);

        const deliver = vi.fn().mockResolvedValue({docId: 'doc-123'});
        const count = await outbox.flush(deliver);

        expect(count).toBe(1);
        expect(deliver).toHaveBeenCalledTimes(1);
        const sent = outbox.list()[0];
        expect(sent.status).toBe('sent');
        expect(sent.docId).toBe('doc-123');
        // The idempotency key is passed to the delivery fn.
        expect(deliver.mock.calls[0][0].id).toBe('id-1');
    });

    it('never re-delivers an item already marked sent (idempotent)', async () => {
        const {outbox} = newOutbox();
        outbox.enqueue('contact', payload);
        const deliver = vi.fn().mockResolvedValue({docId: 'doc-1'});

        await outbox.flush(deliver);
        await outbox.flush(deliver); // second pass

        expect(deliver).toHaveBeenCalledTimes(1);
    });
});

describe('LeadOutbox failure handling (no silent drop)', () => {
    it('keeps a failed lead queued and schedules a backed-off retry', async () => {
        const {outbox, clock} = newOutbox();
        outbox.enqueue('contact', payload);

        const deliver = vi.fn().mockRejectedValue(new Error('network down'));
        const count = await outbox.flush(deliver);

        expect(count).toBe(0);
        const item = outbox.list()[0];
        expect(item.status).toBe('pending');       // still queued, NOT lost
        expect(item.attempts).toBe(1);
        expect(item.lastError).toBe('network down');
        // Not due again until the backoff window elapses.
        expect(item.nextAttemptAt).toBe(clock.now() + 2_000);
        expect(outbox.due()).toHaveLength(0);
    });

    it('becomes due again once the backoff window elapses, then succeeds on retry', async () => {
        const {outbox, clock} = newOutbox();
        outbox.enqueue('contact', payload);

        const deliver = vi.fn()
            .mockRejectedValueOnce(new Error('temporary'))
            .mockResolvedValueOnce({docId: 'doc-9'});

        await outbox.flush(deliver);          // attempt 1 fails
        expect(outbox.due()).toHaveLength(0); // backed off

        clock.advance(2_001);                 // wait out the backoff
        expect(outbox.due()).toHaveLength(1);

        await outbox.flush(deliver);          // attempt 2 succeeds
        expect(outbox.list()[0].status).toBe('sent');
        expect(deliver).toHaveBeenCalledTimes(2);
    });

    it('parks an item as failed after MAX_ATTEMPTS for manual recovery', async () => {
        const {outbox, clock} = newOutbox();
        outbox.enqueue('contact', payload);
        const deliver = vi.fn().mockRejectedValue(new Error('always fails'));

        for (let i = 0; i < MAX_ATTEMPTS; i++) {
            await outbox.flush(deliver);
            clock.advance(BACKOFF_MAX_MS + 1); // skip past each backoff window
        }

        const item = outbox.list()[0];
        expect(item.attempts).toBe(MAX_ATTEMPTS);
        expect(item.status).toBe('failed');     // surfaced for recovery, never dropped
        expect(outbox.failedCount()).toBe(1);
        expect(outbox.due()).toHaveLength(0);    // exhausted: not auto-retried
    });
});

describe('LeadOutbox.retry (manual recovery)', () => {
    it('forces an immediate retry of a backed-off / failed item', async () => {
        const {outbox} = newOutbox();
        const item = outbox.enqueue('contact', payload);
        const deliver = vi.fn()
            .mockRejectedValueOnce(new Error('fail'))
            .mockResolvedValueOnce({docId: 'doc-x'});

        await outbox.flush(deliver);            // attempt 1 fails -> backed off
        expect(outbox.due()).toHaveLength(0);

        // User clicks "Retry" — runs immediately, ignoring backoff.
        const ok = await outbox.retry(item.id, deliver);
        expect(ok).toBe(true);
        expect(outbox.list()[0].status).toBe('sent');
    });

    it('returns false for an unknown id', async () => {
        const {outbox} = newOutbox();
        const deliver = vi.fn();
        expect(await outbox.retry('nope', deliver)).toBe(false);
        expect(deliver).not.toHaveBeenCalled();
    });
});

describe('LeadOutbox housekeeping', () => {
    it('prune() drops sent items but keeps pending/failed', async () => {
        const {outbox} = newOutbox();
        outbox.enqueue('contact', payload);
        outbox.enqueue('newsletter', {email: 'x@y.z', language: 'tr', consentAt: 'now'});

        // Deliver only the first.
        const deliver = vi.fn()
            .mockResolvedValueOnce({docId: 'd1'})
            .mockRejectedValueOnce(new Error('fail'));
        await outbox.flush(deliver);

        outbox.prune();
        const remaining = outbox.list();
        expect(remaining).toHaveLength(1);
        expect(remaining[0].kind).toBe('newsletter');
    });

    it('remove() deletes a specific item', () => {
        const {outbox} = newOutbox();
        const a = outbox.enqueue('contact', payload);
        outbox.enqueue('newsletter', {email: 'x@y.z', language: 'tr', consentAt: 'now'});
        outbox.remove(a.id);
        expect(outbox.list()).toHaveLength(1);
    });
});

describe('LeadOutbox resilience', () => {
    it('falls back to in-memory when storage throws and still tracks the lead', () => {
        const throwingStore: KeyValueStore = {
            getItem: () => {throw new Error('blocked');},
            setItem: () => {throw new Error('blocked');},
        };
        const outbox = new LeadOutbox({store: throwingStore, clock: makeClock().now, generateId: seqId});
        // Must not throw — the lead is still captured in memory.
        expect(() => outbox.enqueue('contact', payload)).not.toThrow();
        expect(outbox.pending()).toHaveLength(1);
    });

    it('uses the canonical storage key', () => {
        expect(OUTBOX_STORAGE_KEY).toBe('fahrieren.leadOutbox.v1');
    });
});
