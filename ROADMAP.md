# ROADMAP — fahrieren.com

> Fahri Eren (Eren Ticaret / Eren Yumurta) — a multi-category trading and lead-generation
> site for a 25+ year Antalya/Yeşilova company spanning **emlak** (real estate),
> **araç** (vehicles), **tarım / yumurta** (agriculture & eggs), and **inşaat malzemeleri**
> (construction materials). Turkish-first, bilingual (TR/EN), Google-AdSense monetized,
> Firebase-backed, statically deployed to Hostinger.
>
> This roadmap is intentionally ambitious **and** realistic: every phase lists concrete,
> shippable work grounded in the actual codebase, ordered so that each phase de-risks the
> next. History is preserved below the line.

---

## Vision

A fast, SEO-strong, bilingual catalog + lead-funnel that:

- showcases listings across four categories with rich, schema-marked product detail pages;
- converts visitors to leads primarily via WhatsApp/phone, with durable stored leads as backup;
- generates reliable passive revenue through correctly-served, policy-compliant AdSense units;
- is safely operable by a single non-technical admin (Firestore-backed CRUD behind real auth
  and locked-down security rules);
- ships deterministically from Git to Hostinger behind a real CI quality gate, with a
  self-healing PWA so a deploy never strands a returning visitor on a stale bundle.

## Tech stack (verified)

React 19 + TypeScript + Vite 7 (`rolldown-vite@7.1.12`) + Tailwind 3.4 + Firebase/Firestore +
TanStack Query v5 + React Router v7 + React Hook Form + Yup. Custom in-house i18n
(`src/services/translationService.ts`, ~750 lines, TR/EN) via `LanguageContext` — no i18n
library. Lazy-loaded routes. Vitest + Testing Library for tests. Static build → Hostinger
(`fahrieren.com`) via `deploy.sh` (build + rsync `dist/`) and a GitHub Actions deploy workflow
on push to `main`/`master`.

## Operating principles

- **Revenue and trust first.** Anything touching auth, Firestore rules, or AdSense policy is P0.
- **Never ship a stale build.** The Vite entry is `src/main.tsx`; `/assets/` is build output and
  is git-ignored. `deploy.sh` builds and rsyncs `dist/` (never the repo root). The service worker
  self-heals across deploys (versioned cache + `skipWaiting`/`clients.claim`).
- **Additive, reversible changes.** Prefer feature flags and additive Firestore rules over
  destructive edits; AdSense stays policy-safe by rendering nothing for unconfigured slots.
- **Gate on green.** `npm ci && npm run build && npm test` must pass on every PR; lint joins the
  gate once the `no-explicit-any` baseline is driven to zero.

---

## Reliable Lead Pipeline — tier 1 SHIPPED (2026-06-06)

The site's most important reliability guarantee: **a submitted lead is never
silently dropped.** Design + ADR: `docs/design/lead-pipeline.md`,
`docs/adr/0001-lead-delivery-and-abuse-protection.md`. Diagram:
`docs/diagrams/lead-pipeline.mmd`. Shipped behind `VITE_LEAD_PIPELINE_ENABLED`
(default **OFF** = legacy path, fully reversible kill-switch).

**Done this cycle (client-resilience tier, flag-gated):**

- [x] **Durable local outbox** (`src/services/leadOutbox.ts`) — leads persist to
  `localStorage` *before* any network call; survive reload/crash/offline.
- [x] **Idempotency keys** — each lead carries a stable `clientLeadId`; the outbox
  never re-delivers a `sent` item (dedupes at-least-once retries).
- [x] **Retry with exponential backoff** (2 s → 5 min cap, 6 attempts), auto on
  mount and on browser `online`.
- [x] **Explicit success/queued/error UX** — `LeadService` returns a real result;
  the fake `{ success: true }` swallow in `dataService` is bypassed on this path.
- [x] **Recovery affordance** — `LeadOutboxBanner` lists queued/failed leads with
  per-item + bulk retry and discard.
