/**
 * @author Fábio Pereira <fabio.pereira.gti@gmail.com>
 * @flow
 */
import {Platform, NativeModules} from 'react-native';
import I18n from 'i18n-js';

const en = require('./locales/pt-BR.json');
const pt = require('./locales/pt-BR.json');

const normalizeTranslate = {
  en: 'en_US',
  en_US: 'en_US',
  pt_BR: 'pt_BR',
  pt_US: 'pt_BR',
};

const getLanguageByDevice = () => {
  return Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale
    : NativeModules.I18nManager.localeIdentifier;
};

I18n.translations = {
  en_US: en,
  pt_BR: pt,
};

const setLanguageToI18n = () => {
  const language = getLanguageByDevice();
  const translateNormalize = normalizeTranslate[language];
  const iHaveThisLanguage = I18n.translations.hasOwnProperty(
    translateNormalize,
  );
  iHaveThisLanguage
    ? (I18n.locale = translateNormalize)
    : (I18n.locale = normalizeTranslate.pt_BR);
};

setLanguageToI18n();

export const translate = (key: string): string => I18n.t(key);
