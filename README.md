# Fahri Eren — fahrieren.com

Multi-category trading & lead-generation site for Fahri Eren (Eren Ticaret / Eren Yumurta), a 25+ year
Antalya/Yeşilova company: **emlak** (real estate), **araç** (vehicles), **tarım / yumurta** (agriculture
& eggs), **inşaat malzemeleri** (construction materials). Turkish-first, bilingual (TR/EN),
Google-AdSense monetized, Firebase-backed, statically deployed to Hostinger.

## Tech stack

- **React** 19 + **TypeScript** 6
- **Vite** 7 (`rolldown-vite@7.1.12`)
- **Tailwind** 3.4, **Firebase/Firestore**, **TanStack Query** v5, **React Router** v7,
  **React Hook Form** + Yup
- Custom in-house i18n (`src/services/translationService.ts`, TR/EN) via `LanguageContext`
- **Vitest** + Testing Library for tests
- **Deployment:** static build → Hostinger (`fahrieren.com`)

## Development

```bash
npm install        # .npmrc sets legacy-peer-deps=true
npm run dev        # dev server (Vite)
npm run build      # production build -> dist/
npm test           # vitest run
npm run test:watch # vitest watch
npm run lint       # ESLint (baseline ~51 no-explicit-any errors; not yet gated)
```

> **Build entry is `src/main.tsx`.** `/assets/` is build output and is **git-ignored** — never commit
> it. A previously committed `/assets/` bundle was being used as the build input, so `src/` changes
> never reached production; that is fixed and guarded against.

## Deploy

The site is a Vite SPA: the browser can only run the built, hashed bundle in `dist/` — never the source.

- **Automatic:** GitHub Actions (`.github/workflows/deploy.yml`) on push to `main`/`master` runs
  `npm ci && npm run build` and rsyncs **`dist/`** → Hostinger `public_html`. (Its runner may not reach
  Hostinger from every network.)
- **Manual (canonical):**
  ```bash
  git checkout master && git pull && ./deploy.sh
  ```
  `deploy.sh` builds (`npm ci && npm run build`) and rsyncs **`dist/`** to Hostinger, with guards that
  abort if the build is missing or still references `/src/main.tsx`. Run it from a host that can SSH to
  Hostinger.

After deploying, browser-verify https://fahrieren.com: pages render, the AdSense loader is present,
no broken assets, TR/EN both work. The service worker self-heals across deploys (versioned cache +
`skipWaiting`/`clients.claim`), so returning visitors auto-recover from an old bundle.

## CI

`.github/workflows/ci.yml` runs `npm ci && npm run build && npm test` on every pull request to
`main`/`master` (build-only, no deploy). Add the `CI / build` check to branch protection to gate merges.
Lint is intentionally **not** in the gate yet (88-error baseline being driven down — see `ROADMAP.md`).

## Firebase

Project `trader-e-commerce`. Security rules live in `firestore.rules` (+ `firebase.json`, `.firebaserc`).
Deploy them with:

```bash
firebase deploy --only firestore:rules   # needs Firebase auth (operator step)
```

Rules are locked down: admin-gated writes, `admins` read-only/`write:false`, append-only
`contacts`/`newsletter`, public-counter `analytics`/`sessions`, default-deny.

## Docs

See `docs/` for operator runbooks: `ADMIN_SETUP.md`, `ADSENSE_*`, `HOSTINGER_DEPLOY.md`, `SITE_INFO.md`,
`VERIFICATION_GUIDE.md`. Planning lives in `ROADMAP.md` and `TODO.md`; agent/project conventions in
`CLAUDE.md`.

## Operator action items

1. `firebase deploy --only firestore:rules` (needs Firebase auth).
2. Paste real numeric AdSense slot IDs into `src/config/adsConfig.ts` (from `ca-pub-2016267232144093`).
3. Add the `CI / build` status check to branch-protection required checks.
4. Restrict the Firebase Web API key to `fahrieren.com` in Google Cloud (clears a console error).
5. Re-submit the refreshed `sitemap.xml` in Search Console.
