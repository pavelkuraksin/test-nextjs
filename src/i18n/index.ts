import { initReactI18next } from 'react-i18next/initReactI18next';
import { createInstance } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';

import nsLngLookup from '../utils/i18n';
import { getOptions } from './settings';

import type { ILngNs, ILngNsUseTranslation, ILngNsUseTranslationOptions } from './interfaces/IUseTranslation';

const initI18next = async (lng: ILngNs, ns: ILngNs) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(resourcesToBackend((language: ILngNs, namespace: ILngNs) => import(`./locales/${language}/${namespace}.ts`)))
    .init(getOptions(lng, ns));
  return i18nInstance;
};

export default async function useTranslation(
  lng: ILngNsUseTranslation,
  ns: ILngNsUseTranslation,
  options: ILngNsUseTranslationOptions = {},
) {
  const language = nsLngLookup(lng);
  const namespace = nsLngLookup(ns);
  const i18nextInstance = await initI18next(language, namespace);
  return {
    t: i18nextInstance.getFixedT(lng, ns, options.keyPrefix),
    i18n: i18nextInstance,
  };
}
