export const SITE_URL = 'https://www.pintourbus.com';

// Immagini in locale (public/images) - self-contained, nessuna dipendenza esterna
const IMG = (name: string) => `/images/${name}`;
export const LOGO_URL = IMG('logo-largo.png');
export const LOGO_MARK_URL = IMG('logo.png');
export const HERO_IMG = IMG('strada-costiera-amalfitana-maxw-1280.jpg');
export const VIDEO_URL = IMG('pintour-spot.mp4');

export const FAVICON_URL = IMG('favicon.ico');
export const FAVICON_32 = IMG('favicon-32x32.png');
export const FAVICON_16 = IMG('favicon-16x16.png');
export const APPLE_TOUCH_ICON = IMG('apple-touch-icon.png');
export const WEB_MANIFEST = IMG('site.webmanifest');
export const SHUTTLE_BOOKING_URL = 'https://shuttlebus.pintourbus.com';
export const MOBILITY_CHARTER_URL = IMG('carta-della-mobilita-.pdf');

export type Language = 'it' | 'en' | 'fr' | 'de' | 'es';

export const LANGUAGES: Language[] = ['it', 'en', 'fr', 'de', 'es'];

export const DEFAULT_LANG: Language = 'it';

export const languageNames: Record<Language, string> = {
  it: 'Italiano',
  en: 'English',
  fr: 'Français',
  de: 'Deutsch',
  es: 'Español',
};

export const languageFlags: Record<Language, string> = {
  it: '🇮🇹',
  en: '🇬🇧',
  fr: '🇫🇷',
  de: '🇩🇪',
  es: '🇪🇸',
};

export const htmlLang: Record<Language, string> = {
  it: 'it',
  en: 'en',
  fr: 'fr',
  de: 'de',
  es: 'es',
};

export type PageKey = 'home' | 'tours' | 'about' | 'shuttle' | 'rental' | 'vehicles' | 'contacts' | 'privacy';

export const PAGES: PageKey[] = ['home', 'tours', 'about', 'shuttle', 'rental', 'vehicles', 'contacts', 'privacy'];

// Mappa page-key -> chiave etichetta di navigazione (i nomi nav differiscono per shuttle/rental)
export const navLabelKey: Record<PageKey, 'home' | 'tours' | 'about' | 'shuttleBus' | 'busRental' | 'vehicles' | 'contacts' | 'privacy'> = {
  home: 'home',
  tours: 'tours',
  about: 'about',
  shuttle: 'shuttleBus',
  rental: 'busRental',
  vehicles: 'vehicles',
  contacts: 'contacts',
  privacy: 'privacy',
};

// Localized slugs per language for SEO-friendly multilingual URLs.
export const slugs: Record<PageKey, Record<Language, string>> = {
  home: {
    it: '',
    en: '',
    fr: '',
    de: '',
    es: '',
  },
  about: {
    it: 'chi-siamo',
    en: 'about',
    fr: 'a-propos',
    de: 'ueber-uns',
    es: 'quienes-somos',
  },
  tours: {
    it: 'tour',
    en: 'tours',
    fr: 'circuits',
    de: 'touren',
    es: 'circuitos',
  },
  shuttle: {
    it: 'shuttle-bus',
    en: 'shuttle-bus',
    fr: 'shuttle-bus',
    de: 'shuttle-bus',
    es: 'shuttle-bus',
  },
  rental: {
    it: 'noleggio-bus',
    en: 'bus-rental',
    fr: 'location-bus',
    de: 'busvermietung',
    es: 'alquiler-de-bus',
  },
  vehicles: {
    it: 'parco-mezzi',
    en: 'fleet',
    fr: 'flotte',
    de: 'flotte',
    es: 'flota',
  },
  contacts: {
    it: 'contatti',
    en: 'contacts',
    fr: 'contacts',
    de: 'kontakte',
    es: 'contactos',
  },
  privacy: {
    it: 'privacy',
    en: 'privacy',
    fr: 'confidentialite',
    de: 'datenschutz',
    es: 'privacidad',
  },
};

/** Returns the absolute path for a page in a given language. */
export function pathFor(lang: Language, page: PageKey): string {
  const slug = slugs[page][lang];
  return slug === '' ? `/${lang}/` : `/${lang}/${slug}/`;
}

/** Absolute URL for a page in a given language. */
export function urlFor(lang: Language, page: PageKey): string {
  return `${SITE_URL}${pathFor(lang, page)}`;
}

/** Finds the (lang, page) tuple matching a path slug array. */
export function resolveRoute(pathParts: string[]): { lang: Language; page: PageKey } | null {
  if (pathParts.length === 0) return null;
  const lang = pathParts[0] as Language;
  if (!LANGUAGES.includes(lang)) return null;

  if (pathParts.length === 1) return { lang, page: 'home' };

  const rest = pathParts.slice(1).join('/');
  for (const page of PAGES) {
    if (page === 'home') continue;
    if (slugs[page][lang] === rest) return { lang, page };
  }
  return null;
}
