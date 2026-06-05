# ROADMAP — fahrieren.com

> Fahri Eren (Eren Ticaret) — multi-category trading site for a 25+ year Antalya/Yeşilova company:
> emlak (real estate), araç (vehicles), tarım/yumurta (agriculture/eggs), inşaat malzemeleri
> (construction materials). Google-AdSense monetized. Grounded in code at HEAD `55ac1aa` (branch `master`).

## Vision

A fast, SEO-strong, Turkish-first (TR/EN) catalog + lead-generation site that:
- showcases listings across four categories with rich product detail pages,
- converts visitors to leads primarily via WhatsApp/phone (and optionally stored leads),
- generates passive revenue through correctly-served Google AdSense units,
- is safely operable by a single admin (Firestore-backed product CRUD behind real auth),
- ships reliably from Git to Hostinger with a quality gate.

## Tech stack (verified)

React 19 + TypeScript + Vite 7 (`rolldown-vite@7.1.12`) + Tailwind 3.4 + Firebase/Firestore +
TanStack Query v5 + React Router v7 + React Hook Form + Yup. Custom in-house i18n
(`src/services/translationService.ts`, ~746 lines, TR/EN) via `LanguageContext` — no i18n library.
Lazy-loaded routes. Static build → Hostinger (`fahrieren.com`) via `deploy.sh` (rsync) and a
GitHub Actions `Deploy to Hostinger` workflow on push to `main`/`master`.

## Current state

**Working**
- Build is healthy: `npm run build` succeeds in ~6.7s; Firebase chunk (494 KB) is split out.
- Routing complete: public pages (home, ürünler, ürün detay, hakkımda, iletişim, iş-ortaklarımız,
  favoriler, gizlilik, kullanım-koşulları), auth (giriş/çıkış), admin CRUD behind `ProtectedRoute`,
  TR/EN URL redirects, 404. (`src/router/AppRouter.tsx`)
- SEO basics solid: `lang="tr"`, OG/Twitter cards, canonical, robots meta, two JSON-LD blocks in
  `index.html`, `robots.txt`, `sitemap.xml`, `ads.txt`, PWA manifest + service worker.
- AdSense account verification meta present (`ca-pub-2016267232144093`); KVKK privacy + terms pages exist.
- Admin auth via Firebase Auth; admin check via `admins` Firestore collection.

**Broken / risky (see TODO.md)**
- 🔴 `firestore.rules` is fully open (`allow read, write: if true` on every collection incl. `admins`).
- 🔴 AdSense `<ins>` units cannot fill — the `adsbygoogle.js` loader script is never injected; slot IDs
  in `adsConfig.ts` are placeholders → zero ad revenue.
- 🟠 GA measurement id is a placeholder `G-XXXXXXXXXX` (real id `G-7L1T6D6WL0` sits unused in firebase.ts).
- 🟠 7 open Dependabot PRs, all `BLOCKED` (no PR-level CI check runs).
- 🟠 975 KB main JS chunk (perf/CWV); sitemap `lastmod` stale (2025-10-21).
- 🟡 0 automated tests; 88 eslint errors (mostly `no-explicit-any`); dead/duplicate files;
  image-upload is a stub; contact form is WhatsApp-only (no `contacts` write).

## Next up (immediate)

1. Close the Firestore rules hole and deploy rules (P0).
2. Make AdSense actually serve: inject the loader script + real slot IDs (P0).
3. Triage/merge the 7 Dependabot PRs in the recommended order (P0) — see TODO.md table.
4. Fix the GA placeholder id; refresh sitemap `lastmod` (P1).

## Phases

### Phase 1 — Security & revenue (P0)
- Firestore rules hardening (admin-gated writes) + deploy.
- AdSense loader injection + real slot IDs → confirmed ad fill.
- Dependency triage: merge safe minors/patches (#23, #18, #14), smoke-test the grouped minor PR (#21).

### Phase 2 — Dependency hygiene & CI gate (P1)
- Add a `pull_request` workflow (`npm ci && npm run build`, ideally `tsc -b`) so PRs get real checks and
  Dependabot PRs stop being BLOCKED.
- Handle eslint major (#12 + #15 + `@eslint/js`) on a branch with `npm run lint` verification.
- Dedicated branch for the Tailwind v3→v4 migration (#13): postcss plugin swap, `@import "tailwindcss"`,
  CSS-first `@theme` for the custom `primary` palette, re-verify `@apply` usages, visual diff every page.

### Phase 3 — Testing & code quality (P2)
- Introduce vitest + @testing-library/react; smoke tests for HomePage/ProductCard and a
  `translationService.t()` unit test; wire into the PR gate.
- Delete dead/duplicate code (`useAuth.ts.old`, `AdminPanel`, `ProductManager`, duplicated
  `components/about|contact` pages); drive eslint to 0 errors.
- Resolve the image-upload story (Firebase Storage is already initialized, or real Hostinger endpoint).

### Phase 4 — Features (P2/P3)
- Persist contact leads to Firestore `contacts` (behind hardened rules); admin lead inbox.
- Listings: pagination, richer category filters, per-product `Product`/`Offer` JSON-LD.
- Favorites polish; category landing pages.

### Phase 5 — SEO & performance (P1/P3)
- Code-split the 975 KB chunk via `manualChunks`; improve Lighthouse mobile/CWV.
- Automate `sitemap.xml` lastmod; Search Console submission/monitoring.
- Pre-render / SSG public routes (vite-ssg or prerender) for crawler-visible content.
- Keep TR/EN content fresh; expand unique per-category copy (supports AdSense content policy).

## Operational notes
- Deploy: GitHub Actions on push to `main`/`master` (rsync `dist/` → Hostinger), plus manual `deploy.sh`.
- `.npmrc` sets `legacy-peer-deps=true`; `package.json` overrides Vite to `rolldown-vite@7.1.12`.
- Firebase project: `trader-e-commerce`. Admin docs in `docs/` (ADMIN_SETUP, ADSENSE_*, HOSTINGER_DEPLOY).