- [x] **Hardened Firestore rules** — shape/size/field-allowlist validation +
  required `consentAt` + server `createdAt` on `contacts`/`newsletter`.
- [x] **KVKK/GDPR consent** checkbox + `consentAt` timestamp (flag-ON).
- [x] **Tests** — outbox/idempotency/backoff/retry + service + hook status (25 new).

**Next (operator-gated — Firebase Console / Blaze plan; tracked in Phase 1/4):**

- [ ] Enable **App Check** (reCAPTCHA Enterprise) enforcement; add site key.
- [ ] Deploy hardened **Firestore rules** (`firebase deploy --only firestore:rules`).
- [ ] **Cloud Function** `onNewContactLead` notification (S3) — Blaze plan.
- [ ] **Admin LeadsPage** (S4) — list/triage/CSV/WhatsApp deep-link.
- [ ] Flip `VITE_LEAD_PIPELINE_ENABLED=true` in prod after a canary soak; then
  delete the dead JSONBin stack.

---

## Phase 0 — Foundation hardening (DONE / shipped this cycle)

The build-and-deploy substrate everything else depends on.

- [x] **Firestore rules lockdown** — admin-gated writes, `admins` read-only/`write:false`,
  append-only `contacts`/`newsletter`, public-counter `analytics`/`sessions`, default-deny.
  (`firebase deploy --only firestore:rules` is an OPERATOR step — needs Firebase auth.)
- [x] **AdSense loader wired** — async `adsbygoogle.js` in `index.html`; `isRealSlot()` guard so
  placeholder/empty slots render nothing (no broken `<ins>`, no policy hit).
- [x] **Stale-build root-cause fix** — `index.html` repointed from a committed `/assets/` bundle
  to `src/main.tsx`; `/assets/` removed + git-ignored; the 975 KB "main chunk" was the doubled
  artifact (now a 228 KB app chunk, no size warning).
- [x] **deploy.sh corrected** — builds + rsyncs `dist/` (was rsyncing the repo root → would have
  shipped a source `index.html` referencing `/src/main.tsx` with no `/assets/` = a blank site).
- [x] **Self-healing service worker** — versioned cache, `skipWaiting`/`clients.claim`, never
  caches the HTML fallback as a module, network-first HTML, auto-reload on controllerchange.
- [x] **GA real id** (`G-7L1T6D6WL0`, env-overridable + validated) — placeholder removed.
- [x] **Sitemap `lastmod` refreshed**; **CI build+test gate** on PRs; **vitest** introduced (12 tests).
- [x] **Safe dependency bumps** — protobufjs 7.6.2 + @protobufjs/utf8 1.1.1 (security) + @types/node 25.6.0.
- [x] **Dead code removed** + first `no-explicit-any` sweep (eslint 88 → 51).

## Phase 1 — Security & data integrity

- [ ] **Deploy & verify Firestore rules in production** (operator runs the deploy; then confirm in
  the Rules Playground that a non-admin session cannot write `products`/`admins`).
- [ ] **App Check** (reCAPTCHA v3) on Firestore/Storage to stop scripted abuse of the public
  `analytics`/`contacts`/`newsletter` create paths.
- [ ] **Per-collection rate-limit / shape validation** in rules (max field sizes, required fields,
  reject oversized analytics writes) — the public create paths are the remaining soft spot.
- [ ] **Resolve the Firebase Web API-key error** surfaced in the browser console
  (`Installations: API key not valid`) — restrict the key to the prod domain in the Google Cloud
  console and confirm Installations/Analytics init cleanly. (Web keys are public; this is a
  config/restriction fix, not a secret leak.)
- [ ] **Admin session hardening** — short-lived sessions, explicit sign-out everywhere, and an
  audit trail (who edited which product when) in a protected `audit` collection.
- [ ] **Secret & config hygiene** — keep `.env` out of git (done), document the required `VITE_*`
  vars, and move the Firebase config to `import.meta.env` for environment portability.

