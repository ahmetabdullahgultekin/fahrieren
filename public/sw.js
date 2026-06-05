// Service Worker for PWA — fahrieren.com
//
// Caching strategy:
//   - Hashed build assets (/assets/*.js|.css) are content-addressed and immutable:
//     cache-first, but ONLY cache genuine JS/CSS 200s. A stale hash that 404s gets
//     rewritten to index.html (200 text/html) by .htaccess — we must NEVER cache that
//     as if it were a module, or returning visitors get "MIME text/html" boot failures.
//   - HTML/navigation: network-first (always try fresh index.html), fall back to cache.
//   - Cross-origin (Firebase, AdSense, GA, fonts): pass through, never intercept.
//
// CACHE_NAME is bumped on every meaningful deploy so `activate` purges old caches and
// any poisoned entries from a previous build.
const CACHE_NAME = 'fahri-eren-v2-20260605';
const PRECACHE = ['/', '/index.html', '/manifest.json'];

self.addEventListener('install', (event) => {
    // Activate the new SW immediately instead of waiting for all old tabs to close.
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE)).catch(() => {})
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then((names) => Promise.all(
                names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n))
            ))
            .then(() => self.clients.claim())
    );
});

function isHashedAsset(url) {
    return url.origin === self.location.origin && url.pathname.startsWith('/assets/');
}

function isHtmlRequest(request, url) {
    return request.mode === 'navigate' ||
        url.pathname === '/' ||
        url.pathname.endsWith('.html');
}

self.addEventListener('fetch', (event) => {
    const { request } = event;
    if (request.method !== 'GET') return;

    const url = new URL(request.url);

    // Only handle same-origin requests; let Firebase/AdSense/GA/fonts go straight to network.
    if (url.origin !== self.location.origin) return;

    // Never cache user uploads.
    if (url.pathname.startsWith('/uploads')) return;

    // Hashed, immutable build assets: cache-first, but only cache real JS/CSS.
    if (isHashedAsset(url)) {
        event.respondWith(
            caches.match(request).then((cached) => {
                if (cached) return cached;
                return fetch(request).then((response) => {
                    const ct = response.headers.get('content-type') || '';
                    const looksLikeAsset = /javascript|css|wasm|json/i.test(ct);
                    // Guard: a stale hash rewritten to index.html comes back as text/html.
                    // Don't poison the cache with it — just return it (the browser will
                    // surface a one-time error and a reload picks up the new index.html).
                    if (response.ok && response.status === 200 && looksLikeAsset) {
                        const copy = response.clone();
                        caches.open(CACHE_NAME).then((c) => c.put(request, copy)).catch(() => {});
                    }
                    return response;
                });
            })
        );
        return;
    }

    // HTML / navigation: network-first so a new deploy is picked up immediately.
    if (isHtmlRequest(request, url)) {
        event.respondWith(
            fetch(request)
                .then((response) => {
                    if (response && response.status === 200) {
                        const copy = response.clone();
                        caches.open(CACHE_NAME).then((c) => c.put(request, copy)).catch(() => {});
                    }
                    return response;
                })
                .catch(() => caches.match(request).then((c) => c || caches.match('/index.html')))
        );
        return;
    }

    // Everything else same-origin (static images, manifest, etc.): cache-first.
    event.respondWith(
        caches.match(request).then((cached) => {
            if (cached) return cached;
            return fetch(request).then((response) => {
                if (response && response.status === 200 && response.type === 'basic') {
                    const copy = response.clone();
                    caches.open(CACHE_NAME).then((c) => c.put(request, copy)).catch(() => {});
                }
                return response;
            }).catch(() => new Response('Network error', {
                status: 408, headers: { 'Content-Type': 'text/plain' }
            }));
        })
    );
});
