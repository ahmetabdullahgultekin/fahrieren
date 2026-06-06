import React from 'react';
import {AlertCircle, Loader2, RefreshCw, X} from 'lucide-react';
import {useLeadOutbox} from '../../hooks';
import {useTranslation} from '../../contexts/LanguageContextDef';

// LeadOutboxBanner — the recovery affordance for the reliable lead pipeline.
//
// Surfaces any lead that is still queued (awaiting retry) or has permanently
// failed delivery, so a submitted lead is never invisibly lost. The user can
// retry an individual lead, retry all, or discard one. Renders nothing when
// the outbox is empty (the common case) or when the pipeline flag is OFF (the
// hook returns no items).
const LeadOutboxBanner: React.FC = () => {
    const {t} = useTranslation();
    const {items, failedCount, isFlushing, flushNow, retry, discard} = useLeadOutbox();

    if (items.length === 0) return null;

    const tone = failedCount > 0
        ? 'border-red-300 bg-red-50'
        : 'border-amber-300 bg-amber-50';

    return (
        <div
            role="status"
            aria-live="polite"
            className={`fixed bottom-24 right-4 z-50 max-w-sm rounded-xl border p-4 shadow-lg ${tone}`}
        >
            <div className="flex items-start gap-3">
                <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" aria-hidden/>
                <div className="min-w-0 flex-1">
                    <p className="font-semibold text-gray-900">{t('leads.outbox_title')}</p>
                    <ul className="mt-2 space-y-2">
                        {items.map(item => (
                            <li key={item.id} className="flex items-center justify-between gap-2 text-sm">
                                <span className="min-w-0 flex-1 truncate text-gray-700">
                                    {item.kind === 'newsletter'
                                        ? t('leads.outbox_lead_newsletter')
                                        : t('leads.outbox_lead_contact')}
                                    {' · '}
                                    <span className={item.status === 'failed' ? 'text-red-600' : 'text-amber-700'}>
                                        {item.status === 'failed'
                                            ? t('leads.outbox_failed')
                                            : t('leads.outbox_pending')}
                                    </span>
                                </span>
                                <button
                                    type="button"
                                    onClick={() => retry(item.id)}
                                    className="rounded p-1 text-blue-600 hover:bg-white"
                                    aria-label={t('leads.outbox_retry')}
                                    title={t('leads.outbox_retry')}
                                >
                                    <RefreshCw className="h-4 w-4"/>
                                </button>
                                {item.status === 'failed' && (
                                    <button
                                        type="button"
                                        onClick={() => discard(item.id)}
                                        className="rounded p-1 text-gray-500 hover:bg-white"
                                        aria-label={t('leads.outbox_discard')}
                                        title={t('leads.outbox_discard')}
                                    >
                                        <X className="h-4 w-4"/>
                                    </button>
                                )}
                            </li>
                        ))}
                    </ul>
                    <button
                        type="button"
                        onClick={flushNow}
                        disabled={isFlushing}
                        className="mt-3 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-60"
                    >
                        {isFlushing
                            ? <Loader2 className="h-4 w-4 animate-spin"/>
                            : <RefreshCw className="h-4 w-4"/>}
                        {t('leads.outbox_retry_all')}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LeadOutboxBanner;
