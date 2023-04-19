import i18n from 'i18next';
import en from './assets/en/en.json';
import ua from './assets/ua/ua.json';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import LocalStorageBackend from 'i18next-localstorage-backend';

// export const defaultNS = 'en';
export const resources = {
  en: {
    translation: en,
  },
  ua: {
    translation: ua,
  },
} as const;

i18n
  .use(LanguageDetector)
  .use(LocalStorageBackend)
  .use(initReactI18next)
  .init({
    detection: {
      order: ['localStorage'],
      cache: ['localStorage'],
    },

    fallbackLng: 'en',
    // ns: ['en', 'ua'],
    // defaultNS,
    resources,
    interpolation: {
      escapeValue: false,
    },
  });
export default i18n;
