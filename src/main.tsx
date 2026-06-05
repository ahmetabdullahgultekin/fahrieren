import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import AppRouter from './router/AppRouter.tsx'
import {LanguageProvider} from './contexts/LanguageContext'
import {HelmetProvider} from 'react-helmet-async'

// Import utilities for development
if (import.meta.env.DEV) {
    import('./utils/createAdminUser');
    import('./utils/fixProductViews');
    import('./utils/fixFavorites');
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <HelmetProvider>
            <LanguageProvider>
                <AppRouter/>
            </LanguageProvider>
        </HelmetProvider>
    </StrictMode>,
)

// Register service worker for PWA (only in production).
// The SW (sw.js) self-heals across deploys: a new CACHE_NAME + skipWaiting/clients.claim
// purges old caches. We force an update check on load and reload once when a new SW takes
// control, so returning visitors holding a poisoned (stale-hash) cache auto-recover.
if ('serviceWorker' in navigator && import.meta.env.PROD) {
    let reloadedForNewSW = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (reloadedForNewSW) return;
        reloadedForNewSW = true;
        window.location.reload();
    });
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                registration.update().catch(() => { /* ignore */ });
            })
            .catch(error => {
                console.log('SW registration failed:', error);
            });
    });
}
