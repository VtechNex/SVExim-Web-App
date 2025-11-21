import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

import en from "../public/locales/en/translation.json";
import ar from "../public/locales/ar/translation.json";
import fr from "../public/locales/fr/translation.json";
import de from "../public/locales/de/translation.json";
import it from "../public/locales/it/translation.json";

// Available languages
const resources = {
  en: { translation: en },
  ar: { translation: ar },
  fr: { translation: fr },
  de: { translation: de },
  it: { translation: it }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    debug: process.env.NODE_ENV === 'development', // Helpful for development
    interpolation: {
      escapeValue: false, // React already safes from XSS
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      checkWhitelist: true
    },
    whitelist: ['en', 'ar', 'fr', 'de', 'it'], // Only allow these languages
  });

export default i18n;