## Phase 2 — AdSense revenue maturity

- [ ] **Paste real ad-unit slot IDs** (operator) into `src/config/adsConfig.ts`; confirm fill on
  home/products. The loader + `isRealSlot()` guard + `AdBanner` wiring are already in place.
- [ ] **Strategic placements** — home top banner, in-listing (every N products), product-detail
  rectangle, and a sticky sidebar on desktop only (`MIN_WIDTH` already modelled in `adsConfig`).
- [ ] **Layout-shift-safe ad slots** — reserve height so ads don't tank CLS / Core Web Vitals.
- [ ] **Consent / privacy** — a KVKK/GDPR-aware consent banner gating non-essential cookies and
  personalized ads (EU/UK visitors), wired to AdSense consent signals; ties into the existing
  privacy + terms pages.
- [ ] **`ads.txt` + policy review** — keep `ads.txt` correct, ensure sufficient unique content per
  page (AdSense content policy), and add a "low-value-content" guard for thin category pages.
- [ ] **Revenue observability** — surface AdSense + GA4 funnel basics in the admin dashboard.

## Phase 3 — Listings, catalog & search (product depth)

- [ ] **Pagination / infinite scroll** on `ProductsPage` for scale.
- [ ] **Rich, category-aware filters** — price range, location, category-specific facets (rooms/m²
  for emlak, year/km for araç, quantity/grade for tarım, material/brand for inşaat).
- [ ] **Client + (optional) server search** — fast in-memory search now; a hosted index later if the
  catalog grows.
- [ ] **Per-product structured data** — `Product` + `Offer` JSON-LD on detail pages, breadcrumb
  schema, and category landing pages with unique copy (SEO + AdSense content depth).
- [ ] **Category landing pages** — `/emlak`, `/arac`, `/tarim`, `/insaat` with curated intros,
  featured listings, and their own canonical/OG metadata.
- [ ] **Favorites polish** — durable per-device favorites, share-a-favorites-list, and a "recently
  viewed" rail.

## Phase 4 — Lead funnel & admin UX

- [x] **Persist contact submissions** durably (outbox + idempotent Firestore write) in addition to
  the WhatsApp hand-off, so no lead is lost if WhatsApp is closed — SHIPPED 2026-06-06 behind
  `VITE_LEAD_PIPELINE_ENABLED` (see the Reliable Lead Pipeline section above). Flip the flag in
  prod after canary soak.
- [ ] **Admin lead inbox** — list/triage stored leads, mark contacted, export CSV (design S4).
- [ ] **Newsletter** — durable sign-up persistence SHIPPED on the same flag; still needs a real
  send path (or document it as collect-only) and double opt-in.
- [ ] **Admin product CRUD UX** — inline validation, optimistic updates, bulk actions, draft/publish
  state, and an activity/audit view.
- [ ] **Image upload story** — replace the `uploadProductImage` stub with Firebase Storage (already
  initialized) behind the hardened rules, with client-side compression; or document manual-by-design.

## Phase 5 — Testing & code quality

- [ ] **Grow the test suite** — render tests for every page, a `LanguageContext` switch test, an
  `AdBanner`/`GoogleAdSense` "renders nothing for placeholder slot" test, and service unit tests
  (apiManager cache TTL, seoService JSON-LD shape).
- [x] **Drive `no-explicit-any` + `no-unused-vars` + `react-refresh` to zero** (42 errors → 0)
  and **gate `npm run lint` in CI** — done 2026-06-05 (`chore/lint-zero-2026-06-05`). Add `tsc -b`
  to CI as a follow-up for full type-gate.
- [ ] **Coverage threshold** in CI (start at a realistic floor, ratchet up).
- [ ] **E2E smoke** — a Playwright job that loads the deployed home/products, asserts the app
  mounts, the AdSense loader is present, and TR/EN toggles — catching exactly the stale-bundle
  class of regression this cycle uncovered.

### From the 2026-06-05 code-quality review (`docs/CODE_QUALITY_2026-06-05.md`)

