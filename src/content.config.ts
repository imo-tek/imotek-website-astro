import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Blog posts: `src/content/post/<locale>/<slug>.md(x)`.
 * The file name is the URL slug; the folder is the language.
 */
const post = defineCollection({
  loader: glob({ pattern: '{tr,en}/*.{md,mdx}', base: 'src/content/post' }),
  schema: z.object({
    title: z.string(),
    /** One or two sentences: list text, meta description and RSS summary. */
    excerpt: z.string(),
    publishDate: z.date(),
    updateDate: z.date().optional(),
    /** `true` keeps the post out of the build, the sitemap and RSS. */
    draft: z.boolean().default(false),
    /** Same value on the Turkish and English version of a post; pairs them for hreflang and the language switcher. */
    translationKey: z.string(),
    /** Real author name. Defaults to the company. */
    author: z.string().optional(),
    /** `~/assets/images/...` path of a cover image. */
    image: z.string().optional(),
    imageAlt: z.string().optional(),
  }),
});

export const collections = { post };
