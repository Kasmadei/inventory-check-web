// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";

// import Backend from "i18next-http-backend";

// const localStorage = window.localStorage;
// const selectedLng = localStorage.getItem("selectedLng");

// i18n
//   .use(Backend)
//   // pass the i18n instance to react-i18next.
//   .use(initReactI18next)
//   // init i18next
//   // for all options read: https://www.i18next.com/overview/configuration-options
//   .init({
//     fallbackLng: selectedLng,
//     debug: true,
//     interpolation: {
//       escapeValue: false, // not needed for react as it escapes by default
//     },
//     caches: ["localStorage"],
//   });

// export default i18n;

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "../../locales/en/translation.json";
import translationCS from "../../locales/cs/translation.json";

i18n.use(initReactI18next).init({
  lng: "cs",
  fallbackLng: "en",
  compatibilityJSON: "v3",
  resources: {
    en: {
      translation: translationEN,
    },
    cs: {
      translation: translationCS,
    },
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