- [ ] **Collapse the two data layers into Firebase-only (biggest refactor).** The durable lead
  pipeline (2026-06-06) already routes contact/newsletter writes to Firestore when
  `VITE_LEAD_PIPELINE_ENABLED=true`, bypassing the JSONBin `apiManager` path (which only runs as
  the flag-OFF legacy fallback). Remaining: once the flag is permanently ON in prod, delete the
  dead JSONBin stack (`services/apiManager.ts` lead methods, `config/apiConfig.ts` JSONBIN keys,
  the fake-success catches in `services/dataService.ts` — keep static `getPartners`/`getPersonalInfo`)
  and re-point `seoService` analytics/contact-info reads (review P1-2 / P2-3).
- [ ] **Fix or remove the broken admin-bootstrap path.** `AuthService.createAdminUser` does an
  auto-ID `addDoc` that the rules reject (`admins write:false`) and that `isAdmin` (UID-keyed)
  would never match; the `AuthModal` "create admin" button cannot work. Remove it (admins are
  seeded via Console/Admin SDK) or make it `setDoc(doc(db,'admins',uid))` behind a dev guard
  (review P1-1).
- [ ] **Fix analytics nesting.** `analyticsService` writes dotted keys (`pageViews.${page}`) via
  `setDoc(merge:true)`, which creates literal-dotted top-level fields instead of nested objects,
  so `getAnalyticsData` reads empty breakdowns. Use `updateDoc` dotted paths or build the nested
  object client-side (review P2-2).
- [ ] **De-duplicate the admin product editors.** `components/admin/{Add,Edit}ProductPage.tsx`
  vs `pages/admin/Admin{Add,Edit}ProductPage.tsx` — confirm the routed pair and delete the stale
  one (review P2-5; the unused-handler lint in `components/admin/EditProductPage.tsx` flags it).
- [ ] **Localize the legal pages** — `PrivacyPolicyPage`/`TermsOfServicePage` hardcode TR/EN
  copy; move copy into the dicts for bilingual support. (Unused import already removed in lint pass.)

## Phase 6 — SEO, performance & PWA

- [ ] **Pre-render / SSG** key public routes (vite-ssg or a prerender step) so crawlers and the
  AdSense bot get content-rich HTML without executing JS.
- [ ] **Automate `sitemap.xml`** generation at build time (lastmod from content), auto-submit / ping
  Search Console.
- [ ] **Core Web Vitals** — image `srcset`/AVIF/WebP, route-level code-split audit, font-display
  swap, and reserved ad slots to protect CLS; track CWV in GA4.
- [ ] **PWA depth** — offline catalog browsing, installable app polish, push for new-listing alerts
  (opt-in), building on the now-self-healing service worker.

## Phase 7 — Image pipeline & media

- [ ] **Upload → optimize → serve** pipeline — on upload, generate responsive sizes + modern formats
  (Storage + a transform step), strip EXIF, and emit `srcset`.
- [ ] **CDN-friendly caching** and a sensible placeholder/blur-up strategy for listing thumbnails.
- [ ] **Lazy-load + LQIP** across listings and detail galleries.

## Phase 8 — Analytics, growth & internationalization

- [ ] **GA4 funnels & events** — category views, product views, WhatsApp clicks, favorite adds,
  contact submits; surface a lightweight KPI panel in admin.
- [ ] **Content engine** — a small blog/guides section (alım-satım rehberleri) for SEO + AdSense
  content depth, with TR/EN parity.
- [ ] **i18n completeness** — finish EN coverage (the login link + `<html lang>` still render TR),
  add `hreflang`, and keep the dictionary lint-checked for missing keys.

---

## Future / Professionalization

Longer-horizon investments that turn a solo-run site into a maintainable, professional product.
None are required for revenue today; each is a deliberate step-up when scale or team size warrants it.

