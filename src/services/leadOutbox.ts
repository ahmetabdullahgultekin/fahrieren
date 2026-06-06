import type {LeadKind, LeadPayload, OutboxItem, OutboxStatus} from '../types';

// ---------------------------------------------------------------------------
// Lead Outbox — durable, localStorage-backed queue for lead submissions.
//
// The single guarantee: a lead that reaches `enqueue()` is NEVER silently
// dropped. It is persisted to localStorage *before* any network call, so it
// survives a reload, a crash, or an offline period. Delivery is retried with
// exponential backoff; a permanently-failing lead stays visible in the outbox
// (status `failed`) so the UI can surface it for manual recovery.
//
// This module is intentionally pure of Firebase: it stores payloads and tracks
// delivery state. The actual write is performed by an injected `deliver`
// function (see leadService.ts). Storage and clock are injectable so the queue
// is fully unit-testable with no browser globals.
// ---------------------------------------------------------------------------

export const OUTBOX_STORAGE_KEY = 'fahrieren.leadOutbox.v1';

/** Max delivery attempts before an item is parked as `failed` for manual recovery. */
export const MAX_ATTEMPTS = 6;

/** Backoff base (ms). Delay = BACKOFF_BASE_MS * 2^(attempts-1), capped. */
export const BACKOFF_BASE_MS = 2_000;
export const BACKOFF_MAX_MS = 5 * 60_000; // 5 minutes

/** Minimal subset of the Web Storage API we depend on (so tests can fake it). */
export interface KeyValueStore {
    getItem(key: string): string | null;

    setItem(key: string, value: string): void;
}

/** Delivers one item to the backend. Resolves with the backend doc id on success. */
export type Deliver = (item: OutboxItem) => Promise<{docId?: string}>;

/** A monotonic-ish millisecond clock (injectable for deterministic tests). */
export type Clock = () => number;

export interface OutboxOptions {
    store?: KeyValueStore;
    clock?: Clock;
    /** Crypto-ish id generator; defaults to a UUID when available. */
    generateId?: () => string;
}

function defaultStore(): KeyValueStore | null {
    try {
        if (typeof localStorage !== 'undefined') return localStorage;
    } catch {
        // Access to localStorage can throw (privacy mode / sandboxed iframe).
    }
    return null;
}

