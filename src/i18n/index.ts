import { DEFAULT_LOCALE, LOCALES } from './routes';
import type { Locale } from './routes';

export * from './routes';
export { t } from './ui';
export type { UiKey } from './ui';

/** Narrow `Astro.currentLocale` (string | undefined) to a supported locale. */
export const getLocale = (currentLocale: string | undefined): Locale =>
  (LOCALES as readonly string[]).includes(currentLocale ?? '') ? (currentLocale as Locale) : DEFAULT_LOCALE;

export const OG_LOCALE: Record<Locale, string> = { tr: 'tr_TR', en: 'en_US' };

const DATE_LOCALE: Record<Locale, string> = { tr: 'tr-TR', en: 'en-GB' };

/** `5 Mart 2026` / `5 March 2026`. Accepts a Date or an ISO date string. */
export const formatDate = (date: Date | string, locale: Locale): string =>
  new Intl.DateTimeFormat(DATE_LOCALE[locale], {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(typeof date === 'string' ? new Date(date) : date);
