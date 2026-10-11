# Wakebound site

The public site for Wakebound, a dark RPG played inside Discord: https://wakebound.github.io. It is an Astro static site in English and Brazilian Portuguese, built and published to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

Catalog data comes from the private game repo. Run `npm run catalog -- export-site <path-to-this-repo>` there, against the production catalog. It writes `src/data/*.json` and `src/assets/catalog/`; commit the result here.

Before `npm run check` (type-check, build, then every page in a headless browser to catch overflow, broken images and third-party requests), install the browser once: `npx playwright install chromium`.

Changes go through pull requests to `main`; CI runs `npm test` and `npm run check`, and a merge to `main` deploys.
