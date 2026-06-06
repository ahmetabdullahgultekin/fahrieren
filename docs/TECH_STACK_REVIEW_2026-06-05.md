# Tech-Stack & Architecture Modernization Review — fahrieren.com
**Date:** 2026-06-05  
**Reviewer:** Staff-engineer audit (Claude Sonnet 4.6)  
**Scope:** Advisory only — no code, deps, or config changed. Read-only review.

---

## 1. Full Stack Inventory

| Layer | Library / Tool | Current version |
|---|---|---|
| UI framework | React | 19.2.5 |
| Language | TypeScript | ~6.0.3 |
| Bundler / dev server | rolldown-vite (npm alias of vite) | 7.1.12 |
| Styling | Tailwind CSS | 3.4.17 |
| CSS processor | PostCSS + Autoprefixer | 8.5.10 / 10.5.0 |
| Routing | React Router DOM | 7.14.2 |
| Data fetching / caching | TanStack Query | 5.100.1 |
| Forms | React Hook Form | 7.73.1 |
| Form validation | Yup (via @hookform/resolvers) | 1.7.1 |
| Animation | Framer Motion (`framer-motion`) | 12.38.0 |
| Headless components | Headless UI | 2.2.10 |
| Icons | Heroicons + Lucide React | 2.2.0 / 1.11.0 |
| SEO / document head | react-helmet-async | 3.0.0 |
| Intersection observer | react-intersection-observer | 10.0.3 |
| Toast notifications | react-hot-toast | 2.6.0 |
| Backend / DB | Firebase SDK + Firestore | 12.12.1 |
| Linter | ESLint (flat config) | 9.36.0 |
| Lint plugins | eslint-plugin-react-hooks | 5.2.0 |
| Lint plugins | eslint-plugin-react-refresh | 0.5.2 |
| Lint plugins | typescript-eslint | 8.59.0 |
| Test runner | Vitest | 4.1.0 |
| Test helpers | @testing-library/react + jest-dom | 16.3.2 / 6.9.1 |
| Vite React plugin | @vitejs/plugin-react | 6.0.1 |
| Minifier | Terser | 5.46.2 |
| i18n | In-house (TranslationService singleton + TR/EN dicts) | — |
| PWA | Custom hand-rolled Service Worker (`public/sw.js`) | — |
| Analytics | Custom Firestore counters + GA (`G-7L1T6D6WL0`) | — |
| Ads | Google AdSense (`ca-pub-2016267232144093`) | — |
| Hosting | Static files on Hostinger (SSH rsync) | — |
| CI | GitHub Actions (`npm ci → build → test → lint`) | — |

---

## 2. Component-by-component Assessment

### 2.1 Bundler: `rolldown-vite@7.1.12`

| | |
|---|---|
| **Latest / best (2026)** | Vite 8.0 (stable, released 2026-03-12) — Rolldown is now the shipped default bundler |
| **Verdict** | UPGRADE |
| **Why** | `rolldown-vite` was explicitly a migration shim to test Rolldown on Vite 7 parity. Its own README states it is an "intermediate step to migrate to Vite 8." Vite 8 is now stable and `rolldown-vite` is superseded. Upgrading to Vite 8 proper consolidates the bundler (Rolldown + Oxc), adds built-in TypeScript `paths` support, integrated DevTools, and browser console forwarding. **One config change is required:** the project's `vite.config.ts` uses `build.rollupOptions.output.manualChunks(id)` (function form) — in Vite 8 this must be migrated to `build.rolldownOptions.output.advancedChunks` / `codeSplitting.groups`. The migration is ~10 lines. See [Vite migration guide](https://vite.dev/guide/migration). |
| **Effort** | S (small: replace npm alias, rename one config block) |
| **Risk** | Low — Vite team provides auto-compat layer that converts most existing config automatically |

