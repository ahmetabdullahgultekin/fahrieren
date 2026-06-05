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
npm run build      # -> dist/
npm test           # vitest run (12 tests today)
npm run lint       # ESLint (~51 no-explicit-any baseline; NOT yet gated)
./deploy.sh        # build + rsync dist/ -> Hostinger (run from a host that can SSH to Hostinger)
```

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

## CI

`.github/workflows/ci.yml` runs `npm ci && npm run build && npm test` on PRs (build-only). Operator must
add the `CI / build` check to branch protection to gate merges and unblock Dependabot PRs. Lint is NOT
gated yet (88→51 baseline; gate it once it hits 0 — see `ROADMAP.md` Phase 5).

## Conventions & gotchas

- Branch model: work on a dated `dev/<date>` branch; PR into `master`; `--admin` merge is acceptable for
  this solo repo when CI is green or the change is verified.
- Commit trailer: `Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>`.
- After any change, update `TODO.md` / `ROADMAP.md` / `README.md` / `docs/` to match.
- Dependency bumps: prefer applying + build/test-verifying on the branch over merging old-base
  Dependabot PRs (they predate the `/assets/` removal). HOLD breaking majors: Tailwind v4 (#13, build
  breaks), eslint 10 (#12), eslint-plugin-react-hooks 7 (#15) — do those on dedicated branches.
- Lint baseline lives in service/util/page files as `no-explicit-any`; type with `unknown` /
  `Record<string, unknown>` and narrow, don't suppress.
- Dead-code rule: verify a file is referenced by 0 importers (full-tree grep) before deleting.

## Operator action items (not doable from CI / a normal host)

1. `firebase deploy --only firestore:rules` (Firebase auth).
2. Real AdSense slot IDs → `src/config/adsConfig.ts`, then redeploy.
3. Add `CI / build` to branch-protection required checks.
4. Restrict the Firebase web API key to `fahrieren.com` in Google Cloud.
5. Re-submit `sitemap.xml` in Search Console.
