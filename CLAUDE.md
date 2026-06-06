# CLAUDE.md — fahrieren.com

Guidance for AI agents (and humans) working in this repo. Keep this in lockstep with the code.

## What this is

`fahrieren.com` — a bilingual (TR/EN, Turkish-first) multi-category trading & lead-generation site for
Fahri Eren (Eren Ticaret / Eren Yumurta): emlak (real estate), araç (vehicles), tarım/yumurta
(agriculture & eggs), inşaat malzemeleri (construction materials). Google-AdSense monetized,
Firebase/Firestore-backed, static SPA deployed to Hostinger.

GitHub: `ahmetabdullahgultekin/fahrieren` (default branch `master`). Always `gh -R ahmetabdullahgultekin/fahrieren`.

## Stack

React 19 + TS 6 + Vite 7 (`rolldown-vite@7.1.12`) + Tailwind 3.4 + Firebase + TanStack Query v5 +
React Router v7 + RHF/Yup. In-house i18n (`src/services/translationService.ts`, TR/EN) via
`LanguageContext` — **no i18n library; never hardcode UI strings, add keys to the TR + EN dicts**.
Vitest + Testing Library. `.npmrc` sets `legacy-peer-deps=true`; `package.json` overrides Vite to
`rolldown-vite`.

## Critical invariants (read before changing build/deploy)

1. **Build entry is `src/main.tsx`.** `/assets/` is build OUTPUT and is **git-ignored** — never commit
   it. A committed `/assets/` bundle used to be the build input, so `src/` changes never shipped. Fixed;
   don't reintroduce.
