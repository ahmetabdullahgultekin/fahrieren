# Code Quality Review — fahrieren.com (2026-06-05)

Reviewer: senior code-quality pass on `master` HEAD (`d2646ad`).
Scope: React 19 / Vite 7 (`rolldown-vite`) / TS 6 / Firebase SPA. Build + 12 vitest tests
green at time of review. This doc records scores, prioritized findings (P0→P3) with
`file:line` + fix, and honest strengths. Small safe fixes were applied on branch
`quality/2026-06-05`; larger items are routed to `ROADMAP.md`.

## Scorecard (1 = poor, 5 = excellent)

| Dimension | Score | One-line justification |
|---|---|---|
| Component / service SRP | 3 | Services are mostly single-purpose singletons, but `AnalyticsService` mixes tracking + admin reporting + reset/teardown, and there are two parallel data layers (`firebaseService` vs `dataService`/`apiManager`). |
| DRY / dead code | 2 | `src/hooks/useAuth.ts` was a full duplicate of `AuthContext` with 0 importers (removed); `dataService.DataService` + the entire `apiManager`/`apiConfig` JSONBin stack is dead-or-misleading; `seedData`/`fixFavorites`/`fixProductViews` dev utils ship in dev only. |
| Error handling | 4 | Consistent try/catch with graceful localStorage fallbacks; Firestore error-code narrowing helper in `analyticsService`. A few catch-blocks still swallow silently and the contact/newsletter "success" path can mislead (see P1). |
| TS type safety | 3 | 21 `no-explicit-any` (now 13 after fixes) + 23 `no-unused-vars` baseline; several `as unknown as number` bridges; `process.env` used where only `import.meta.env` exists. Domain types (`Product`, `LocalizedText`) are clean and well-modelled. |
| Firestore rules + Firebase usage | 4 | Rules are genuinely locked down (admin-gated writes, `admins write:false`, append-only leads, default-deny). Two real mismatches: `createAdminUser` writes a doc the rules forbid + keyed wrong; lead collections (`contacts`/`newsletter`) have rules but no writer. |
| State / data flow | 3 | `useProducts` Firebase-first with a module-level cache is reasonable, but the contact/newsletter/analytics flow points at a placeholder JSONBin API, not Firestore — the wired data path doesn't match the secured one. |
| Naming / readability | 4 | Clear names, helpful comments (esp. SW + rules rationale), Turkish inline comments are consistent with the team. |
| Test quality | 2 | 12 tests over 3 files (`adsConfig`, `translationService`, `ProductCard`). No coverage of services, hooks, rules, or the SW caching logic that is explicitly "load-bearing". |
| Build / deploy invariants | 5 | The build-input (`src/main.tsx`) + SW self-heal + `deploy.sh` guards are well-documented and defensively coded; the SW MIME-poisoning guard is excellent. |
| Consistency with CLAUDE.md | 4 | Code matches the documented invariants; CLAUDE.md's "~51 no-explicit-any" is really 21 any + 23 unused-vars + 7 misc — minor doc drift corrected here. |

**Overall: B− (3.4/5).** A solid, well-documented, deploy-safe small SPA whose biggest
liabilities are a dead/misleading second data layer and thin test coverage — not anything
that breaks the live site.

---

## Findings

### P0 — none

No security hole or live-site breakage found. Firestore rules are sound and the build/deploy
path is guarded. (The items below are correctness/maintainability, not P0 outages.)

### P1 — High

