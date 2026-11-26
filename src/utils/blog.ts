import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

import { LOCALES, blogPostPath } from '~/i18n';
import type { Alternates, Locale } from '~/i18n';

export const POSTS_PER_PAGE = 10;

export interface Post {
  entry: CollectionEntry<'post'>;
  locale: Locale;
  slug: string;
  path: string;
  title: string;
  excerpt: string;
  publishDate: Date;
  updateDate?: Date;
  translationKey: string;
  author?: string;
  image?: string;
  imageAlt?: string;
}

let cache: Promise<Post[]> | undefined;

const load = async (): Promise<Post[]> => {
  const entries = await getCollection('post', ({ data }) => !data.draft);
  return entries
    .map((entry) => {
      // entry.id is "<locale>/<slug>"
      const [locale, slug] = entry.id.split('/') as [Locale, string];
      return { ...entry.data, entry, locale, slug, path: blogPostPath(locale, slug) };
    })
    .sort((a, b) => b.publishDate.valueOf() - a.publishDate.valueOf());
};

/** Published (non-draft) posts of one language, newest first. */
export const fetchPosts = async (locale: Locale): Promise<Post[]> => {
  cache ??= load();
  return (await cache).filter((post) => post.locale === locale);
};

/** Paths of a post and of its translation (same `translationKey`), if one is published. */
export const postAlternates = async (post: Post): Promise<Alternates> => {
  const alternates: Alternates = {};
  for (const locale of LOCALES) {
    const match = (await fetchPosts(locale)).find((other) => other.translationKey === post.translationKey);
    if (match) alternates[locale] = match.path;
  }
  return alternates;
};
