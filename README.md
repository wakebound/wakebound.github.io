<div align="center">

<img src="public/og.jpg" alt="Wakebound" width="720">

# Wakebound

**A dark RPG inside Discord. Clear portals alone. Bring the whole server down on one boss.**

[Website](https://wakebound.github.io) · [Add to Discord](https://discord.com/oauth2/authorize?client_id=1557056806734274600&scope=bot+applications.commands&permissions=117760) · [Support server](https://discord.gg/FdBgeCAYnz) · [Privacy](https://wakebound.github.io/privacy/) · [Terms](https://wakebound.github.io/terms/)

[![Deploy](https://github.com/wakebound/wakebound.github.io/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/wakebound/wakebound.github.io/actions/workflows/deploy.yml)
[![CI](https://github.com/wakebound/wakebound.github.io/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/wakebound/wakebound.github.io/actions/workflows/ci.yml)

</div>

## About

This is the source of the public website for Wakebound, a text-and-buttons RPG that runs in your Discord server. Portals open in a channel, hunters clear them solo or team up on raid bosses, and the whole thing plays out in messages and buttons. It is free, takes about a minute to set up, and never asks for the Administrator permission.

The site is available in English at [`/`](https://wakebound.github.io) and Brazilian Portuguese at [`/pt-br/`](https://wakebound.github.io/pt-br/). The game itself lives in a separate, private repository.

<p align="center">
  <img src="src/assets/shots/en/board.png" alt="The portal board in Discord" height="360">
  <img src="src/assets/shots/en/choice.png" alt="A choice inside a portal" height="360">
</p>

## Tech

- [Astro](https://astro.build) static site, no client framework.
- Content collections for the legal pages; plain JSON in `src/data` for portals, items and balance numbers.
- Two locales (English, Brazilian Portuguese) with typed strings in `src/i18n`.
- Vitest for unit tests; a Playwright check opens every page at desktop and phone width, with and without JavaScript, looking for overflow, broken images and third-party requests.
- Built and published to GitHub Pages by GitHub Actions.

## Development

Requires Node 24.

```sh
npm ci
npx playwright install chromium   # once, for npm run check
npm run dev                       # local server with hot reload
npm test                          # unit tests
npm run check                     # type-check, build, then browser checks on every page
```

## Updating game data

`src/data/*.json` and `src/assets/catalog/` are generated, not hand-edited. In the private game repo, run the export against the production catalog:

```sh
npm run catalog -- export-site <path-to-this-repo>
```

Then commit the result here and open a pull request.

## Project structure

```
src/
  components/   page sections and shared links (bot invite, support server)
  content/      privacy policy and terms, per locale
  data/         catalog exported from the game
  i18n/         en.json, pt-br.json and the t() helper
  layouts/      base layout
  pages/        routes: / , /privacy/ , /terms/ and the /pt-br/ copies
  assets/       screenshots and catalog art
public/         og.jpg, favicon, rank and rarity icons
scripts/        check.mjs, the Playwright page check
tests/          Vitest suites
```

## Contributing

Open a pull request against `main`. CI runs `npm test` and `npm run check` and must pass. A merge to `main` deploys the site.

## Credits

- Game icons by Lorc, Skoll, Delapouite and Faithtoken from [game-icons.net](https://game-icons.net), licensed [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/).
- Fonts [Grenze](https://fontsource.org/fonts/grenze), [Alegreya Sans](https://fontsource.org/fonts/alegreya-sans) and [IBM Plex Mono](https://fontsource.org/fonts/ibm-plex-mono) through [Fontsource](https://fontsource.org), under the SIL Open Font License.

## Legal

This repository has no license file. Unless stated otherwise, the art, text and game content are all rights reserved. See the [privacy policy](https://wakebound.github.io/privacy/) and [terms](https://wakebound.github.io/terms/).
