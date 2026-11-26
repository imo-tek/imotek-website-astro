# imotek.tr

Corporate website of IMOTEK. Astro 5 and Tailwind 3 on the AstroWind template, static output,
deployed to Cloudflare Pages. Turkish is served at `/`, English under `/en/`.

## Run

```sh
npm ci
npm run dev      # http://localhost:4321
npm run check    # astro check + eslint + prettier
npm run build    # writes ./dist
npm run preview  # serves ./dist
npm run fix      # eslint --fix + prettier -w
```

Node 22 or newer.

## Where things live

| What                                                         | Where                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------ |
| Routes (page key → Turkish and English path)                 | `src/i18n/routes.ts`                                   |
| UI strings (menu, buttons, labels, 404, blog)                | `src/i18n/ui.ts`                                       |
| Page copy, per language                                      | `src/content-data/tr/*.ts`, `src/content-data/en/*.ts` |
| Shapes of that copy                                          | `src/content-data/types.ts`                            |
| Company facts (name, address, phone, e-mail)                 | `src/content-data/company.ts`                          |
| Blog posts                                                   | `src/content/post/tr/*.md`, `src/content/post/en/*.md` |
| Page templates (one per page type, shared by both languages) | `src/templates/`                                       |
| Route files (thin, one per language)                         | `src/pages/`, `src/pages/en/`                          |
| Header and footer menus                                      | `src/navigation.ts`                                    |
| JSON-LD builders                                             | `src/utils/schema.ts`                                  |
| Site name, title template, default OG image                  | `src/config.yaml`                                      |
| Cache and security headers                                   | `public/_headers`                                      |

All copy strings are plain text. Templates escape them, so no HTML or Markdown inside.

## Editing copy

Each page has one file per language with the same name and the same exported shape:
`home.ts`, `servicesHub.ts`, `services.ts`, `technologiesPage.ts`, `technologies.ts`, `product.ts`,
`howWeWork.ts`, `about.ts`, `contact.ts`, `legal.ts` (privacy and terms).

- **A service**: edit its object in `tr/services.ts` and `en/services.ts`. The `backend` entry is the
  fully written reference. The six keys are fixed (`aws`, `backend`, `frontend`, `mobile`,
  `architecture`, `ops`); slugs are in `src/i18n/routes.ts`. `techKeys` must exist in
  `technologies.ts`; `faqs` may be `[]`, which hides the section.
- **A technology**: add or edit an object in `tr/technologies.ts` and `en/technologies.ts` with the
  same `key`, `group` and `tier` in both. The key is the anchor on the technologies page
  (`/teknolojiler/#postgresql`). A group with no entries is not rendered.
- **Any other page**: edit the fields in its file. Most pages take a `sections` array of
  `{ title, paragraphs?, bullets?, items?, link? }` for free-form content.

`npm run check` fails on a missing field. `npm run build` also fails when the two languages have
different service or technology keys, or when a `techKeys` entry points nowhere.

## Adding a page in both languages

1. Add a key with both paths to `ROUTES` in `src/i18n/routes.ts`.
2. Add a content type to `src/content-data/types.ts`, a field to `SiteContent`, one file per
   language, and wire them in `src/content-data/index.ts`.
3. Create a template in `src/templates/` that takes `locale`, reads `getContent(locale)` and wraps
   its markup in `<PageLayout locale pageKey metadata breadcrumbs>`.
4. Create the two route files (`src/pages/<tr-path>.astro`, `src/pages/en/<en-path>.astro`), each
   rendering the template with its locale.
5. Link it from `src/navigation.ts` if it belongs in the menu or footer.

`pageKey` gives the page its canonical, hreflang tags, language switcher target and sitemap pairing.

## Blog

A post is a Markdown file named after its URL slug, in the folder of its language. Frontmatter:
`title`, `excerpt`, `publishDate`, `translationKey`, optional `updateDate`, `author`, `image`,
`imageAlt`, `draft`. Two posts with the same `translationKey` are treated as translations of each
other. `draft: true` keeps a post out of the build, the sitemap and RSS; the two sample files in the
post folders are drafts. While a language has no published post its blog index shows an empty state,
is `noindex`, and is left out of the sitemap.

## Deploy

`.github/workflows/actions.yaml` runs check and build on every pull request and push to `main`, then
deploys `dist/` to the Cloudflare Pages project `imotek-website`: production from `main`, a preview
for pull requests from this repository. It needs the repository secrets `CLOUDFLARE_API_TOKEN` and
`CLOUDFLARE_ACCOUNT_ID`.

Items waiting for the owner are listed in `OPEN-ITEMS.md`.

The template this site started from is AstroWind (MIT); see `LICENSE.md`.
