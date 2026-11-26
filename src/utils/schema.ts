/**
 * JSON-LD builders. Every value here must also be visible on the page that carries it.
 * Render the result with `<JsonLd schema={...} />` (PageLayout does this for its `schema` prop).
 */
import { company } from '~/content-data/company';
import { ROUTES, absoluteUrl } from '~/i18n';
import type { Locale } from '~/i18n';

export type JsonLdNode = Record<string, unknown>;

export const ORGANIZATION_ID = absoluteUrl('/#organization');
const WEBSITE_ID = absoluteUrl('/#website');

const organizationRef = { '@id': ORGANIZATION_ID };

export const organizationSchema = (): JsonLdNode => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': ORGANIZATION_ID,
  name: company.brand,
  legalName: company.legalName,
  url: absoluteUrl('/'),
  logo: absoluteUrl('/logo.png'),
  email: company.email,
  telephone: company.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: company.address.street,
    postalCode: company.address.postalCode,
    addressLocality: company.address.district,
    addressRegion: company.address.city,
    addressCountry: company.address.countryCode,
  },
});

export const webSiteSchema = (locale: Locale): JsonLdNode => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  name: company.brand,
  url: absoluteUrl(ROUTES.home[locale]),
  inLanguage: locale,
  publisher: organizationRef,
});

export const serviceSchema = (input: {
  name: string;
  description: string;
  path: string;
  locale: Locale;
}): JsonLdNode => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: input.name,
  serviceType: input.name,
  description: input.description,
  url: absoluteUrl(input.path),
  inLanguage: input.locale,
  provider: organizationRef,
});

/** No ratings and no offers on purpose: neither is shown on our page. */
export const softwareApplicationSchema = (input: { name: string; description: string; url: string }): JsonLdNode => ({
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: input.name,
  description: input.description,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  url: input.url,
  publisher: organizationRef,
});

export interface Crumb {
  name: string;
  /** Site-relative path. */
  path: string;
}

export const breadcrumbSchema = (crumbs: Crumb[]): JsonLdNode => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((crumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: crumb.name,
    item: absoluteUrl(crumb.path),
  })),
});

export const blogPostingSchema = (input: {
  title: string;
  description: string;
  path: string;
  locale: Locale;
  publishDate: Date;
  updateDate?: Date;
  author?: string;
  image?: string;
}): JsonLdNode => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: input.title,
  description: input.description,
  url: absoluteUrl(input.path),
  mainEntityOfPage: absoluteUrl(input.path),
  inLanguage: input.locale,
  datePublished: input.publishDate.toISOString(),
  dateModified: (input.updateDate ?? input.publishDate).toISOString(),
  author: input.author ? { '@type': 'Person', name: input.author } : organizationRef,
  publisher: organizationRef,
  ...(input.image ? { image: input.image } : {}),
});
