/**
 * Company facts that are the same in every language. Labels come from `src/i18n/ui.ts`.
 * Only published, verified values belong here.
 */
export const company = {
  brand: 'IMOTEK',
  legalName: 'İMOTEK Yazılım Anonim Şirketi',
  mersis: '0474090238600001',
  address: {
    street: 'ASO Teknopark, Ahi Evran OSB Mah., Erkunt Cad. No: 3/4',
    postalCode: '06935',
    district: 'Sincan',
    city: 'Ankara',
    countryCode: 'TR',
    /** Printed form. */
    full: 'ASO Teknopark, Ahi Evran OSB Mah., Erkunt Cad. No: 3/4, 06935 Sincan / Ankara',
  },
  phone: '+90 312 963 03 09',
  phoneHref: 'tel:+903129630309',
  email: 'info@imotek.tr',
  turklexUrl: 'https://turklex.ai',
} as const;
