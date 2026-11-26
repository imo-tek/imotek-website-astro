/**
 * Build-time data for `@astrojs/sitemap`: which URLs pair with which, and which to leave out.
 * Runs in Node from `astro.config.ts`, so blog posts are read straight from the file system
 * (same folders and frontmatter as the `post` content collection).
 */
import fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';

import { LOCALES, ROUTES, absoluteUrl, blogPostPath, hreflangLinks } from './routes';
import type { Alternates, Locale, PageKey } from './routes';

const POSTS_DIR = path.resolve('src/content/post');

interface PostFile {
  locale: Locale;
  slug: string;
  translationKey?: string;
}

const readPublishedPosts = (): PostFile[] =>
  LOCALES.flatMap((locale) => {
    const dir = path.join(POSTS_DIR, locale);
    if (!fs.existsSync(dir)) return [];
    return fs
      .readdirSync(dir)
      .filter((file) => /\.mdx?$/.test(file))
      .flatMap((file) => {
        const source = fs.readFileSync(path.join(dir, file), 'utf8');
        const match = /^---\r?\n([\s\S]*?)\r?\n---/.exec(source);
        const data = (match ? yaml.load(match[1]) : {}) as { draft?: boolean; translationKey?: string } | undefined;
        if (data?.draft) return [];
        return [{ locale, slug: file.replace(/\.mdx?$/, ''), translationKey: data?.translationKey }];
      });
  });

export interface SitemapData {
  /** absolute URL -> hreflang links to emit for it */
  links: Map<string, { url: string; lang: string }[]>;
  /** absolute URLs that must not be listed */
  excluded: Set<string>;
}

export const buildSitemapData = (): SitemapData => {
  const links: SitemapData['links'] = new Map();
  const excluded: SitemapData['excluded'] = new Set();

  const register = (alternates: Alternates) => {
    const entries = hreflangLinks(alternates).map(({ hreflang, href }) => ({ url: href, lang: hreflang }));
    for (const locale of LOCALES) {
      const own = alternates[locale];
      if (own) links.set(absoluteUrl(own), entries);
    }
  };

  const posts = readPublishedPosts();
  const hasPosts = (locale: Locale) => posts.some((post) => post.locale === locale);

  for (const key of Object.keys(ROUTES) as PageKey[]) {
    // A blog index without posts is `noindex` (see BlogListPage): no pairing, not listed.
    if (key === 'blog' && !LOCALES.every(hasPosts)) continue;
    register(ROUTES[key]);
  }
  const byKey = new Map<string, Alternates>();
  for (const post of posts) {
    const key = post.translationKey ?? `${post.locale}:${post.slug}`;
    byKey.set(key, { ...byKey.get(key), [post.locale]: blogPostPath(post.locale, post.slug) });
  }
  for (const alternates of byKey.values()) register(alternates);

  for (const locale of LOCALES) {
    if (!hasPosts(locale)) excluded.add(absoluteUrl(ROUTES.blog[locale]));
  }

  return { links, excluded };
};
