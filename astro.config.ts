import fs from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';
import type { AstroIntegration } from 'astro';

import astrowind from './vendor/integration';

import { readingTimeRemarkPlugin, responsiveTablesRehypePlugin, lazyImagesRehypePlugin } from './src/utils/frontmatter';
import { DEFAULT_LOCALE, LOCALES } from './src/i18n/routes';
import { buildSitemapData } from './src/i18n/sitemap';

import { technologies } from './src/content-data/technologies';

// Logo icons used on the technologies page, grouped by Iconify set (tabler is included whole).
const techIconSets = technologies.reduce<Record<string, string[]>>((sets, { icon }) => {
  const [set, name] = icon.split(':');
  if (set !== 'tabler') (sets[set] ??= []).push(name);
  return sets;
}, {});

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const sitemapData = buildSitemapData();

/**
 * Astro writes `src/pages/en/404.astro` to `en/404/index.html`. Cloudflare Pages serves the
 * nearest `404.html` up the tree, so the English page has to be `en/404.html`.
 */
const localized404 = (): AstroIntegration => ({
  name: 'localized-404',
  hooks: {
    'astro:build:done': ({ dir }) => {
      for (const locale of LOCALES.filter((l) => l !== DEFAULT_LOCALE)) {
        const from = new URL(`${locale}/404/index.html`, dir);
        if (!fs.existsSync(from)) continue;
        fs.renameSync(from, new URL(`${locale}/404.html`, dir));
        fs.rmdirSync(new URL(`${locale}/404/`, dir));
      }
    },
  },
});

export default defineConfig({
  output: 'static',

  // `site`, `base` and `trailingSlash: 'always'` are set by the astrowind integration from src/config.yaml.

  i18n: {
    locales: [...LOCALES],
    defaultLocale: DEFAULT_LOCALE,
    routing: { prefixDefaultLocale: false },
  },

  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      // hreflang pairs come from the route map (and post translationKeys), because
      // localized slugs cannot be paired by stripping the `/en/` prefix.
      filter: (page) => !/\/404\/?$/.test(page) && !sitemapData.excluded.has(page),
      serialize(item) {
        const links = sitemapData.links.get(item.url);
        return links?.length ? { ...item, links } : item;
      },
    }),
    mdx(),
    icon({
      include: {
        tabler: ['*'],
        ...techIconSets,
      },
    }),

    astrowind({
      config: './src/config.yaml',
    }),

    localized404(),
  ],

  markdown: {
    remarkPlugins: [readingTimeRemarkPlugin],
    rehypePlugins: [responsiveTablesRehypePlugin, lazyImagesRehypePlugin],
  },

  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
});
