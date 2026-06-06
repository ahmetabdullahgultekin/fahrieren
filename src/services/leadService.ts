import {addDoc, collection, serverTimestamp} from 'firebase/firestore';
import {db} from '../config/firebase';
import {leadOutbox, type Deliver, type LeadOutbox} from './leadOutbox';
import type {
    ContactLeadPayload,
    LeadResult,
    NewsletterLeadPayload,
    OutboxItem,
} from '../types';

// ---------------------------------------------------------------------------
// LeadService — the durable, idempotent lead write path.
//
// Flow for every submission:
//   1. enqueue the payload in the local OUTBOX (durable, survives reload)
//   2. immediately try to deliver it to Firestore
//   3. on success -> outbox marks it `sent`; on failure -> it stays queued and
//      is retried with backoff (and surfaced to the user for recovery).
//
// The whole path is gated behind VITE_LEAD_PIPELINE_ENABLED (default OFF). When
// OFF, callers fall back to the legacy behaviour (see hooks/index.ts) so the
// change is fully reversible without a redeploy of this service.
//
// Idempotency: the outbox item id is written to the Firestore document as
// `clientLeadId`. A retry of the same submission carries the same id, so the
// owner can dedupe at-least-once retries; the outbox itself never re-delivers
// an item already marked `sent`.
// ---------------------------------------------------------------------------

/** Returns true when the reliable-lead-pipeline feature flag is enabled. */
export function isLeadPipelineEnabled(): boolean {
    return import.meta.env.VITE_LEAD_PIPELINE_ENABLED === 'true';
}

export interface ILeadService {
    submitContact(payload: ContactLeadPayload): Promise<LeadResult>;
    subscribeNewsletter(payload: NewsletterLeadPayload): Promise<LeadResult>;
    /** Retry every due item in the outbox (called on load / on reconnect). */
    flush(): Promise<number>;
    /** Force an immediate retry of a single queued/failed lead by id. */
    retry(id: string): Promise<boolean>;
}

export class LeadService implements ILeadService {
    private readonly outbox: LeadOutbox;
    private readonly deliver: Deliver;

    constructor(outbox: LeadOutbox = leadOutbox, deliver: Deliver = defaultDeliver) {
        this.outbox = outbox;
        this.deliver = deliver;
    }

    async submitContact(payload: ContactLeadPayload): Promise<LeadResult> {
        const item = this.outbox.enqueue('contact', payload);
        return this.tryDeliver(item.id);
    }

    async subscribeNewsletter(payload: NewsletterLeadPayload): Promise<LeadResult> {
        const item = this.outbox.enqueue('newsletter', payload);
        return this.tryDeliver(item.id);
    }

    flush(): Promise<number> {
        return this.outbox.flush(this.deliver);
    }

    retry(id: string): Promise<boolean> {
        return this.outbox.retry(id, this.deliver);
    }

    /**
     * Attempt immediate delivery of a freshly-enqueued item. Crucially, a
     * failure here is NOT an error to the caller in the silent-drop sense: the
     * lead is already durably queued, so we report `queued: true` and the UI
     * can tell the user it was saved and will be retried.
     */
    private async tryDeliver(id: string): Promise<LeadResult> {
        // retry() forces an immediate attempt regardless of backoff.
        await this.outbox.retry(id, this.deliver);
        const item = this.outbox.list().find(i => i.id === id);
        if (item?.status === 'sent') {
            return {success: true, id, docId: item.docId};
        }
        // Not delivered yet, but safely persisted in the outbox.
        return {
            success: false,
            queued: true,
            id,
            error: item?.lastError,
        };
    }
}

/** Builds the Firestore document and writes it via addDoc. */
async function defaultDeliver(item: OutboxItem): Promise<{docId?: string}> {
    const base = {
        ...item.payload,
        clientLeadId: item.id,   // idempotency key carried to the server
        status: item.kind === 'newsletter' ? 'active' : 'new',
        createdAt: serverTimestamp(),
    };
    const collectionName = item.kind === 'newsletter' ? 'newsletter' : 'contacts';
    const ref = await addDoc(collection(db, collectionName), base);
    return {docId: ref.id};
}

/** Shared app-wide singleton. */
export const leadService = new LeadService();
export default leadService;
