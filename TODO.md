# TODO — fahrieren.com (Fahri Eren ticaret platformu)

> Updated 2026-06-06 on branch `feat/reliable-lead-pipeline`.
> Latest: the **Reliable Lead Pipeline — client-resilience tier** shipped behind
> `VITE_LEAD_PIPELINE_ENABLED` (default OFF): durable localStorage outbox + retry/backoff +
> idempotency + explicit success/queued/error UX + a recovery banner + hardened `contacts`/
> `newsletter` rules + KVKK consent. Build green, **37 vitest tests** (+25 new), `npm run lint` = 0
> errors. Dependabot eslint #12 + react-hooks #15 CLOSED (re-confirmed breaking); Tailwind v4 #13
> left OPEN for a visual-review branch. See ROADMAP.md "Reliable Lead Pipeline" and
> `docs/design/lead-pipeline.md`.
>
> Prior (2026-06-05): PR #24 (Firestore lockdown + AdSense loader + stale-`/assets/` build-input fix
> + GA id + sitemap + CI gate) merged to `master` + DEPLOYED + browser-verified on
> https://fahrieren.com; lint later driven 88 → **0** (PR #31, gated in CI); `deploy.sh` fixed to
> build + rsync `dist/`; self-healing service worker.
>
> Priority key: **P0** = security / correctness / blocks revenue. **P1** = important, near-term.
> **P2** = quality / hardening. **P3** = nice-to-have / future. See ROADMAP.md for the long plan.

---

## P0 — Security & revenue blockers

- [x] **Fix `deploy.sh` to ship the built app, not the repo source** — `deploy.sh`
  - _Done (2026-06-05): the manual `deploy.sh` was rsyncing the **repo root** to Hostinger
    `public_html`, which would have shipped the source `index.html` (referencing `/src/main.tsx`,
    unrunnable in a browser) with NO `/assets/` dir = a blank live site. Now it `npm ci && npm run
    build` and rsyncs **`dist/`** (mirroring `.github/workflows/deploy.yml`), with guards that abort
    if `dist/` is missing or still references `/src/main.tsx`. Verified by deploying + browser-checking
    the live site._

- [x] **Self-healing service worker so deploys don't strand returning visitors** — `public/sw.js`, `src/main.tsx`
  - _Done (2026-06-05): the old SW cached hashed `/assets/*` chunks; on a new deploy the old hashes 404
    → `.htaccess` rewrote them to `index.html` (200 text/html) → the SW cached that as a module →
    returning visitors hit "Expected a JavaScript module but server responded with text/html" boot
    failures (observed live during this deploy). New SW bumps `CACHE_NAME`, `skipWaiting`+`clients.claim`,
    only caches genuine js/css/wasm 200s, network-first for HTML; `main.tsx` forces `update()` + reloads
    once on controllerchange so poisoned caches auto-recover._

- [x] **Lock down Firestore security rules** — `firestore.rules`  _(done on `exec/p0-2026-06-05`: all writes admin-gated via `isAdmin()`; `admins` read-only/`write:false`; analytics/sessions create+update-public but admin-only read/delete; contacts/newsletter append-only; default-deny added. Added `firebase.json`+`.firebaserc` so deploy works. ⚠️ Operator must run `firebase deploy --only firestore:rules`.)_
  - Why: EVERY collection is `allow read, write: if true` (lines 5-40), including `admins`, `products`,
    `analytics`, `contacts`, `newsletter`. Anyone on the internet can read/overwrite/delete all data,
    grant themselves admin (`admins` is the source of truth for `AuthService.isAdmin`), or wipe products.
    The header comment literally says "Development mode".
  - Done when: `products`/`categories` are `allow read: if true; allow write: if isAdmin()`;
    `admins` is `allow read: if request.auth != null; allow write: if false` (seed via console/Admin SDK only);
    `analytics`/`sessions`/`events`/`newsletter`/`contacts` are write-only-or-rate-limited as appropriate;
    rules deployed to Firebase project `trader-e-commerce` and a non-admin browser session can no longer
    write to `products`/`admins` (verify in console Rules Playground or a manual fetch).

