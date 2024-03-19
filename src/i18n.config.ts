export const i18n = {
  defaultLocale: 'de',
  locales: ['de', 'en', 'ar', 'tr', 'fa'],
} as const;

export type Locale = (typeof i18n)['locales'][number];
