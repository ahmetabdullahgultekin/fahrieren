import {afterEach, beforeEach, describe, expect, it, vi} from 'vitest';
import {act, renderHook} from '@testing-library/react';

// Mock the durable services so the hooks can be tested without Firebase or a
// real outbox. We assert that the hooks surface the RIGHT explicit status
// (success vs queued vs error) — i.e. no swallowed failures.
const submitContact = vi.fn();
const subscribeNewsletter = vi.fn();
const flush = vi.fn().mockResolvedValue(0);

vi.mock('../services/leadService', () => ({
    isLeadPipelineEnabled: () => true,
    leadService: {
        submitContact: (...a: unknown[]) => submitContact(...a),
        subscribeNewsletter: (...a: unknown[]) => subscribeNewsletter(...a),
        flush: () => flush(),
        retry: vi.fn(),
    },
}));

vi.mock('../services/leadOutbox', () => ({
    leadOutbox: {
        pending: () => [],
        retry: vi.fn(),
        remove: vi.fn(),
    },
}));

// apiManager.trackAnalytics is called on success; stub the whole module.
vi.mock('../services/apiManager', () => ({
    default: {trackAnalytics: vi.fn(), subscribeNewsletter: vi.fn(), sendContactMessage: vi.fn()},
    apiManager: {trackAnalytics: vi.fn()},
}));

import {useContactForm, useNewsletter} from './index';

describe('useContactForm with pipeline enabled', () => {
    beforeEach(() => {
        submitContact.mockReset();
        vi.useFakeTimers();
    });
    afterEach(() => {
        vi.runOnlyPendingTimers();
        vi.useRealTimers();
    });

    it('sets status "success" when the lead is delivered', async () => {
        submitContact.mockResolvedValue({success: true, id: 'x', docId: 'd1'});
        const {result} = renderHook(() => useContactForm());

        act(() => result.current.updateField('name', 'Ada'));
        await act(async () => {
            await result.current.submitForm();
        });

        expect(submitContact).toHaveBeenCalledTimes(1);
        expect(result.current.status).toBe('success');
    });

    it('sets status "queued" (NOT a swallowed success) when delivery is deferred', async () => {
        submitContact.mockResolvedValue({success: false, queued: true, id: 'x', error: 'offline'});
        const {result} = renderHook(() => useContactForm());

        await act(async () => {
            await result.current.submitForm();
        });

        // The lead was saved for retry — the user is told it's queued, never lost.
        expect(result.current.status).toBe('queued');
    });

    it('sets status "error" only on a real, non-recoverable failure', async () => {
        submitContact.mockResolvedValue({success: false, queued: false, id: 'x'});
        const {result} = renderHook(() => useContactForm());

        await act(async () => {
            await result.current.submitForm();
        });

        expect(result.current.status).toBe('error');
    });
});

describe('useNewsletter with pipeline enabled', () => {
    beforeEach(() => {
        subscribeNewsletter.mockReset();
        vi.useFakeTimers();
    });
    afterEach(() => {
        vi.runOnlyPendingTimers();
        vi.useRealTimers();
    });

    it('does not call the service for an empty email', async () => {
        const {result} = renderHook(() => useNewsletter());
        await act(async () => {
            await result.current.subscribe();
        });
        expect(subscribeNewsletter).not.toHaveBeenCalled();
    });

    it('reports "queued" when delivery is deferred', async () => {
        subscribeNewsletter.mockResolvedValue({success: false, queued: true, id: 'x'});
        const {result} = renderHook(() => useNewsletter());

        act(() => result.current.setEmail('a@b.co'));
        await act(async () => {
            await result.current.subscribe('en');
        });

        expect(result.current.status).toBe('queued');
    });
});