- [x] **AdSense ad units cannot fill — no `adsbygoogle.js` loader is ever injected** — `index.html`,
    `src/components/ads/GoogleAdSense.tsx`  _(done: async loader script added to `index.html` `<head>` and verified present in built `dist/index.html`. Also fixed the ROOT cause: `index.html` pointed the Vite build at a stale committed `/assets/` bundle, so src/ changes never shipped — repointed entry to `/src/main.tsx`, removed committed `/assets/`, gitignored it. AdBanner now wired into HomePage; renders nothing until real slot ids are set.)_
  - Why: `<ins class="adsbygoogle">` is rendered, and `(adsbygoogle=[]).push({})` is called, but the
    `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2016267232144093`
    script is NOT present in `index.html` (only a `preconnect`) nor injected anywhere. Result: zero ad
    revenue despite "AdSense readiness completed". The account-verification `<meta google-adsense-account>`
    being present is NOT the same as serving ads.
  - Done when: the AdSense loader script (async, with the publisher client id) is added once to
    `index.html` `<head>`; an ad unit fills on a deployed page (or shows AdSense's "ads.txt/approval"
    state, confirming the slot is wired).

- [~] **Replace placeholder AdSense slot IDs** — `src/config/adsConfig.ts`  _(prepared, NOT final: dummy numeric ids replaced with clearly-named `PLACEHOLDER_*` constants + a prominent operator TODO; added `isRealSlot()` so placeholder/empty slots render nothing (no broken/empty `<ins>`, no policy violation). AdBanner now reads from `ADS_CONFIG.SLOTS`. ⚠️ Operator must paste real numeric slot ids from the ca-pub-2016267232144093 account.)_
  - Why: `SLOTS` are dummy values (`'1234567890'`, `'1122334455'`, …). Even with the loader fixed,
    these slots don't exist in the AdSense account, so units stay blank.
  - Done when: real Ad-unit slot IDs from the `ca-pub-2016267232144093` AdSense account replace the
    dummies, and at least the home/products units render real ads.

- [x] **Triage the 7 open Dependabot PRs** — see dedicated section below.
  - _Done (2026-06-05): the three SAFE bumps were applied + build-verified directly on
    `dev/2026-06-05` (protobufjs 7.6.2 + @protobufjs/utf8 1.1.1 security, @types/node 25.6.0) rather
    than merging the old-`master`-based Dependabot branches (they predate the #24 `/assets/` removal).
    `npm ci && npm run build && npm test` all green. HOLD remains, with rationale, on #21 (15-lib
    group — test+click first), #15/#12 (eslint majors — do together on a branch), #13 (Tailwind v4 —
    build breaks, needs a migration branch). Operator may close #23/#18/#14 as superseded._

## P1 — Important / near-term

