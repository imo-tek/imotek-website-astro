import { getContent } from '~/content-data';
import { SERVICE_KEYS, localizePath, serviceRouteKey, t } from '~/i18n';
import type { Locale, PageKey, UiKey } from '~/i18n';

export interface NavLink {
  text: string;
  href: string;
}

const link = (locale: Locale, key: PageKey, label: UiKey): NavLink => ({
  text: t(locale, label),
  href: localizePath(key, locale),
});

/** Header menu, in display order. */
export const getHeaderData = (locale: Locale): { links: NavLink[] } => ({
  links: [
    link(locale, 'services', 'nav.services'),
    link(locale, 'technologies', 'nav.technologies'),
    link(locale, 'turklex', 'nav.turklex'),
    link(locale, 'howWeWork', 'nav.howWeWork'),
    link(locale, 'blog', 'nav.blog'),
    link(locale, 'contact', 'nav.contact'),
  ],
});

/** Footer: all six services, the company pages and the legal links. */
export const getFooterData = (locale: Locale) => {
  const { services } = getContent(locale);
  return {
    links: [
      {
        title: t(locale, 'nav.services'),
        links: SERVICE_KEYS.map((key) => ({
          text: services.find((service) => service.key === key)?.navTitle ?? key,
          href: localizePath(serviceRouteKey(key), locale),
        })),
      },
      {
        title: t(locale, 'nav.company'),
        links: [
          link(locale, 'about', 'nav.about'),
          link(locale, 'howWeWork', 'nav.howWeWork'),
          link(locale, 'technologies', 'nav.technologies'),
          link(locale, 'turklex', 'nav.turklex'),
          link(locale, 'blog', 'nav.blog'),
          link(locale, 'contact', 'nav.contact'),
        ],
      },
    ],
    secondaryLinks: [link(locale, 'privacy', 'nav.privacy'), link(locale, 'terms', 'nav.terms')],
    footNote: t(locale, 'site.footNote', { year: new Date().getFullYear() }),
  };
};