**Sources:** [Vite 8.0 announcement](https://vite.dev/blog/announcing-vite8) · [rolldown-vite GitHub](https://github.com/vitejs/rolldown-vite) · [Migration guide](https://vite.dev/guide/migration)

---

### 2.2 React 19

| | |
|---|---|
| **Latest / best (2026)** | React 19.2.7 (released 2026-06-01) |
| **Verdict** | KEEP / minor patch bump |
| **Why** | The project is already on React 19. Latest patch is 19.2.7 (fixes a FormData regression in Server Actions). The `^19.2.5` range should resolve to 19.2.7 on a fresh `npm ci`. No breaking changes — apply on next install. React 19 is the current stable with no announced successor. |
| **Effort** | XS (automatic via semver range) |
| **Risk** | Negligible |

**Sources:** [React versions page](https://react.dev/versions) · [React 19.2 blog](https://react.dev/blog/2025/10/01/react-19-2)

---

### 2.3 TypeScript ~6.0.3

| | |
|---|---|
| **Latest / best (2026)** | TypeScript 6.x (6.0 released 2026-03-23, last JS-based version before 7.0 Go rewrite) |
| **Verdict** | KEEP — but ACTION REQUIRED on `tsconfig.app.json` |
| **Why** | The project is already on TS 6. However, `tsconfig.app.json` has `"strict": false` explicitly. TS 6.0's new **defaults** (strict=true, module=esnext, target=es2025) only bite projects without explicit settings — since this project explicitly sets `strict: false`, there is no immediate breakage. That said, `strict: false` is a tech-debt risk: the codebase should be brought to `strict: true` on a dedicated branch to gain the safety guarantees TS 6 ships by default. TypeScript 7.0 (Go rewrite, ~late 2026/2027) will deliver dramatically faster compilation — no migration needed when it ships, it is a drop-in. |
| **Effort** | M (enabling strict generates errors that need fixing) |
| **Risk** | Medium — `strict: false` → `true` is routine but requires care |

**Sources:** [TS 6.0 announcement](https://devblogs.microsoft.com/typescript/announcing-typescript-6-0/) · [Migration guide](https://byteiota.com/typescript-6-0-breaking-changes-and-migration-guide/)

---

### 2.4 Tailwind CSS 3.4.17 ← **HELD MAJOR: Tailwind 4**

| | |
|---|---|
| **Latest / best (2026)** | Tailwind CSS v4.x (CSS-first, Oxide/Rust engine) |
| **Verdict** | UPGRADE — worth it, but schedule deliberately |
| **Why** | v4 is a complete rewrite using Oxide (Rust). Key gains: 3–10× faster builds, incremental rebuilds in single-digit milliseconds, no more PostCSS dependency, CSS-first `@theme` configuration. The `@tailwindcss/upgrade` codemod automates ~90% of the migration. For this project specifically: the `tailwind.config.js` defines three custom color palettes (`primary`, `secondary`, `accent`) and three keyframe animations — the codemod handles this well, converting to `@theme { --color-primary-500: oklch(...) }` blocks. One change to verify manually: v4 changes the default border color from `gray-200` to `currentColor`, which can cause visible regressions. The project has no PostCSS plugins beyond Tailwind itself, which actually removes the need for `postcss.config.js`. Estimated effort for this project: 1–2 hours with the codemod + visual review. **Verdict: do this, but on a dedicated branch and with a full visual regression pass.** |
| **Effort** | M (codemod handles 90%, visual audit needed) |
| **Risk** | Low-Medium — border color default change + any complex `theme()` CSS calls need manual check |

**Sources:** [Tailwind v4.0 blog](https://tailwindcss.com/blog/tailwindcss-v4) · [Upgrade guide](https://tailwindcss.com/docs/upgrade-guide) · [Migration best practices 2026](https://www.digitalapplied.com/blog/tailwind-css-v4-2026-migration-best-practices)

---

### 2.5 ESLint 9.36.0 ← **HELD MAJOR: ESLint 10**

| | |
|---|---|
| **Latest / best (2026)** | ESLint 10.x (released 2026-02, latest ~10.0.3) |
| **Verdict** | UPGRADE — low risk, good payoff |
| **Why** | This project **already uses flat config** (`eslint.config.js` with `defineConfig`/`globalIgnores`), which is exactly what ESLint 10 mandates. The sole breaking change that would have blocked upgrade (legacy `.eslintrc` removal) does not apply here. The only thing to verify: ESLint 10 changes config file lookup to start from the linted file's directory rather than CWD — for a single-package repo like this, there is no practical difference. ESLint 10 adds JSX reference tracking (eliminates false-positive no-unused-vars on JSX-only imports) and improves Node.js >= 20.19 requirement (already met by CI). The held status was due to the flat-config breakage risk — that risk is zero here since flat config is already in use. **Upgrade unblocks Dependabot PR #12.** |
| **Effort** | XS (bump version, run lint, fix any new findings) |
| **Risk** | Very low |

**Sources:** [ESLint v10 release](https://eslint.org/blog/2026/02/eslint-v10.0.0-released/) · [What's coming in ESLint 10](https://eslint.org/blog/2025/10/whats-coming-in-eslint-10.0.0/) · [Migrate to v10](https://eslint.org/docs/latest/use/migrate-to-10.0.0)

---

### 2.6 eslint-plugin-react-hooks 5.2.0 ← **HELD MAJOR: v7**

| | |
|---|---|
| **Latest / best (2026)** | eslint-plugin-react-hooks 7.1.1 (released 2026-04-17) |
| **Verdict** | UPGRADE — do alongside ESLint 10 |
| **Why** | v7 adds ESLint 10 support, React Compiler diagnostics surfacing (useful for future adoption), and improves exhaustive-deps/set-state-in-effect detection with fewer false negatives. The held status was because v6/v7 required ESLint 10, which was held. Since ESLint 10 upgrade is now recommended, both should be done together on the same branch. This also unblocks Dependabot PR #15. |
| **Effort** | XS (same branch as ESLint 10 upgrade) |
| **Risk** | Very low — the new rules may surface additional lint findings worth fixing |

**Sources:** [npm: eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks) · [devtalk release notes](https://forum.devtalk.com/t/react-eslint-plugin-react-hooks-7-1-1-and-eslint-plugin-react-hooks-7-1-0-released/241724)

---

### 2.7 Firebase / Firestore (firebase@12.12.1)

| | |
|---|---|
| **Latest / best (2026)** | firebase@12.x is current; Supabase / PocketBase are credible alternatives for new projects |
| **Verdict** | KEEP — it is the right choice for this project's current profile |
| **Why** | Firebase/Firestore is an excellent fit for a static SPA with append-only lead capture and admin-gated writes. The free Spark plan's limits (50K reads/day, 20K writes/day, 1GB storage) comfortably cover a lead-gen site of this scale. The Firestore rules are well-structured: default-deny, admin-gated catalog writes, append-only contacts/newsletter, anonymous analytics. Firebase auth (admin sign-in) is already in use. Switching to Supabase/PocketBase would require rewriting the auth layer, Firestore rules, admin CRUD queries, and analytics — net negative ROI for a site of this size. **The one real Firebase concern is the custom analytics in `sessions`/`events`/`analytics` collections:** free-tier public `create+update` rules on these invite spam/abuse writes that could exhaust daily quotas. See Security section. |
| **Effort** | N/A (KEEP) |
| **Risk** | Low overall; analytics spam-write risk is worth addressing (see §4) |

**Sources:** [Firebase pricing plans](https://firebase.google.com/docs/projects/billing/firebase-pricing-plans) · [Firebase vs alternatives 2026](https://encore.dev/articles/firebase-alternatives)

---

### 2.8 React Router DOM 7.14.2

| | |
|---|---|
| **Latest / best (2026)** | React Router 7.x is current; TanStack Router is the main competitor |
| **Verdict** | KEEP |
| **Why** | React Router v7 is well-suited to a SPA in library mode (no SSR needed). TanStack Router's killer advantage — 100% type-safe search/route params — is compelling for larger apps but adds complexity not justified for a 5-route lead-gen site. React Router v7's library mode gives everything needed. Upgrade Dependabot minor bumps as they come. |
| **Effort** | N/A |
| **Risk** | None |

---

### 2.9 TanStack Query 5.100.1

| | |
|---|---|
| **Latest / best (2026)** | TanStack Query v5 is current; actively released (last 2026-06-02) |
| **Verdict** | KEEP |
| **Why** | TanStack Query is the industry standard at 12M+ weekly downloads. v5 is the current major. No migration needed. |
| **Effort** | N/A |
| **Risk** | None |

---

### 2.10 React Hook Form 7.73.1 + Yup 1.7.1

| | |
|---|---|
| **Latest / best (2026)** | RHF 7.x is current; Zod has overtaken Yup as the community standard for TypeScript |
| **Verdict** | KEEP RHF / CONSIDER migrating Yup → Zod |
| **Why** | React Hook Form v7 is best-in-class for form performance — no change needed. For validation, **Zod is now the de facto standard** for TypeScript projects in 2026 (20M weekly downloads vs Yup's 12M; RHF docs now feature Zod examples by default). The benefit for this project: Zod's `z.infer<>` eliminates a category of form/type mismatch bugs automatically. However, Yup works fine today and migration is cosmetic (same resolver pattern). This is a "worth doing on next touchpoint" upgrade, not urgent. Bundle size difference is minimal (~13KB Zod vs ~11KB Yup gzipped). |
| **Effort** | S (swap @hookform/resolvers yup → zod; rewrite schemas) |
| **Risk** | Very low |

**Sources:** [Zod vs Yup 2026](https://www.aimadetools.com/blog/zod-vs-yup/) · [RHF resolvers](https://github.com/react-hook-form/resolvers)

---

### 2.11 Framer Motion 12.38.0

| | |
|---|---|
| **Latest / best (2026)** | The package was renamed to `motion` (import from `motion/react`). framer-motion@12.x is a compatibility shim. |
| **Verdict** | CONSIDER-REPLACE (low urgency) |
| **Why** | `framer-motion` is now the legacy package name; the canonical package is `motion` with `import { motion } from 'motion/react'`. The v12 `framer-motion` package remains on npm as a forward shim. At 46KB gzipped, Motion is the heaviest dependency outside Firebase. If animations are used sparingly, consider whether the full library is needed or whether CSS transitions + minimal `@react-spring/web` (18KB) suffice. No EOL risk — Motion is actively maintained. |
| **Effort** | XS (rename import/package) for name migration; M if reducing bundle |
| **Risk** | Very low |

**Sources:** [motion.dev reduce bundle size](https://motion.dev/docs/react-reduce-bundle-size) · [best React animation libraries 2026](https://blog.logrocket.com/best-react-animation-libraries/)

---

### 2.12 react-helmet-async 3.0.0

| | |
|---|---|
| **Latest / best (2026)** | v3.0.0 is recent (2026-03), but has known React 19 deduplication bugs |
| **Verdict** | CONSIDER-REPLACE |
| **Why** | v3.0.0 was released in March 2026 to address React 19 compatibility, but it breaks meta-tag deduplication (multiple `<title>` tags render). For a static SPA that already has React 19, the native React 19 feature of hoisting `<title>`, `<meta>`, and `<link>` directly in JSX to `<head>` may be sufficient — no library needed at all. This project uses react-helmet-async primarily for per-page SEO titles and meta descriptions. React 19's native head element hoisting handles this use case. Migration path: remove `react-helmet-async`, use React 19 native `<title>` and `<meta>` inside page components. **For a static site with no SSR, this is clean.** |
| **Effort** | S |
| **Risk** | Low — React 19 native hoisting is well-documented |

**Sources:** [react-helmet-async npm](https://www.npmjs.com/package/react-helmet-async) · [React 19 compatibility issue](https://github.com/staylor/react-helmet-async/issues/239) · [React 19 head element hoisting](https://react.dev/blog/2024/12/05/react-19#support-for-metadata-in-components)

---

### 2.13 Vitest 4.1.0

| | |
|---|---|
| **Latest / best (2026)** | Vitest 4.x is current (v4 stable with Browser Mode) |
| **Verdict** | KEEP |
| **Why** | The project is already on the latest major. Vitest 4 ships stable Browser Mode (real Chromium/Firefox/WebKit tests), 5–28× faster than Jest, native ESM. No action needed. |
| **Effort** | N/A |
| **Risk** | None |

---

### 2.14 In-house i18n (`TranslationService` singleton)

| | |
|---|---|
| **Latest / best (2026)** | react-i18next (~8–15KB), LinguiJS (~3KB), or inline React 19 Intl context |
| **Verdict** | KEEP — justified for this project's profile |
| **Why** | The in-house `TranslationService` is a 750-line TypeScript file with nested TR/EN dictionaries, full type inference at call sites (`translate('nav.home')`), zero runtime dependencies, and synchronous key lookup. For a **2-language, static, single-developer** site this is optimal: no bundle overhead, no missing-key edge cases (keys fall back to the key string), full IDE autocompletion on the string path (with a `keyof` type improvement it could be fully type-checked). The main weakness is that it does NOT support ICU plurals, dynamic interpolation, or pluralization rules — but the site has no pluralized strings today. react-i18next adds ~8–15KB for capabilities this project does not use. **KEEP; add a `Keys` union type to make `translate()` type-safe on keys if the dict grows** — that removes the last justification for a library switch. |
| **Effort** | N/A (keep) or XS (add key type-safety) |
| **Risk** | None |

---

### 2.15 Custom Service Worker (`public/sw.js`)

| | |
|---|---|
| **Latest / best (2026)** | Workbox (via `vite-plugin-pwa`) is the standard automated alternative |
| **Verdict** | KEEP — the hand-rolled SW is correct and production-hardened |
| **Why** | The SW implements a well-thought-out strategy: network-first for HTML navigation, cache-first for hashed assets (with a content-type guard that prevents poisoning the cache with the `.htaccess` HTML fallback), pass-through for cross-origin. The `CACHE_NAME` versioning approach works correctly with `skipWaiting`/`clients.claim`. `vite-plugin-pwa` would generate this automatically but adds a plugin dependency and build step for no functional gain at this scale. **KEEP as-is; bump `CACHE_NAME` on each meaningful deploy as per current practice.** |
| **Effort** | N/A |
| **Risk** | None |

---

### 2.16 Static hosting on Hostinger

| | |
|---|---|
| **Latest / best (2026)** | Cloudflare Pages, Vercel, Netlify offer edge CDN + CI/CD; Hostinger has no edge CDN |
| **Verdict** | KEEP (respecting owner preference) — but note the capability gap |
| **Why** | Per project constraints, static sites stay on Hostinger. The current rsync deploy workflow is functional. The main capability gap vs modern static hosts is: no edge CDN (Hostinger serves from a single Amsterdam/Istanbul datacenter, important for Turkish users), no built-in preview deployments, and no automatic HTTPS provisioning for branches. If performance becomes a concern, a Cloudflare free-plan proxy in front of Hostinger origin would add edge caching and HTTPS termination without moving hosting. This is an optional enhancement, not a requirement. |
| **Effort** | N/A |
| **Risk** | None (staying; noting gap for awareness) |

---

### 2.17 Google Analytics GA4 (`G-7L1T6D6WL0`)

| | |
|---|---|
| **Latest / best (2026)** | GA4 is current; Plausible/Umami are privacy-first alternatives |
| **Verdict** | KEEP / NOTE privacy compliance |
| **Why** | GA4 is in active use and already configured. Privacy note: multiple EU data protection authorities have found GA4 to violate GDPR due to US data transfers. For a Turkish (.com) business, KVKK compliance is the primary concern. The site should have a cookie consent banner covering GA4 tracking, or switch to a privacy-first tool (Plausible self-hosted, Umami). This is not urgent but is worth flagging. The custom Firestore analytics (`sessions`/`analytics` collections) duplicates GA4 — consider whether both are needed. |
| **Effort** | S (add consent banner) or M (switch to Plausible) |
| **Risk** | Low (privacy compliance gap) |

---

### 2.18 Headless UI 2.2.10 + Heroicons 2.2.0 + Lucide 1.11.0

| | |
|---|---|
| **Latest / best (2026)** | All are current; Lucide 1.17.0 available |
| **Verdict** | KEEP — patch bumps only |
| **Why** | All three are actively maintained and on recent versions. Lucide has a minor version gap (1.11 → 1.17); apply on next dependency update cycle. No breaking changes. |
| **Effort** | XS |
| **Risk** | None |

---

### 2.19 @vitejs/plugin-react 6.0.1

| | |
|---|---|
| **Latest / best (2026)** | v6.x is the Vite 8-era release that uses Oxc instead of Babel |
| **Verdict** | KEEP — already on the right major |
| **Why** | v6 ships Oxc-based transforms (no Babel), which is faster and aligns with the Vite 8 architecture. Already on the correct version. |
| **Effort** | N/A |
| **Risk** | None |

---

## 3. Priority Recommendations Table

| Priority | Component | Action | Verdict | Effort | Risk | Value |
|---|---|---|---|---|---|---|
| 1 | Vite: `rolldown-vite@7` → `vite@8` | UPGRADE | UPGRADE | S | Low | ★★★★★ — completes the migration journey; `rolldown-vite` is a shim, not a destination |
| 2 | ESLint 9 → 10 + react-hooks 5 → 7 | UPGRADE (together) | UPGRADE | XS | Very low | ★★★★☆ — unblocks Dependabot PRs #12 & #15; already on flat config so zero migration risk |
| 3 | Tailwind CSS 3 → 4 | UPGRADE (scheduled) | UPGRADE | M | Low-Med | ★★★★☆ — 3–10× faster CSS builds, CSS-first config; codemod handles 90%; needs visual review |
| 4 | TypeScript `strict: false` → `strict: true` | ENABLE | KEEP+FIX | M | Medium | ★★★☆☆ — hygiene/safety; TS 6 ships strict by default; reduces class of runtime bugs |
| 5 | `react-helmet-async` → React 19 native `<title>`/`<meta>` | REPLACE | CONSIDER | S | Low | ★★★☆☆ — removes a dep with known React 19 dedup bugs; React 19 does it natively |
| 6 | Yup → Zod | MIGRATE | CONSIDER | S | Very low | ★★☆☆☆ — better TS inference; no urgency |
| 7 | `framer-motion` → `motion` package rename | RENAME | CONSIDER | XS | Very low | ★★☆☆☆ — forward-compat; no urgency |
| 8 | Analytics: add cookie consent banner | ACTION | NOTE | S | Low | ★★★☆☆ — KVKK / privacy compliance |
| 9 | Firebase analytics spam-write guard | SECURITY | NOTE | S | Low | ★★★☆☆ — see §4 |

---

## 4. Security & Compliance Items

### 4.1 Firestore analytics collections — public write with no rate-limiting

`analytics`, `sessions`, and `events` all allow `create` and `update` from any unauthenticated client. A script could exhaust the Spark plan's 20K-write-per-day quota by spamming these endpoints. The collections serve aggregate counters and the app already degrades gracefully to `localStorage` on permission-denied.

**Recommendation:** Add a Firestore write rate-limit guard using server-side Firestore Rules to check document count or add a write timestamp (`request.time > resource.data.lastWrite + duration.value(1, 's')`) to prevent sub-second flooding. Alternatively, gate analytics writes to same-origin requests (not possible in Firestore rules alone — requires a callable function intermediary or Cloud Function).

### 4.2 Firebase API key restriction

CLAUDE.md notes: "Restrict the Firebase web API key to `fahrieren.com` in Google Cloud." This is listed as an open operator action item. Firebase web API keys are public by design, but restricting the HTTP referrer to `fahrieren.com` prevents the key from being used from other origins to exhaust quotas (related to §4.1).

### 4.3 GA4 / KVKK consent

For Turkish visitors under KVKK and any EU visitors under GDPR, GA4 tracking requires informed consent. No cookie banner is currently in the codebase. This is the lowest-effort compliance gap.

---

## 5. "Shiny but Not Worth It" — Do Not Do

| Item | Reasoning |
|---|---|
| Migrate to Supabase / PocketBase | Zero net gain for this use case. Firebase covers the exact profile (append-only leads, admin CRUD, anonymous analytics, Auth). Rewrite cost is high, operational gain is nil. |
| Switch to TanStack Router | React Router v7 in library mode is correct for a 5-route SPA. TanStack Router's type-safety payoff requires framework mode adoption — not justified. |
| Add SSR (Next.js / Remix) | The site is a lead-gen SPA. AdSense + Firestore work fine as a static SPA. SSR adds a Node.js server requirement and defeats the Hostinger static hosting model. |
| Switch to SWR from TanStack Query | TanStack Query is already best-in-class. SWR's smaller bundle size is ~9KB saving on a site that already ships Firebase at ~150KB. Not worth the migration. |
| Add react-i18next | The in-house `TranslationService` has zero dependencies and handles the 2-language case with full IDE support. A library adds 8–15KB for features not needed. |
| Migrate to Workbox / vite-plugin-pwa | The hand-rolled SW is correct and production-hardened with careful content-type guards against `.htaccess` HTML fallback poisoning. Workbox generates a more complex SW for no benefit at this scale. |
| Move static hosting to Vercel/Cloudflare Pages | Owner preference is Hostinger static. Optional Cloudflare proxy (free plan) could add edge CDN without moving hosting if performance becomes a concern. |

---

## 6. Summary: Verdicts on the 3 Held Majors

### Tailwind v4 — **DO IT** (effort M, risk low-medium)
The CSS-first rewrite is a genuine improvement. Build times drop 3–10×. The automated `@tailwindcss/upgrade` codemod handles the custom color palettes and animations in `tailwind.config.js`. Main manual task: check border color defaults and any `theme()` calls in custom CSS. Estimated time: 1–2 hours. Worth scheduling on a `dev/tailwind-v4` branch before the end of Q3 2026.

### ESLint 10 — **DO IT NOW** (effort XS, risk very low)
The project **already uses flat config**. The only ESLint 10 breaking change that mattered (removal of legacy `.eslintrc`) does not apply. Upgrading to ESLint 10 + react-hooks v7 is a one-line bump that unblocks two Dependabot PRs. Do this on the next routine maintenance commit.

### eslint-plugin-react-hooks v7 — **DO IT NOW** (same branch as ESLint 10)
v7 is live at 7.1.1. ESLint 10 + react-hooks v7 should be one atomic PR.

---

## 7. Firebase-as-backend Verdict

**KEEP. Firebase is the right backend for this project in 2026.**

Reasoning:
- The usage profile (append-only contact/newsletter submissions, admin-gated catalog writes, anonymous analytics counters, Firebase Auth for one admin) perfectly matches what Firestore's Spark plan provides for free.
- Rules are well-structured, default-deny, and correctly scope every collection.
- The only credible alternative (Supabase) would require SQL schema design, RLS policies, and rewriting auth — a large investment for zero functional gain.
- The analytics spam-write risk (§4.1) is real but addressable within Firestore rules without changing the backend choice.

Firebase concern to watch: Firestore pricing on the Blaze plan ($0.18/100K reads) could become a cost concern if the site scales significantly. At current lead-gen site traffic this is not a risk.

---

*This document is advisory. No code, configuration, or dependencies were changed in producing this review.*