- [x] **Firebase config + GA id should not be placeholder/hardcoded** — `src/config/firebase.ts`,
    `src/components/integrations/GoogleAnalytics.tsx`  _(GA part done: placeholder `G-XXXXXXXXXX` replaced; real id `G-7L1T6D6WL0` is now the default with an env override (`VITE_GA_MEASUREMENT_ID`) that is ignored unless it's a valid GA id. Verified in built bundle: GA tag now loads `G-7L1T6D6WL0`, placeholder absent. Firebase-config-from-env left as-is — keys are public and the env-read refactor is non-blocking.)_
  - Why: `firebaseConfig` is hardcoded in source instead of using the `VITE_*` env vars the `.env`
    already defines; `GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'` is a placeholder so Analytics never initializes
    (the real GA id `G-7L1T6D6WL0` already lives in `firebase.ts` `measurementId`). Firebase web keys are
    not secret, but the GA placeholder means no analytics data is collected.
  - Done when: GA uses the real measurement id (env-driven), GA verified firing in browser; optionally
    Firebase config read from `import.meta.env`.

- [x] **Refresh sitemap.xml `lastmod` + automate it** — `sitemap.xml`  _(refreshed: all 11 `<lastmod>` 2025-10-21 → 2026-06-05 in BOTH `sitemap.xml` and the deploy-source `public/sitemap.xml`. Automation step still TODO; operator should re-submit in Search Console.)_
  - Why: every `<lastmod>` is `2025-10-21` (~7+ months stale). Stale sitemaps hurt crawl freshness and
    the "regularly updated content" AdSense/SEO posture claimed in `docs/SITE_INFO.md`.
  - Done when: `lastmod` reflects current content and a build step (or a documented manual step) keeps it
    current; submitted/validated in Search Console.

- [x] **Code-split the 975 KB main chunk** — `vite.config.ts`, `src/router/AppRouter.tsx`  _(resolved as a side effect of the build-input fix: the 975 KB chunk was the doubly-bundled stale artifact. Building from `src/main.tsx` yields a 228 KB main app chunk (gzip 71 KB) with NO >500 KB warning. Firebase (494 KB) and vendor (272 KB) remain separate vendor chunks.)_
  - Why: `dist/assets/index-*.js` is 975 KB (278 KB gzip) and triggers the >500 KB Rolldown warning.
    Firebase is already split (494 KB) but the app entry is still huge. Hurts LCP / Core Web Vitals,
    which feed AdSense quality + SEO.
  - Done when: `manualChunks` (or further lazy boundaries) bring the largest non-vendor chunk under the
    warning threshold; Lighthouse mobile performance improves.

- [x] **Establish a CI quality gate (lint) on PRs** — `.github/workflows/`  _(added `.github/workflows/ci.yml`: `npm ci` + `npm run build` on `pull_request` to main/master, build-only (no deploy), least-privilege `contents: read`, concurrency cancel. This gives Dependabot PRs a real status check. ⚠️ Operator must add this `CI / build` check to branch protection for it to gate merges. NOTE: lint left out of the gate because it's at 88 errors — adding it now would block all PRs; wire lint in after the `no-explicit-any` cleanup.)_
  - Why: `npm run lint` reports 88 errors but exits 0-ish in CI terms because no workflow runs it on PRs;
    the only workflow deploys on push to main/master. Dependabot PRs therefore have "no checks", which is
    why they're all `BLOCKED` against branch protection.
  - Done when: a PR workflow runs `npm ci && npm run build` (and ideally `tsc -b`) so PRs get real checks;
    Dependabot PRs become mergeable via green checks instead of admin override.

## P2 — Quality / hardening

- [x] **Add a test framework + smoke tests** — `vitest` + `@testing-library/react`
  - _Done (2026-06-05): vitest 3 + RTL + jsdom configured (`vitest.config.ts`, `src/test/setup.ts`).
    Tests: `translationService.test.ts` (t() dot-path resolution + TR/EN switch + key fallback),
    `adsConfig.test.ts` (isRealSlot accepts numeric / rejects PLACEHOLDER_*+empty), and a
    `ProductCard.test.tsx` render smoke test under LanguageProvider. `npm test` = **12 passing**.
    CI (`ci.yml`) now runs `npm test` after build, so dependency bumps are validated automatically._

- [x] **Remove dead / duplicate code** — `src/hooks/useAuth.ts.old`,
    `src/components/admin/AdminPanel.tsx`, `src/components/admin/ProductManager.tsx`,
    and the duplicated `components/about|contact/*Page.tsx` vs `pages/*Page.tsx`
  - _Done (2026-06-05): all five files verified unreferenced by full-tree grep, then deleted
    (`useAuth.ts.old`, `admin/AdminPanel.tsx`, `admin/ProductManager.tsx`, `about/AboutPage.tsx`,
    `contact/ContactPage.tsx` — AppRouter imports the `pages/` versions). Build + 12 tests stayed
    green; eslint errors dropped 88 → 74 from this removal. Also removed the stale duplicate root
    `sw.js` and the empty `public/index.html`. (The Footer brand-icon build break this class of dead
    code had exposed was already fixed in #24.)_

- [~] **Fix the `no-explicit-any` lint errors incrementally** — `src/services/*.ts`, `src/utils/*.ts`,
    `src/components/integrations/*`, pages, `AuthContext`
  - _In progress (2026-06-05): eslint **88 → 51** errors on `dev/2026-06-05`. Typed the safe infra
    surfaces with `unknown` / `Record<string,unknown>`: `apiManager.ts` (body, cache, catch, payloads),
    `analyticsService.ts` (errorCode() narrowing + payloads + increment bridge), `translationService.ts`
    (dict walk), `seoService.ts` (product/JSON-LD params), `GoogleAdSense`/`GoogleAnalytics` window
    globals, and the dev-only window debug helpers (new `src/types/devGlobals.d.ts`, removed 4
    `(window as any)` casts). No behavior change; build + tests green._
  - Done when: `npm run lint` reaches 0 errors (remaining ~51 are in page components + `AuthContext`),
    THEN `npm run lint` + `tsc -b` are added to the CI gate (see ROADMAP Phase 5).

- [ ] **Decide product-image upload story** — `src/services/firebaseService.ts` (`StorageService`)
  - Why: `uploadProductImage` is a stub that returns a placeholder Hostinger URL and logs
    "MANUEL YÜKLEME GEREKLİ"; the real `upload.php` endpoint doesn't exist. Admins can't actually upload
    images through the UI.
  - Done when: either a working upload path (Firebase Storage — already initialized in `firebase.ts` — or
    a real Hostinger `upload.php`) is wired, or the stub is clearly documented as manual-by-design.

## P3 — Nice-to-have / future

- [x] **Persist contact form submissions** — `src/pages/ContactPage.tsx`, `src/services/leadService.ts`
  - _Done (2026-06-06, flag-gated): when `VITE_LEAD_PIPELINE_ENABLED=true`, `handleSubmit` enqueues the
    lead in a durable localStorage outbox and `addDoc`s to `contacts` (idempotent `clientLeadId`,
    retry/backoff) in addition to the WhatsApp hand-off — so no lead is lost even if the user closes
    WhatsApp. The `contacts`/`newsletter` rules are now actively used + shape-validated. Operator must
    deploy the rules and flip the flag ON in prod after a canary soak. See the ROADMAP "Reliable Lead
    Pipeline" section._

- [ ] **Pre-render / SSG for SEO** — SPA fallback is `_redirects` / `.htaccess` to `index.html`
  - Why: fully client-rendered SPA; product detail/listing content isn't in initial HTML. Googlebot
    renders JS but pre-rendering improves indexing reliability and AdSense crawler content visibility.
  - Done when: key public routes ship server-rendered/pre-rendered HTML (e.g. vite-ssg or a prerender step).

- [ ] **Listings UX: pagination, richer filters, structured-data per product** — `ProductsPage`,
    `ProductFilters`, `ProductDetailPage`, `seoService.ts`
  - Why: growth/SEO opportunity — per-product `Product`/`Offer` JSON-LD, category landing pages, and
    pagination for scale.
  - Done when: product pages emit Product schema and listings paginate.

---

## Dependency-triage section — the 7 open Dependabot PRs

**Status (2026-06-05):** the three safe bumps (**#23, #18, #14**) are RESOLVED — applied + build/test-
verified directly on `dev/2026-06-05` (rather than merging the old-`master`-based Dependabot branches,
which predate the #24 `/assets/` removal and would re-introduce conflicts). protobufjs 7.6.2 +
@protobufjs/utf8 1.1.1 enforce the security fix; @types/node 25.6.0 is types-only. Operator may close
#23/#18/#14 as superseded. **#21, #15, #12, #13 remain HELD** (see below). The CI gate (`ci.yml`,
build + test on PRs) now gives any future Dependabot PR a real status check — operator must add
`CI / build` to branch protection to make BLOCKED PRs auto-mergeable on green.

| PR | Bump | Type | Status / Recommendation |
|----|------|------|----------------|
| **#23** | `protobufjs` 7.5.5 → 7.6.2 (transitive, via firebase) | patch / security | ✅ **DONE** — pinned 7.6.2 on dev branch, build+test green |
| **#18** | `@protobufjs/utf8` 1.1.0 → 1.1.1 (transitive) | patch / security | ✅ **DONE** — pinned 1.1.1 on dev branch (subsumed by #23 path) |
| **#21** | grouped minor-and-patch, **15 updates** (firebase 12.12→12.13, react/react-dom 19.2.5→19.2.6, react-router 7.14→7.15, react-hook-form 7.73→7.76, @hookform/resolvers 5.2→5.4, @tanstack/react-query 5.100.1→.14, lucide-react 1.11→1.16, @vitejs/plugin-react 6.0.1→6.0.2, typescript-eslint 8.59.0→.4, @types/react, etc.) | minor/patch | **Test-then-merge** — low risk but it's 15 libs incl. react-router & firebase; do one `npm ci && npm run build` + a manual click-through of home/products/admin before merging |
| **#14** | `@types/node` 24.5.2 → 25.6.0 | dev, major (types only) | ✅ **DONE** — bumped 25.6.0 on dev branch, build+test green |
| **#15** | `eslint-plugin-react-hooks` 5.2.0 → 7.1.1 | dev, major | ❌ **CLOSED 2026-06-06** — re-confirmed breaking. Paired with #12; react-hooks 7's flat config still emits a string-array `plugins` key (rejected by eslint 10, exit 2), and its new `react-hooks/set-state-in-effect` rule flags 6 pre-existing effect violations in `src/hooks/index.ts` → lint exits 1. Needs a config migration + effect refactor on a dedicated branch. |
| **#12** | `eslint` 9.36.0 → 10.2.1 | dev, MAJOR | ❌ **CLOSED 2026-06-06** — re-confirmed breaking. eslint 10 rejects the react-hooks plugin's legacy `plugins: ['react-hooks']` shape in flat config (`Oops! Something went wrong … "plugins" to be an object`, exit 2). Even after a manual flat-config migration, the upgrade is blocked by #15's new rules (see above). Do #12 + #15 together on a dedicated eslint-upgrade branch; ship only if `npm run lint` runs green. |
| **#13** | `tailwindcss` 3.4.17 → **4.2.4** | dev, MAJOR (breaking) | 🟡 **LEFT OPEN 2026-06-06** (commented) — major engine/config rewrite with visual implications; needs a dedicated visual-review branch: `postcss.config.js` `tailwindcss` → `@tailwindcss/postcss`; `src/index.css` `@tailwind …` → `@import "tailwindcss"`; `tailwind.config.js` custom `primary`/`extend` → CSS-first `@theme`; `@apply bg-primary-600` (3 uses) breaks unless tokens re-declared. Do NOT auto-merge; visually diff every page, then ship. |

Recommended order: merge #23, #18, #14 (done) → land #21 after one build+smoke → handle eslint (#12+#15,
now CLOSED) together on a dedicated branch when ready → tackle Tailwind v4 (#13, OPEN) last as its own
visual-review migration project.

Note: the briefing said "8 open Dependabot PRs"; `gh pr list -R ahmetabdullahgultekin/fahrieren --state open`
returns **7** at HEAD (#12, #13, #14, #15, #18, #21, #23). The 8th was likely already merged/closed.
