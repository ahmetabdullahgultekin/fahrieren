# fahrieren.com — Vite build served by nginx behind Traefik.
# Migrated off Hostinger (plan cancelled 2026-06) onto the Hetzner box.
# The image packages the pre-built dist/ (produced by `npm run build`, locally
# or in CI) so no build-time secrets (.env / firebase config) are needed here.
FROM nginx:1.27-alpine
RUN rm -f /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/fahrieren.conf
COPY dist/ /usr/share/nginx/html/
EXPOSE 80
