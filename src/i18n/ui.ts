/**
 * UI strings (menu, buttons, section labels, 404, blog). Page copy does NOT live here;
 * it lives in `src/content-data/<locale>/`.
 *
 * `en` is typed against `tr`, so a key missing in one language fails `astro check`.
 */
import type { Locale } from './routes';

const tr = {
  'site.skipToContent': 'İçeriğe geç',
  'site.footNote': '© {year} İMOTEK Yazılım A.Ş.',

  'nav.main': 'Ana menü',
  'nav.home': 'Ana sayfa',
  'nav.services': 'Hizmetler',
  'nav.technologies': 'Teknolojiler',
  'nav.turklex': 'Turklex',
  'nav.howWeWork': 'Nasıl çalışıyoruz',
  'nav.blog': 'Blog',
  'nav.contact': 'İletişim',
  'nav.about': 'Hakkımızda',
  'nav.privacy': 'Gizlilik politikası',
  'nav.terms': 'Kullanım koşulları',
  'nav.company': 'Şirket',
  'nav.toggleMenu': 'Menüyü aç veya kapat',
  'nav.toggleTheme': 'Açık ve koyu tema arasında geçiş yap',
  'nav.breadcrumb': 'Sayfa yolu',

  'lang.switchTo': 'English',
  'lang.switchShort': 'EN',

  'service.whatWeDo': 'Neler yapıyoruz',
  'service.goodFit': 'Şu durumda doğru adres',
  'service.notFit': 'Şu durumda doğru adres değil',
  'service.technologies': 'Kullandığımız teknolojiler',
  'service.process': 'İş nasıl ilerliyor',
  'service.faq': 'Sık sorulan sorular',
  'service.related': 'İlgili hizmetler',
  'service.view': '{name} hizmetini inceleyin',
  'service.chooseIf': 'Şu durumda doğru adres:',
  'service.all': 'Tüm hizmetler',

  'company.legalName': 'Unvan',
  'company.mersis': 'MERSİS no',
  'company.address': 'Adres',
  'company.phone': 'Telefon',
  'company.email': 'E-posta',

  'cta.emailPrefix': 'ya da doğrudan yazın:',

  'blog.title': 'Blog',
  'blog.intro': 'Yazılım geliştirme ve altyapı üzerine, kendi işimizden çıkan notlar.',
  'blog.description':
    'IMOTEK blogu: yazılım geliştirme, bulut altyapısı ve kendi ürünümüz Turklex üzerinde çalışırken çıkardığımız notlar.',
  'blog.empty': 'Henüz yayımlanmış bir yazı yok. İlk yazılar hazırlanıyor.',
  'blog.readingTime': '{n} dk okuma',
  'blog.published': 'Yayım tarihi',
  'blog.updated': 'Güncelleme: {date}',
  'blog.back': 'Tüm yazılar',
  'blog.newer': 'Daha yeni yazılar',
  'blog.older': 'Daha eski yazılar',
  'blog.page': 'Sayfa {n}',
  'blog.rssTitle': 'IMOTEK Blog',

  'notFound.title': 'Sayfa bulunamadı',
  'notFound.text': 'Aradığınız adres taşınmış ya da hiç var olmamış olabilir.',
  'notFound.home': 'Ana sayfaya dönün',
  'notFound.services': 'Hizmetlere bakın',
  'notFound.contact': 'Bize yazın',
};

export type UiKey = keyof typeof tr;

const en: Record<UiKey, string> = {
  'site.skipToContent': 'Skip to content',
  'site.footNote': '© {year} İMOTEK Yazılım A.Ş.',

  'nav.main': 'Main menu',
  'nav.home': 'Home',
  'nav.services': 'Services',
  'nav.technologies': 'Technologies',
  'nav.turklex': 'Turklex',
  'nav.howWeWork': 'How we work',
  'nav.blog': 'Blog',
  'nav.contact': 'Contact',
  'nav.about': 'About',
  'nav.privacy': 'Privacy policy',
  'nav.terms': 'Terms of use',
  'nav.company': 'Company',
  'nav.toggleMenu': 'Open or close the menu',
  'nav.toggleTheme': 'Switch between light and dark theme',
  'nav.breadcrumb': 'Breadcrumb',

  'lang.switchTo': 'Türkçe',
  'lang.switchShort': 'TR',

  'service.whatWeDo': 'What we do',
  'service.goodFit': 'A good fit when',
  'service.notFit': 'Not a fit when',
  'service.technologies': 'Technologies we use',
  'service.process': 'How the work runs',
  'service.faq': 'Frequently asked questions',
  'service.related': 'Related services',
  'service.view': 'See the {name} service',
  'service.chooseIf': 'Choose this if:',
  'service.all': 'All services',

  'company.legalName': 'Legal name',
  'company.mersis': 'MERSİS no. (Turkish company registry)',
  'company.address': 'Address',
  'company.phone': 'Phone',
  'company.email': 'E-mail',

  'cta.emailPrefix': 'or write directly:',

  'blog.title': 'Blog',
  'blog.intro': 'Notes on software development and infrastructure, taken from our own work.',
  'blog.description':
    'The IMOTEK blog: notes on software development, cloud infrastructure and what we learn while building our own product, Turklex.',
  'blog.empty': 'No posts published yet. The first ones are being written.',
  'blog.readingTime': '{n} min read',
  'blog.published': 'Published',
  'blog.updated': 'Updated: {date}',
  'blog.back': 'All posts',
  'blog.newer': 'Newer posts',
  'blog.older': 'Older posts',
  'blog.page': 'Page {n}',
  'blog.rssTitle': 'IMOTEK Blog',

  'notFound.title': 'Page not found',
  'notFound.text': 'The address may have moved, or it may never have existed.',
  'notFound.home': 'Back to the home page',
  'notFound.services': 'See our services',
  'notFound.contact': 'Write to us',
};

const dictionaries: Record<Locale, Record<UiKey, string>> = { tr, en };

/** UI string lookup with `{name}` placeholders: `t('en', 'blog.page', { n: 2 })`. */
export const t = (locale: Locale, key: UiKey, params: Record<string, string | number> = {}): string =>
  dictionaries[locale][key].replace(/\{(\w+)\}/g, (_, name: string) => String(params[name] ?? `{${name}}`));
