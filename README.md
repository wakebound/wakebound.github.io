# Wakebound site

The public site for Wakebound, a dark RPG played inside Discord: https://wakebound.github.io. It is an Astro static site in English and Brazilian Portuguese, built and published to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

Live numbers and catalog data come from the bot repo: run its `export-site` command and commit the generated data files here, then push to `main` to redeploy. Run `npm run check` before pushing; it type-checks, builds and loads every page in a headless browser to catch overflow, broken images and third-party requests.