function defaultId(): string {
    try {
        if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
            return crypto.randomUUID();
        }
    } catch {
        // ignore — fall through to the time+random fallback
    }
    return `lead_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;
}

/** Exponential backoff with a hard cap. `attempts` is the count made so far. */
export function backoffDelay(attempts: number): number {
    const exp = BACKOFF_BASE_MS * 2 ** Math.max(0, attempts - 1);
    return Math.min(exp, BACKOFF_MAX_MS);
}

/**
 * Durable lead outbox. Construct once and share (a singleton is exported below
 * for app use); construct fresh instances in tests with injected store/clock.
 */
export class LeadOutbox {
    private readonly store: KeyValueStore | null;
    private readonly clock: Clock;
    private readonly generateId: () => string;
    /** In-memory mirror used when no Storage is available (best-effort). */
    private memory: OutboxItem[] = [];

    constructor(opts: OutboxOptions = {}) {
        this.store = opts.store ?? defaultStore();
        this.clock = opts.clock ?? (() => Date.now());
        this.generateId = opts.generateId ?? defaultId;
    }

    /** All items currently in the outbox (a copy; safe to read in UI). */
    list(): OutboxItem[] {
        return this.read().map(item => ({...item}));
    }

    /** Items not yet successfully delivered (pending/sending/failed). */
    pending(): OutboxItem[] {
        return this.list().filter(item => item.status !== 'sent');
    }

    /** Count of items the user may want to recover (failed deliveries). */
    failedCount(): number {
        return this.read().filter(item => item.status === 'failed').length;
    }

    /**
     * Persist a lead to the outbox BEFORE any network attempt. Returns the
     * created item, including its idempotency key (`id`). This is the
     * never-silently-dropped guarantee: once this returns, the lead is durable.
     */
    enqueue(kind: LeadKind, payload: LeadPayload): OutboxItem {
        const now = this.clock();
        const item: OutboxItem = {
            id: this.generateId(),
            kind,
            payload,
            status: 'pending',
            attempts: 0,
            createdAt: now,
            nextAttemptAt: now,
        };
        const items = this.read();
        items.push(item);
        this.write(items);
        return {...item};
    }

    /** Items that are due for a delivery attempt right now (respecting backoff). */
    due(): OutboxItem[] {
        const now = this.clock();
        return this.read()
            .filter(item =>
                (item.status === 'pending' || item.status === 'failed') &&
                item.attempts < MAX_ATTEMPTS &&
                item.nextAttemptAt <= now)
            .map(item => ({...item}));
    }

    /**
     * Attempt to deliver every due item via `deliver`. Each item's state is
     * updated and persisted atomically per attempt, so an interrupted flush
     * never loses progress. Returns the number of items delivered this pass.
     */
    async flush(deliver: Deliver): Promise<number> {
        let delivered = 0;
        for (const due of this.due()) {
            const ok = await this.attempt(due.id, deliver);
            if (ok) delivered += 1;
        }
        return delivered;
    }

    /**
     * Force a single item to be retried now (used by the manual-recovery UI),
     * regardless of its backoff schedule.
     */
    async retry(id: string, deliver: Deliver): Promise<boolean> {
        const items = this.read();
        const target = items.find(i => i.id === id);
        if (!target || target.status === 'sent') return false;
        // Reset the schedule so the attempt runs immediately.
        target.nextAttemptAt = this.clock();
        this.write(items);
        return this.attempt(id, deliver);
    }

    /** Drop already-delivered items from storage (housekeeping). */
    prune(): void {
        const remaining = this.read().filter(i => i.status !== 'sent');
        this.write(remaining);
    }

    /** Remove a specific item (e.g. user discards an unrecoverable lead). */
    remove(id: string): void {
        this.write(this.read().filter(i => i.id !== id));
    }

    // --- internals --------------------------------------------------------

    private async attempt(id: string, deliver: Deliver): Promise<boolean> {
        const items = this.read();
        const item = items.find(i => i.id === id);
        if (!item || item.status === 'sent') return false;

        this.setStatus(items, item, 'sending');

        try {
            const result = await deliver({...item});
            const after = this.read();
            const fresh = after.find(i => i.id === id);
            if (fresh) {
                fresh.status = 'sent';
                fresh.docId = result.docId;
                fresh.lastError = undefined;
                fresh.lastAttemptAt = this.clock();
                fresh.attempts += 1;
                this.write(after);
            }
            return true;
        } catch (err: unknown) {
            const after = this.read();
            const fresh = after.find(i => i.id === id);
            if (fresh) {
                fresh.attempts += 1;
                fresh.lastAttemptAt = this.clock();
                fresh.lastError = err instanceof Error ? err.message : String(err);
                // Exhausted retries -> park as `failed` for manual recovery.
                fresh.status = fresh.attempts >= MAX_ATTEMPTS ? 'failed' : 'pending';
                fresh.nextAttemptAt = this.clock() + backoffDelay(fresh.attempts);
                this.write(after);
            }
            return false;
        }
    }

    private setStatus(items: OutboxItem[], item: OutboxItem, status: OutboxStatus): void {
        item.status = status;
        this.write(items);
    }

    private read(): OutboxItem[] {
        if (!this.store) return this.memory;
        try {
            const raw = this.store.getItem(OUTBOX_STORAGE_KEY);
            if (!raw) return [];
            const parsed: unknown = JSON.parse(raw);
            return Array.isArray(parsed) ? (parsed as OutboxItem[]) : [];
        } catch {
            // Corrupt storage must NOT crash the form. Start clean but keep memory.
            return this.memory;
        }
    }

    private write(items: OutboxItem[]): void {
        this.memory = items;
        if (!this.store) return;
        try {
            this.store.setItem(OUTBOX_STORAGE_KEY, JSON.stringify(items));
        } catch {
            // Quota/permission error: the in-memory mirror is the fallback so the
            // current session still retries. Never throw from the persist path.
        }
    }
}

/** Shared app-wide singleton (browser localStorage + wall clock). */
export const leadOutbox = new LeadOutbox();
