/**
 * Entry point for page copy. Templates call `getContent(locale)`.
 *
 * Besides the type check, `validate()` runs at build time and fails the build when the two
 * locales drift apart (different service keys) or a key points nowhere.
 */
import { LOCALES, SERVICE_KEYS } from '~/i18n/routes';
import type { Locale, ServiceKey } from '~/i18n/routes';
import type { Service, SiteContent, Technology } from './types';

import { services as trServices } from './tr/services';
import { technologies } from './technologies';
import { home as trHome } from './tr/home';
import { servicesHub as trServicesHub } from './tr/servicesHub';
import { technologiesPage as trTechnologiesPage } from './tr/technologiesPage';
import { product as trProduct } from './tr/product';
import { howWeWork as trHowWeWork } from './tr/howWeWork';
import { about as trAbout } from './tr/about';
import { contact as trContact } from './tr/contact';
import { privacy as trPrivacy, terms as trTerms } from './tr/legal';

import { services as enServices } from './en/services';
import { home as enHome } from './en/home';
import { servicesHub as enServicesHub } from './en/servicesHub';
import { technologiesPage as enTechnologiesPage } from './en/technologiesPage';
import { product as enProduct } from './en/product';
import { howWeWork as enHowWeWork } from './en/howWeWork';
import { about as enAbout } from './en/about';
import { contact as enContact } from './en/contact';
import { privacy as enPrivacy, terms as enTerms } from './en/legal';

const content: Record<Locale, SiteContent> = {
  tr: {
    services: trServices,
    technologies,
    home: trHome,
    servicesHub: trServicesHub,
    technologiesPage: trTechnologiesPage,
    product: trProduct,
    howWeWork: trHowWeWork,
    about: trAbout,
    contact: trContact,
    privacy: trPrivacy,
    terms: trTerms,
  },
  en: {
    services: enServices,
    technologies,
    home: enHome,
    servicesHub: enServicesHub,
    technologiesPage: enTechnologiesPage,
    product: enProduct,
    howWeWork: enHowWeWork,
    about: enAbout,
    contact: enContact,
    privacy: enPrivacy,
    terms: enTerms,
  },
};

const validate = () => {
  const errors: string[] = [];
  const sorted = (values: string[]) => [...values].sort().join(',');
  const duplicates = (values: string[]) => values.filter((value, index) => values.indexOf(value) !== index);

  for (const locale of LOCALES) {
    const { services, technologies, servicesHub } = content[locale];
    const where = `src/content-data/${locale}`;

    if (sorted(services.map((s) => s.key)) !== sorted([...SERVICE_KEYS])) {
      errors.push(`${where}/services.ts must contain each service key exactly once: ${SERVICE_KEYS.join(', ')}`);
    }
    const techKeys = technologies.map((tech) => tech.key);
    for (const key of duplicates(techKeys)) errors.push(`src/content-data/technologies.ts: duplicate key "${key}"`);
    for (const key of techKeys) {
      if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(key))
        errors.push(`src/content-data/technologies.ts: key "${key}" is not kebab-case`);
    }
    for (const service of services) {
      for (const key of service.techKeys) {
        if (!techKeys.includes(key))
          errors.push(`${where}/services.ts: "${service.key}" uses unknown techKey "${key}"`);
      }
      if (service.relatedKeys.includes(service.key))
        errors.push(`${where}/services.ts: "${service.key}" relates to itself`);
    }
    const grouped = servicesHub.groups.flatMap((group) => group.serviceKeys);
    if (sorted(grouped) !== sorted([...SERVICE_KEYS])) {
      errors.push(`${where}/servicesHub.ts: groups must list each service key exactly once`);
    }
  }

  for (const key of SERVICE_KEYS) {
    const [a, b] = LOCALES.map((locale) => content[locale].services.find((s) => s.key === key));
    if (a && b && (sorted(a.techKeys) !== sorted(b.techKeys) || sorted(a.relatedKeys) !== sorted(b.relatedKeys))) {
      errors.push(`services.ts: "${key}" has different techKeys or relatedKeys in tr and en`);
    }
  }

  if (errors.length) throw new Error(`Content data is inconsistent:\n- ${errors.join('\n- ')}`);
};

validate();

export const getContent = (locale: Locale): SiteContent => content[locale];

export const getService = (locale: Locale, key: ServiceKey): Service =>
  content[locale].services.find((service) => service.key === key) as Service;

export const getTechnology = (locale: Locale, key: string): Technology =>
  content[locale].technologies.find((tech) => tech.key === key) as Technology;

export { company } from './company';
export type * from './types';
