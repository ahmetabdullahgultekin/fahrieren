# TODO — fahrieren.com (Fahri Eren ticaret platformu)

> Grounded in code at HEAD `55ac1aa` (branch `master`), build verified (`npm run build` OK, 6.74s),
> `npm run lint` = 88 errors (non-gating), 0 tests, 7 open Dependabot PRs.
> Source code MUST NOT be changed by planning — these are work items, not done.

Priority key: **P0** = security / correctness / blocks revenue. **P1** = important, near-term.
**P2** = quality / hardening. **P3** = nice-to-have / future.

---

## P0 — Security & revenue blockers

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

- [ ] **Triage the 7 open Dependabot PRs** — see dedicated section below.
  - Why: all are `BLOCKED` (branch protection wants checks that never run because the only workflow is
    deploy-on-push, not a PR check). Two include a fixed security advisory (protobufjs).
  - Done when: each PR is merged, closed-with-reason, or has a tracked follow-up; `gh pr list` count drops.

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

- [ ] **Add a test framework + smoke tests** — new `vitest` + `@testing-library/react`
  - Why: zero tests exist (no `*.test.*`, no vitest/jest in `package.json`). Dependency bumps
    (esp. Tailwind v4, eslint 10) can't be validated automatically.
  - Done when: vitest is configured, a render-smoke test for `HomePage`/`ProductCard` and a unit test for
    `translationService.t()` pass in CI.

- [ ] **Remove dead / duplicate code** — `src/hooks/useAuth.ts.old`,
    `src/components/admin/AdminPanel.tsx`, `src/components/admin/ProductManager.tsx`,
    and the duplicated `components/about|contact/*Page.tsx` vs `pages/*Page.tsx`
  - Why: `useAuth.ts.old`, `AdminPanel`, `ProductManager` are referenced by 0 files (verified by grep);
    `components/about/AboutPage` & `components/contact/ContactPage` duplicate the routed `pages/` versions.
    Dead code inflates bundle/lint noise and confuses maintenance.
  - Done when: confirmed-unused files deleted, build still green, lint error count drops.
  - _Partial on `exec/p0-2026-06-05`: confirmed `src/components/contact/ContactPage.tsx` is imported by 0 files (router uses `pages/ContactPage.tsx`); it survives only because it's tree-shaken out — it imports `Facebook/Instagram/Linkedin` from lucide-react which were removed in 1.11.0. Also fixed a LATENT BUILD BREAK this exposed: the routed `Footer.tsx` imported those same removed brand icons, so a from-source `npm ci && npm run build` failed with MISSING_EXPORT. Replaced Footer's brand icons with inline brand SVGs. Deleting the dead files themselves deferred._

- [ ] **Fix the 88 `no-explicit-any` lint errors** — `src/services/*.ts`, `src/utils/*.ts`,
    `src/components/integrations/*`
  - Why: bulk of the 88 errors are `@typescript-eslint/no-explicit-any` in `apiManager.ts`, `seoService.ts`,
    `translationService.ts`, `createAdminUser.ts`, `fixFavorites.ts`, `fixProductViews.ts`. Typing them
    catches real bugs and lets the lint gate (P1) be enforced.
  - Done when: `npm run lint` passes (0 errors) or the remaining are explicitly justified with disables.

- [ ] **Decide product-image upload story** — `src/services/firebaseService.ts` (`StorageService`)
  - Why: `uploadProductImage` is a stub that returns a placeholder Hostinger URL and logs
    "MANUEL YÜKLEME GEREKLİ"; the real `upload.php` endpoint doesn't exist. Admins can't actually upload
    images through the UI.
  - Done when: either a working upload path (Firebase Storage — already initialized in `firebase.ts` — or
    a real Hostinger `upload.php`) is wired, or the stub is clearly documented as manual-by-design.

## P3 — Nice-to-have / future

- [ ] **Persist contact form submissions** — `src/pages/ContactPage.tsx`
  - Why: the contact form only opens WhatsApp/`mailto` (`handleSubmit` → `window.open(whatsappUrl)`); it
    never writes to the `contacts` Firestore collection (so that rule is currently unused). No record of
    leads if the user closes WhatsApp.
  - Done when: submissions also `addDoc` to `contacts` (guarded by the new rules), or the design is
    confirmed WhatsApp-only and the unused `contacts` rule removed.

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

Context: ALL show `mergeStateStatus: BLOCKED` + `mergeable: MERGEABLE`. BLOCKED is because branch
protection expects status checks but **no workflow runs on `pull_request`** (only deploy-on-push). So
each PR must be validated **locally** (`git fetch`, checkout branch, `npm ci && npm run build`) and then
merged (admin override or after adding the P1 PR check workflow). `.npmrc` has `legacy-peer-deps=true`.

| PR | Bump | Type | Recommendation |
|----|------|------|----------------|
| **#23** | `protobufjs` 7.5.5 → 7.6.2 (transitive, via firebase) | patch / security | **Merge now** |
| **#18** | `@protobufjs/utf8` 1.1.0 → 1.1.1 (transitive) | patch / security | **Merge now** (likely subsumed by #23 — close as superseded if so) |
| **#21** | grouped minor-and-patch, **15 updates** (firebase 12.12→12.13, react/react-dom 19.2.5→19.2.6, react-router 7.14→7.15, react-hook-form 7.73→7.76, @hookform/resolvers 5.2→5.4, @tanstack/react-query 5.100.1→.14, lucide-react 1.11→1.16, @vitejs/plugin-react 6.0.1→6.0.2, typescript-eslint 8.59.0→.4, @types/react, etc.) | minor/patch | **Test-then-merge** — low risk but it's 15 libs incl. react-router & firebase; do one `npm ci && npm run build` + a manual click-through of home/products/admin before merging |
| **#14** | `@types/node` 24.5.2 → 25.6.0 | dev, major (types only) | **Merge now** — types-only devDep, no runtime impact; build proves it |
| **#15** | `eslint-plugin-react-hooks` 5.2.0 → 7.1.1 | dev, major | **Test-then-merge** — major jump may add new rule errors; run `npm run lint` after, accept only if it doesn't regress the gate |
| **#12** | `eslint` 9.36.0 → 10.2.1 | dev, MAJOR | **Hold / test in a branch** — eslint 10 may need flat-config/plugin-peer updates (`@eslint/js`, `typescript-eslint`, `eslint-plugin-react-hooks` all pinned to 9-era). Bundle with #15 and `@eslint/js` bump; verify `npm run lint` runs before merge. Don't merge blind. |
| **#13** | `tailwindcss` 3.4.17 → **4.2.4** | dev, MAJOR (breaking) | **HOLD — needs a dedicated migration branch** — v4 is a rewrite: `postcss.config.js` must switch `tailwindcss` → `@tailwindcss/postcss`; `src/index.css` `@tailwind base/components/utilities` → `@import "tailwindcss"`; `tailwind.config.js` custom `primary` colors/`extend` move to CSS-first `@theme`; `@apply bg-primary-600` (3 uses in index.css) breaks unless tokens re-declared. Do NOT merge into the deps stream. Migrate deliberately, visually diff every page, then ship. |

Recommended order: merge #23, #18, #14 immediately → land #21 after one build+smoke → handle eslint (#12+#15)
together on a branch → tackle Tailwind v4 (#13) last as its own migration project.

Note: the briefing said "8 open Dependabot PRs"; `gh pr list -R ahmetabdullahgultekin/fahrieren --state open`
returns **7** at HEAD (#12, #13, #14, #15, #18, #21, #23). The 8th was likely already merged/closed.
