/**
 * Single route map for the whole site: page key -> path per locale.
 *
 * It drives navigation, the language switcher, canonical + hreflang tags and the sitemap
 * (see `sitemap.ts`). Keep this file free of `~/` and `astro:*` imports: `astro.config.ts`
 * loads it before Vite aliases exist.
 *
 * To add a page: add a key here, then create one thin file per locale under `src/pages/`
 * whose location matches the two paths.
 */

export const LOCALES = ['tr', 'en'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'tr';

export const SITE_URL = 'https://imotek.tr';

export const SERVICE_KEYS = ['aws', 'backend', 'frontend', 'mobile', 'architecture', 'ops'] as const;
export type ServiceKey = (typeof SERVICE_KEYS)[number];

export const ROUTES = {
  home: { tr: '/', en: '/en/' },
  services: { tr: '/hizmetler/', en: '/en/services/' },
  'service.aws': { tr: '/hizmetler/aws-bulut-altyapisi/', en: '/en/services/aws-cloud-infrastructure/' },
  'service.backend': { tr: '/hizmetler/java-backend-gelistirme/', en: '/en/services/java-backend-development/' },
  'service.frontend': { tr: '/hizmetler/react-web-arayuzleri/', en: '/en/services/react-web-frontends/' },
  'service.mobile': { tr: '/hizmetler/mobil-uygulama-gelistirme/', en: '/en/services/mobile-app-development/' },
  'service.architecture': {
    tr: '/hizmetler/sistem-tasarimi-ve-mimari/',
    en: '/en/services/system-design-and-architecture/',
  },
  'service.ops': { tr: '/hizmetler/devops-ve-altyapi-yonetimi/', en: '/en/services/devops-and-infrastructure/' },
  technologies: { tr: '/teknolojiler/', en: '/en/technologies/' },
  turklex: { tr: '/urunler/turklex/', en: '/en/products/turklex/' },
  howWeWork: { tr: '/nasil-calisiyoruz/', en: '/en/how-we-work/' },
  about: { tr: '/hakkimizda/', en: '/en/about/' },
  blog: { tr: '/blog/', en: '/en/blog/' },
  contact: { tr: '/iletisim/', en: '/en/contact/' },
  privacy: { tr: '/gizlilik-politikasi/', en: '/en/privacy-policy/' },
  terms: { tr: '/kullanim-kosullari/', en: '/en/terms/' },
} as const satisfies Record<string, Record<Locale, string>>;

export type PageKey = keyof typeof ROUTES;

/** Paths of the same page in each locale. A locale is absent when the page has no counterpart. */
export type Alternates = Partial<Record<Locale, string>>;

export const isPageKey = (value: string): value is PageKey => value in ROUTES;

export const otherLocale = (locale: Locale): Locale => (locale === 'tr' ? 'en' : 'tr');

/** Path of a page in the given locale, e.g. `localizePath('contact', 'en')` -> `/en/contact/`. */
export const localizePath = (key: PageKey, locale: Locale): string => ROUTES[key][locale];

/** Both localized paths of a page. */
export const alternatesFor = (key: PageKey): Alternates => ({ ...ROUTES[key] });

export const serviceRouteKey = (key: ServiceKey): PageKey => `service.${key}`;

/** Last URL segment of a service page, e.g. `serviceSlug('backend', 'tr')` -> `java-backend-gelistirme`. */
export const serviceSlug = (key: ServiceKey, locale: Locale): string =>
  ROUTES[serviceRouteKey(key)][locale].split('/').filter(Boolean).pop() as string;

export const blogPostPath = (locale: Locale, slug: string): string => `${ROUTES.blog[locale]}${slug}/`;

/** Locale of a URL path: everything under `/en/` is English, the rest is Turkish. */
export const localeFromPath = (pathname: string): Locale =>
  pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'tr';

/** Reverse lookup: which page key owns this path, if any. */
export const pageKeyFromPath = (pathname: string): PageKey | undefined => {
  const path = pathname.endsWith('/') ? pathname : `${pathname}/`;
  return (Object.keys(ROUTES) as PageKey[]).find((key) => LOCALES.some((locale) => ROUTES[key][locale] === path));
};

/** Where the language switcher points: the counterpart page, or the other locale's home. */
export const switchLocalePath = (alternates: Alternates | undefined, to: Locale): string =>
  alternates?.[to] ?? ROUTES.home[to];

export const absoluteUrl = (path: string): string => new URL(path, SITE_URL).href;

export interface HreflangLink {
  hreflang: Locale | 'x-default';
  href: string;
}

/**
 * hreflang set for a page: one entry per existing locale plus `x-default` -> Turkish.
 * Returns an empty list for a page that exists in a single language.
 */
export const hreflangLinks = (alternates: Alternates | undefined): HreflangLink[] => {
  if (!alternates?.tr || !alternates?.en) return [];
  return [
    { hreflang: 'tr', href: absoluteUrl(alternates.tr) },
    { hreflang: 'en', href: absoluteUrl(alternates.en) },
    { hreflang: 'x-default', href: absoluteUrl(alternates.tr) },
  ];
};
