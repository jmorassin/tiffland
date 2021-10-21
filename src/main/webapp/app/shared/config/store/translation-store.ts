import { Module } from 'vuex';

export const translationStore: Module<any, any> = {
  state: {
    currentLanguage: localStorage.getItem('currentLanguage') || 'fr',
    languages: {
      cs: { name: 'Český' },
      en: { name: 'English' },
      fr: { name: 'Français' },
      de: { name: 'Deutsch' },
      el: { name: 'Ελληνικά' },
      pl: { name: 'Polski' },
      'pt-br': { name: 'Português (Brasil)' },
      ro: { name: 'Română' },
      ru: { name: 'Русский' },
      sk: { name: 'Slovenský' },
      sr: { name: 'Srpski' },
      es: { name: 'Español' },
      ua: { name: 'Українська' },
      // jhipster-needle-i18n-language-key-pipe - JHipster will add/remove languages in this object
    },
  },
  getters: {
    currentLanguage: state => state.currentLanguage,
    languages: state => state.languages,
  },
  mutations: {
    currentLanguage(state, newLanguage) {
      state.currentLanguage = newLanguage;
      localStorage.setItem('currentLanguage', newLanguage);
    },
  },
};
