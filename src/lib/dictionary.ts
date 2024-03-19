import 'server-only';
import type { Locale } from '@/i18n.config';

const dictionaries = {
  en: () => import('../dictionaries/en.json').then((module) => module.default),
  de: () => import('../dictionaries/de.json').then((module) => module.default),
  ar: () => import('../dictionaries/ar.json').then((module) => module.default),
  tr: () => import('../dictionaries/tr.json').then((module) => module.default),
  fa: () => import('../dictionaries/fa.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  switch (locale) {
    case 'en':
      return dictionaries.en();
    case 'de':
      return dictionaries.de();
    case 'ar':
      return dictionaries.ar();
    case 'tr':
      return dictionaries.tr();
    case 'fa':
      return dictionaries.fa();
    default:
      return dictionaries.en();
  }
};
