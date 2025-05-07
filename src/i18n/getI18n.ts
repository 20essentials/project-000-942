import spanish from '@/i18n/es.json';
import english from '@/i18n/en.json';
import italian from '@/i18n/it.json';

export const LANG = {
  spanish: 'es',
  english: 'en',
  italian: 'it'
};

export function getI18n({ lang = 'en' }: { lang: string | undefined }) {
  if (lang === LANG.italian) return { ...english, ...italian };
  if (lang === LANG.spanish) return { ...english, ...spanish };
  return english;
}
