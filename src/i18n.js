import i18n from "i18next";

import LanguageDetector from "i18next-browser-languagedetector";

import XHR from "i18next-xhr-backend";

i18n

.use(XHR)

.use(LanguageDetector)

.init({

// we init with resources

fallbackLng: {

'en-US': ['en'],

'de': ['de'],

default: ['en'],

},

debug: true,

interpolation: {

escapeValue: false // not needed for react!!

},

react: {

wait: true,

useSuspense: false

}

});

export default i18n;