import { getRssString } from '@astrojs/rss';

import { t } from '~/i18n';
import type { Locale } from '~/i18n';
import { fetchPosts } from '~/utils/blog';

/** RSS feed of one language: `/rss.xml` (Turkish) and `/en/rss.xml` (English). */
export const buildRss = async (locale: Locale): Promise<Response> => {
  const posts = await fetchPosts(locale);

  const rss = await getRssString({
    title: t(locale, 'blog.rssTitle'),
    description: t(locale, 'blog.description'),
    site: import.meta.env.SITE,
    customData: `<language>${locale}</language>`,
    items: posts.map((post) => ({
      link: post.path,
      title: post.title,
      description: post.excerpt,
      pubDate: post.publishDate,
    })),
    trailingSlash: true,
  });

  return new Response(rss, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