- **Environments & releases** — a real staging environment (separate Firebase project + a
  `staging.fahrieren.com`), tagged releases, and a documented rollback (the git history of the old
  `/assets/` bundle was this cycle's safety net; formalize it).
- **CI/CD maturity** — required status checks (build, test, lint, `tsc`, coverage) enforced in
  branch protection; preview deploys per PR; dependency-update automation with the green gate so
  Dependabot PRs merge themselves when safe.
- **Tailwind v4 migration** — a dedicated branch: `@tailwindcss/postcss`, `@import "tailwindcss"`,
  CSS-first `@theme` for the custom `primary` palette, re-verify `@apply` usages, visual-diff every
  page. (Held off the dependency stream because v4 is a breaking rewrite.)
- **ESLint 10 + plugin majors** — verified 2026-06-06: eslint 10 (Dependabot #12) +
  `eslint-plugin-react-hooks` 7 (#15) are a paired breaking upgrade. eslint 10 rejects the
  plugin's legacy string-array `plugins` key in flat config (exit 2); a manual flat-config
  migration loads, but react-hooks 7's new rules (`react-hooks/set-state-in-effect`) then flag
  6 pre-existing effect-pattern violations in `src/hooks/index.ts` (the "you-might-not-need-an-
  effect" `setState`-in-`useEffect` pattern). Both Dependabot PRs were CLOSED; do this as a
  dedicated branch: migrate the config AND refactor the 6 effects so lint runs green, then
  enforce the new rules.
- **Observability** — error reporting (Sentry or similar), uptime monitoring on `fahrieren.com`,
  and a synthetic check that fails loudly if the live bundle ever goes stale again.
- **Security posture** — periodic dependency-audit review, CSP headers, Firebase App Check
  enforcement, and a documented data-retention / KVKK deletion process.
- **Accessibility** — WCAG AA pass (focus states, contrast, alt text, keyboard nav, tap targets),
  with an automated a11y check in CI.
- **Headless content model** — if the catalog grows, consider a typed content schema and an
  admin-friendly CMS layer over Firestore so non-technical edits stay safe.
- **Performance budget** — enforce bundle-size and CWV budgets in CI to prevent regressions.
- **Documentation** — keep `CLAUDE.md`, `README`, and `docs/` in lockstep with the code (operator
  runbooks for deploy, AdSense slot entry, and Firestore-rule deployment already live in `docs/`).

---

## Operational notes

- **Deploy:** GitHub Actions on push to `main`/`master` builds and rsyncs `dist/` → Hostinger; its
  runner cannot reach Hostinger from some networks, so the canonical manual path is
  `git checkout master && git pull && ./deploy.sh` from a host that can SSH to Hostinger.
  `deploy.sh` builds (`npm ci && npm run build`) and rsyncs **`dist/`** (with guards that abort if
  the build is missing or still references `/src/main.tsx`).
- **Vite entry** is `src/main.tsx`; `/assets/` is build output and git-ignored — never commit it.
- `.npmrc` sets `legacy-peer-deps=true`; `package.json` overrides Vite to `rolldown-vite@7.1.12`.
- **Firebase project:** `trader-e-commerce`. Rules in `firestore.rules` (+ `firebase.json`,
  `.firebaserc`); deploy with `firebase deploy --only firestore:rules` (operator / Firebase auth).
- Admin & AdSense runbooks: `docs/ADMIN_SETUP.md`, `docs/ADSENSE_*`, `docs/HOSTINGER_DEPLOY.md`.

## Operator action items (cannot be done from CI / this host)

1. `firebase deploy --only firestore:rules` (needs Firebase auth) — pushes the hardened rules live.
2. Paste real numeric AdSense slot IDs into `src/config/adsConfig.ts` (from the
   `ca-pub-2016267232144093` account), then redeploy.
3. Add the `CI / build` (and later `lint`/`tsc`) status check to branch-protection required checks.
4. Restrict the Firebase Web API key to `fahrieren.com` in Google Cloud (clears the console error).
5. Re-submit the refreshed `sitemap.xml` in Search Console.
