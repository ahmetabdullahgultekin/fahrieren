// Google Analytics 4 utility functions (non-component; safe to import from any module).

// Google Analytics 4 Measurement ID.
// The real property id (also in firebase.ts) is the default so analytics fires
// in production regardless of env wiring. An env override (VITE_GA_MEASUREMENT_ID)
// is honoured only when it looks like a real GA id, so a stale/placeholder env
// value can never silently disable analytics.
const DEFAULT_GA_MEASUREMENT_ID = 'G-7L1T6D6WL0';

// A real GA4 id is "G-" followed by alphanumerics (it is never all X's).
const isValidGaId = (id: string | undefined): id is string =>
    !!id && /^G-[A-Z0-9]{6,}$/.test(id) && !/^G-X+$/.test(id);

const envGaId = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;
export const GA_MEASUREMENT_ID = isValidGaId(envGaId) ? envGaId : DEFAULT_GA_MEASUREMENT_ID;

declare global {
    interface Window {
        // gtag accepts a variadic, loosely-typed argument list (command, target, params).
        gtag?: (...args: unknown[]) => void;
        dataLayer?: unknown[];
    }
}

export const initGA = () => {
    if (!isValidGaId(GA_MEASUREMENT_ID)) {
        return; // No valid measurement id configured — skip GA init.
    }
    // Load GA script
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize gtag using rest params to satisfy the prefer-rest-params rule.
    window.dataLayer = window.dataLayer || [];
    window.gtag = (...args: unknown[]) => {
        window.dataLayer!.push(args);
    };
    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: window.location.pathname,
    });
};

export const logPageView = (url: string) => {
    if (window.gtag) {
        window.gtag('config', GA_MEASUREMENT_ID, {
            page_path: url,
        });
    }
};

export const logEvent = (action: string, category: string, label?: string, value?: number) => {
    if (window.gtag) {
        window.gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value,
        });
    }
};
