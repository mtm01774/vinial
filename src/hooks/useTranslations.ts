import translations from '@/locales';

export function useTranslations(locale: string = 'pt') {
  return translations[locale as keyof typeof translations];
} 