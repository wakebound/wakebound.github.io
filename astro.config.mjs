import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://wakebound.github.io',
  output: 'static',
  i18n: { defaultLocale: 'en', locales: ['en', 'pt-br'], routing: { prefixDefaultLocale: false } },
});