2. **The browser can only run the built bundle in `dist/`.** Never deploy the repo source `index.html`
   (it references `/src/main.tsx`, which won't run in a browser).
3. **`deploy.sh` builds + rsyncs `dist/`** (mirrors `.github/workflows/deploy.yml`). It is NOT a
   repo-root rsync. Guards abort if `dist/` is missing or still references `/src/main.tsx`.
4. **Service worker (`public/sw.js`) self-heals across deploys** — versioned `CACHE_NAME`,
   `skipWaiting`/`clients.claim`, only caches genuine js/css/wasm 200s (never the `.htaccess` HTML
   fallback), network-first HTML. When you change cached behavior, **bump `CACHE_NAME`**. The
   build-shipped copy is `public/sw.js` (Vite copies `public/` → `dist/`); there is no root `sw.js`.

## Commands

```bash
npm run dev        # dev server
npm run build      # -> dist/  (esbuild via vite; NO typecheck — this is the CI gate)
npm test           # vitest run (37 tests as of 2026-06-06)
npm run lint       # ESLint — 0 errors; gated in CI (chore/lint-zero-2026-06-05)
./deploy.sh        # build + rsync dist/ -> Hostinger (run from a host that can SSH to Hostinger)
```

> **`npm run build` does NOT run `tsc`.** It uses Vite/esbuild, which transpiles
> without type-checking. The repo currently has many pre-existing `tsc -b` errors
> (duplicate i18n keys, `ContactInfo.phoneUri`, etc.) — `tsc -b` is NOT the gate
> and was never green. `npm run build-with-tsc` exists but will fail on that
> backlog. Gate on build + test + lint; don't be alarmed by standalone `tsc` errors
> you didn't introduce (verify by stashing your diff and re-running).

After any deploy, **browser-verify** https://fahrieren.com: app mounts (`#root` non-empty), AdSense
loader present, real GA id `G-7L1T6D6WL0` (not the `G-XXXXXXXXXX` placeholder), no broken/MIME-error
assets, TR/EN toggle works.

## Deploy flow

- Auto: push to `master` → GitHub Actions builds + rsyncs `dist/`. Runner may not reach Hostinger.
- Manual (canonical): `git checkout master && git pull && ./deploy.sh`.
- Hostinger target: `u349700627@46.202.158.52:~/domains/fahrieren.com/public_html/` (port 65002).
- `.htaccess` does SPA fallback (`!-f` → `index.html`) — so a deleted/old asset hash returns
  `200 text/html`, which is exactly why the SW must never cache the fallback as a module.

## Firebase

Project `trader-e-commerce`. Rules in `firestore.rules` (+ `firebase.json`, `.firebaserc`). Rules are
locked down: admin-gated writes, `admins` read-only/`write:false`, append-only `contacts`/`newsletter`,
public-counter `analytics`/`sessions`, default-deny. `isAdmin()` = `exists(/admins/$(uid))`, matching
`AuthService.isAdmin`. **Deploying rules is an operator step:** `firebase deploy --only firestore:rules`
(needs Firebase auth). The Firebase **web** config keys are public (not secrets); a console
`Installations: API key not valid` error is a key-restriction config issue, not a leak.

## AdSense

Publisher `ca-pub-2016267232144093`. The loader (`adsbygoogle.js`) is in `index.html` `<head>`.
`src/config/adsConfig.ts` holds slot IDs; `isRealSlot()` (numeric-only) makes placeholder/empty slots
render NOTHING (no broken `<ins>`, no policy violation). **Operator must paste real numeric slot IDs**
to make units fill — no code change needed after that.

## Reliable lead pipeline (no silent drops)

Shipped 2026-06-06, behind `VITE_LEAD_PIPELINE_ENABLED` (default **OFF** = legacy path). Design:
`docs/design/lead-pipeline.md` + ADR `docs/adr/0001-…`. Key files:

- `src/services/leadOutbox.ts` — durable `localStorage` outbox (key
  `fahrieren.leadOutbox.v1`). A lead is persisted **before** any network call → never silently
  dropped. Exponential backoff (2 s→5 min, 6 attempts), idempotency key per item, storage/clock
  injectable for tests. **Pure of Firebase** — delivery is an injected `deliver` fn.
- `src/services/leadService.ts` — `LeadService.submitContact/subscribeNewsletter/flush/retry`.
  Writes the Firestore doc (`addDoc`) with `clientLeadId` (idempotency) + `serverTimestamp()`.
  Returns `{success}` / `{queued}` (saved, will retry — NOT a failure) / `{error}`. The legacy
  `dataService` fake-`{success:true}` swallow is bypassed on this path.
- `src/hooks/index.ts` — `useContactForm`/`useNewsletter` are flag-gated (legacy path byte-identical
  when OFF); `useLeadOutbox` powers recovery (flush on mount + on `online`).
- `src/components/leads/LeadOutboxBanner.tsx` — recovery affordance (mounted in `Layout`).
- `firestore.rules` — `contacts`/`newsletter` now shape/size/allowlist-validated + require
  `consentAt`/`clientLeadId`/server `createdAt`.
- i18n keys live under `leads.*` in BOTH the TR and EN blocks of `translationService.ts`.

Operator-gated follow-ups (NOT shipped): App Check enforcement, Cloud Function notification (S3),
admin LeadsPage (S4), and finally flipping the flag ON in prod + deleting the dead JSONBin stack.

## CI

`.github/workflows/ci.yml` runs `npm ci && npm run build && npm test && npm run lint` on PRs. Lint is now
gated (0-error baseline as of 2026-06-05). Operator must add the `CI / build` check to branch protection
to gate merges and unblock Dependabot PRs.

## Conventions & gotchas

- Branch model: work on a dated `dev/<date>` branch; PR into `master`; `--admin` merge is acceptable for
  this solo repo when CI is green or the change is verified.
- Commit trailer: `Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>`.
- After any change, update `TODO.md` / `ROADMAP.md` / `README.md` / `docs/` to match.
- Dependency bumps: prefer applying + build/test-verifying on the branch over merging old-base
  Dependabot PRs (they predate the `/assets/` removal).
  - **eslint 10 (#12) + eslint-plugin-react-hooks 7 (#15): CLOSED 2026-06-06.** Re-confirmed
    breaking: eslint 10 rejects react-hooks' legacy string-array `plugins` key in flat config
    (exit 2). A manual flat-config migration loads, but react-hooks 7's new
    `react-hooks/set-state-in-effect` rule then flags 6 pre-existing effect violations in
    `src/hooks/index.ts` → lint exits 1. Needs a dedicated branch: migrate the config AND refactor
    the effects. Tracked in ROADMAP "Future / Professionalization".
  - **Tailwind v4 (#13): LEFT OPEN** — major engine/config rewrite with visual implications; needs
    a dedicated visual-review branch (`@tailwindcss/postcss`, `@import "tailwindcss"`, CSS-first
    `@theme`). Do NOT auto-merge.
- Lint baseline lives in service/util/page files as `no-explicit-any`; type with `unknown` /
  `Record<string, unknown>` and narrow, don't suppress.
- Dead-code rule: verify a file is referenced by 0 importers (full-tree grep) before deleting.

## Operator action items (not doable from CI / a normal host)

1. `firebase deploy --only firestore:rules` (Firebase auth).
2. Real AdSense slot IDs → `src/config/adsConfig.ts`, then redeploy.
3. Add `CI / build` to branch-protection required checks.
4. Restrict the Firebase web API key to `fahrieren.com` in Google Cloud.
5. Re-submit `sitemap.xml` in Search Console.