**P1-1 `createAdminUser` is broken at two layers (dead admin-bootstrap path).**
`src/services/firebaseService.ts:69-79` — `createAdminUser` does
`addDoc(collection(db,'admins'), {...})`, i.e. an **auto-ID** admin doc. But
`AuthService.isAdmin` (`firebaseService.ts:58-66`) and `firestore.rules:15-18` both check
`exists(/admins/$(uid))` — keyed by the **user UID**. So even if the write succeeded the new
user would not be recognized as admin. Worse, `firestore.rules:28` is `allow write: if false`,
so the `addDoc` is rejected outright. The whole `createAdminUser` → `AuthModal` "create admin"
button (`src/components/admin/AuthModal.tsx:23`) cannot work in production.
*Fix:* remove the client-side admin-creation path entirely (admins must be seeded via Console /
Admin SDK per the rules' own comment), or, if kept for dev only, `setDoc(doc(db,'admins',uid))`
behind a dev-only guard. Document that admin seeding is an operator step. (Roadmap item.)

**P1-2 Contact form & newsletter write to a placeholder JSONBin API, not Firestore.**
`src/hooks/index.ts:269,321` call `apiManager.subscribeNewsletter` / `sendContactMessage`,
which POST to `https://api.jsonbin.io/v3/bins/{binId}/...` using placeholder keys from
`src/config/apiConfig.ts:8-12` (`API_KEY:'$2a$10$...'`, `BIN_ID:'67123...'`,
`MASTER_KEY:'...'`). These requests 401/404. Meanwhile `firestore.rules:50-58` carefully allow
public `create` on `contacts`/`newsletter` that **nothing writes to**. Net effect: leads are
silently lost; the secured collections are dead. Compounding: `dataService.submitContactForm`
(`src/services/dataService.ts:32-42`) returns `{success:true}` even in its catch branch — a
fake-success path (the live hook uses `apiManager` directly so it surfaces the error, but the
two layers disagree).
*Fix:* point lead capture at Firestore (`addDoc(collection(db,'contacts'|'newsletter'), …)`),
delete the JSONBin stack, and remove the fake-success fallback. (Roadmap item.)

### P2 — Medium

**P2-1 `process.env.NODE_ENV` in a Vite client build (always falls to the dev branch).**
`src/config/apiConfig.ts:63` — `process` is undefined in the browser, so `getApiConfig()`
always returns the non-production config (`ANALYTICS_ENABLED:false`). This *accidentally*
suppresses the broken JSONBin analytics calls in prod, so "fixing" it to `import.meta.env.PROD`
would make things worse by enabling placeholder-keyed requests. Treat as part of the P1-2
removal, not a standalone flip. `src/config/adsConfig.ts:66` had the same bug on an unused
`TEST_MODE` export — **fixed** to `import.meta.env.DEV` on the branch (safe; export is unused).

**P2-2 Firestore dotted-key writes via `setDoc(merge:true)` don't nest.**
`src/services/analyticsService.ts:60-65,92-96,106-113` write keys like
`` `pageViews.${page}` `` through `setDoc(..., {merge:true})`. In Firestore, dotted paths are
only interpreted as nested fields by **`updateDoc`/`update`**; in `setDoc` they create a
top-level field whose name literally contains a dot. `getAnalyticsData` then reads
`docData.pageViews` (the nested object), which stays empty. Page/category breakdowns never
populate. *Fix:* use `updateDoc` with dotted paths (after an existence check) or build the
nested object client-side and merge it. (Roadmap item — analytics, not user-facing.)

**P2-3 Dead / misleading second data layer.**
`src/services/dataService.ts` (mock products + JSONBin) is only used by
`PartnersPage`/`PersonalInfo` for static data; its product/contact/newsletter methods are
unreferenced by the live product path (which is Firebase-only, `hooks/index.ts:64`). The
`apiManager` + `apiConfig` JSONBin layer is effectively dead except for the harmful analytics
calls. This is a large chunk of code that implies a backend that doesn't exist.
*Fix:* delete `apiManager`, `apiConfig`, and the API methods of `dataService` (keep the static
`getPartners`/`getPersonalInfo`); move `seoService`'s `trackAnalytics`/contact-info reads off
`apiManager`. (Roadmap item — multi-file refactor.)

**P2-4 23 `no-unused-vars` + 13 remaining `no-explicit-any`.**
e.g. unused `t` in `PrivacyPolicyPage.tsx:8` / `TermsOfServicePage.tsx:8` (these pages render
hardcoded TR/EN strings — see P3-1), unused feature/spec handlers in
`components/admin/EditProductPage.tsx:65-113` (a parallel un-wired editor — see P2-5), unused
`error` catch bindings. The catch-block `any`s in `AuthContext`, `hooks/index.ts`,
`useAuth.ts`(removed) were **fixed** on the branch. Remaining `any`s are mostly event/value
handlers in admin forms (`AddProductPage`, `ProductsPage`, `HomePage`, `FavoritesPage`).
*Fix:* type with `unknown`/`React.ChangeEvent<…>` and narrow; gate lint at 0 once cleared
(CLAUDE.md / ROADMAP Phase 5).

**P2-5 Duplicate admin product editors.**
`src/components/admin/AddProductPage.tsx` + `EditProductPage.tsx` vs
`src/pages/admin/AdminAddProductPage.tsx` + `AdminEditProductPage.tsx`. The `components/admin`
pair has large blocks of unused handlers (lint P2-4), suggesting one set is the live route and
the other is stale. *Fix:* confirm which is routed (`router/AppRouter.tsx`) and delete the
unused pair per the CLAUDE.md 0-importers rule. (Roadmap item.)

### P3 — Low / polish

**P3-1 Hardcoded UI strings in legal pages.**
`src/pages/PrivacyPolicyPage.tsx` / `TermsOfServicePage.tsx` import `useTranslation` but never
use `t` (hence the unused-var lint) and render literal strings — violating the CLAUDE.md
"never hardcode UI strings" rule. *Fix:* move copy into the TR/EN dicts or drop the unused
import. (Low: legal copy changes rarely.)

**P3-2 Eager `getAnalytics(app)` at module load.**
`src/config/firebase.ts:26` calls `getAnalytics` unconditionally; it can throw in non-browser /
blocked-cookie contexts and is not guarded like the Firestore network block. *Fix:* wrap in
`isSupported().then(...)` or a try/catch. Removed the unused `disableNetwork` import on the
branch.

**P3-3 SEO config drift.**
`src/config/apiConfig.ts:57` `SITE_URL:'https://fahri-eren.com'` (hyphenated) vs the real
`fahrieren.com`; `CONTACT.PHONE:'05001234567'` placeholder. Dead once P2-3 lands, but flag in
case `seoService` still reads it. *Fix:* fold real values into a single config source.

---

## Honest strengths

- **Build/deploy hardening is genuinely good.** The `src/main.tsx` build-input invariant, the
  SW MIME-poisoning guard (`public/sw.js:57-76`), `skipWaiting`/`clients.claim` self-heal, and
  the `deploy.sh` guards are well-reasoned and well-commented — exactly the kind of load-bearing
  logic that deserves the care it got.
- **Firestore rules are real, not theatre.** Default-deny, `admins write:false`, append-only
  leads, admin-gated reads, with comments explaining *why* each rule exists. The only gaps are
  unwired writers, not permissive rules.
- **Graceful degradation everywhere** — analytics fall back to localStorage on
  `permission-denied`, products return `[]` instead of throwing, the SW falls back to cached
  `index.html`. The app fails soft.
- **Clean domain modelling** — `Product`/`LocalizedText`/`FilterOptions` types are tidy and the
  in-house TR/EN i18n is consistently applied across components.
- **Honest, lockstep docs** — CLAUDE.md and ROADMAP accurately describe the invariants and the
  known operator action items.

## Fixes applied on `quality/2026-06-05` (safe only)

- Removed dead `src/hooks/useAuth.ts` (0 importers; full duplicate of `AuthContext.useAuth`).
- `: any` → `: unknown` + `instanceof Error` narrowing in `AuthContext.tsx` (×3) and
  `hooks/index.ts` (×1).
- Removed unused `disableNetwork` import (`config/firebase.ts`) and an unused catch binding
  (`LanguageContext.tsx`).
- `adsConfig.ts` `TEST_MODE` → `import.meta.env.DEV` (was `process.env.NODE_ENV`; export unused
  so behaviorally inert, removes a browser-undefined reference).
- Net: lint 51 → 42 errors; **`npm run build` + 12 vitest tests still green.**

## Routed to ROADMAP (larger refactors)

P1-1 (admin-bootstrap), P1-2 + P2-3 (delete JSONBin layer, wire leads to Firestore), P2-2
(analytics nesting), P2-5 (dedupe admin editors), P2-4 (drive lint to 0 + gate). The single
**biggest** refactor is collapsing the two data layers into Firebase-only and wiring the
contact/newsletter forms to the already-secured `contacts`/`newsletter` collections.
