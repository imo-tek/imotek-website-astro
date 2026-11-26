/**
 * Shapes of all page copy. One file per page per locale lives in `./tr/` and `./en/`;
 * `./index.ts` collects them into a typed `SiteContent` per locale, so a missing field or a
 * missing translation fails `npm run check`.
 *
 * All strings are plain text (no HTML, no Markdown). Templates escape them.
 */
import type { PageKey, ServiceKey } from '~/i18n/routes';

/**
 * `title` goes into `<title>`; the layout appends " | IMOTEK" (except on the home page, whose
 * title is used as written). Aim for <= 60 characters including the suffix.
 * `description` is the meta description, 140-160 characters.
 */
export interface Seo {
  title: string;
  description: string;
}

export interface TitledText {
  title: string;
  text: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface LabeledValue {
  label: string;
  value: string;
}

/** Closing call to action. The button always links to the contact page. */
export interface Cta {
  title: string;
  text: string;
  button: string;
}

/** `to` is a page key from `src/i18n/routes.ts` (localized automatically) or an absolute https URL. */
export interface SectionLink {
  label: string;
  to: PageKey | `https://${string}`;
}

/**
 * Generic content block used by the simpler pages: an H2 followed by any of paragraphs,
 * a bullet list, titled items (H3 + text) and one link. Rendered in that order.
 */
export interface Section {
  /** Optional anchor id (ASCII, kebab-case). */
  id?: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  items?: TitledText[];
  link?: SectionLink;
}

/* ---------- Services ---------- */

export interface Service {
  /** Fixed key; the URL slug per locale comes from `src/i18n/routes.ts`. */
  key: ServiceKey;
  /** Short name used in menus, cards, breadcrumbs and links. Keep it identical everywhere. */
  navTitle: string;
  /** H1 of the service page: the service name and nothing else. */
  title: string;
  /** One or two sentences for cards (home, hub, related services). */
  summary: string;
  /** One "pick this if…" line shown on the services hub. */
  chooseIf: string;
  seo: Seo;
  /** Opening paragraphs under the H1. */
  intro: string[];
  whatWeDo: TitledText[];
  goodFit: string[];
  notFit: string[];
  /** Keys from `technologies.ts`; each renders as a link to its anchor on the technologies page. */
  techKeys: string[];
  /** Numbered steps. */
  process: TitledText[];
  /** Visible FAQ. May be empty: the section is then left out. */
  faqs: Faq[];
  relatedKeys: ServiceKey[];
}

/* ---------- Technologies ---------- */

export type TechGroup =
  | 'languages'
  | 'backend'
  | 'frontend'
  | 'mobile'
  | 'data'
  | 'cloud'
  | 'ops'
  | 'observability'
  | 'testing'
  | 'ai';

export interface Technology {
  /** ASCII kebab-case; the anchor id on the technologies page. */
  key: string;
  /** Product name, not translated; rendered with lang="en". */
  name: string;
  group: TechGroup;
  /** Iconify name, e.g. `logos:go`. Rendered on a white tile. */
  icon: string;
  /** Colour for monochrome icons (simple-icons, tabler). */
  color?: string;
}

/* ---------- Pages ---------- */

export interface HomeContent {
  /** `seo.title` is used as the full <title> (no suffix added). */
  seo: Seo;
  hero: {
    title: string;
    subtitle: string;
    /** Button to the contact page. */
    primaryCta: string;
    /** Button to the services hub. */
    secondaryCta: string;
  };
  /** Heading above the six service cards (cards come from `services.ts`). */
  services: { title: string; intro: string; linkLabel: string };
  /** The Turklex band. */
  product: {
    label: string;
    title: string;
    paragraphs: string[];
    /** Link to our Turklex page. */
    pageLinkLabel: string;
    /** Link out to https://turklex.ai. */
    siteLinkLabel: string;
  };
  howWeWork: { title: string; intro: string; steps: TitledText[]; linkLabel: string };
  cta: Cta;
}

export interface ServicesHubContent {
  seo: Seo;
  title: string;
  intro: string[];
  /** Every service key should appear in exactly one group. */
  groups: { title: string; serviceKeys: ServiceKey[] }[];
  sections: Section[];
  cta: Cta;
  /** Closing call to action shown on every service detail page. */
  serviceCta: Cta;
}

export interface TechnologiesPageContent {
  seo: Seo;
  title: string;
  intro: string;
  /** One card per group, in display order of `TechGroup`: a heading and one or two sentences on what we do with these tools. */
  groups: Record<TechGroup, { title: string; text: string }>;
  /** Paragraph after the list. */
  closing: string;
  cta: Cta;
}

export interface ProductContent {
  seo: Seo;
  title: string;
  intro: string[];
  /** Summary rows rendered as a definition list. */
  facts: LabeledValue[];
  sections: Section[];
  faqs: Faq[];
  /** Box linking out to https://turklex.ai (pricing and sign-up live there). */
  external: { title: string; text: string; button: string };
  /** Consulting call to action, kept separate from the product link. */
  cta: Cta;
}

export interface HowWeWorkContent {
  seo: Seo;
  title: string;
  intro: string[];
  steps: TitledText[];
  sections: Section[];
  faqs: Faq[];
  cta: Cta;
}

export interface AboutContent {
  seo: Seo;
  title: string;
  intro: string[];
  sections: Section[];
  /** Heading above the company details table (values come from `company.ts`). */
  companyTitle: string;
  cta: Cta;
}

export interface ContactContent {
  seo: Seo;
  title: string;
  intro: string[];
  /** Label of the mailto: button. */
  mailButton: string;
  /** Subject line prefilled in the e-mail. */
  mailSubject: string;
  /** Heading above address / phone / company details (values come from `company.ts`). */
  detailsTitle: string;
  sections: Section[];
}

export interface LegalContent {
  seo: Seo;
  title: string;
  /** ISO date (YYYY-MM-DD) of the last change, shown under the title. */
  updated: string;
  updatedLabel: string;
  intro: string[];
  sections: Section[];
}

export interface SiteContent {
  services: Service[];
  technologies: Technology[];
  home: HomeContent;
  servicesHub: ServicesHubContent;
  technologiesPage: TechnologiesPageContent;
  product: ProductContent;
  howWeWork: HowWeWorkContent;
  about: AboutContent;
  contact: ContactContent;
  privacy: LegalContent;
  terms: LegalContent;
}
