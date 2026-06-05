#!/bin/bash
# Manual deploy for fahrieren.com (Hostinger shared host).
#
# IMPORTANT: this is a Vite SPA. The browser CANNOT run /src/main.tsx — only the
# built, hashed bundle in dist/ is servable. So we MUST `npm run build` and rsync
# dist/ (NOT the repo root). This mirrors .github/workflows/deploy.yml exactly.
#
# The GitHub Actions deploy auto-runs on push to master but its runner cannot
# reach Hostinger, so run this from a host that can SSH to Hostinger.
set -euo pipefail

cd "$(dirname "$0")"

echo "==> Building production bundle (npm ci + npm run build)"
npm ci
npm run build

echo "==> Verifying build output exists"
test -f dist/index.html || { echo "ERROR: dist/index.html missing — build failed"; exit 1; }
test -d dist/assets   || { echo "ERROR: dist/assets missing — build failed";   exit 1; }
# Guard against ever shipping the dev entry point.
if grep -q '/src/main.tsx' dist/index.html; then
  echo "ERROR: dist/index.html still references /src/main.tsx — not a production build"; exit 1
fi

echo "==> Deploying dist/ -> Hostinger public_html via rsync"
rsync -avz --delete \
  -e "ssh -p 65002 -o StrictHostKeyChecking=no" \
  dist/ \
  u349700627@46.202.158.52:~/domains/fahrieren.com/public_html/

echo "Deployed fahrieren.com (from dist/)"
