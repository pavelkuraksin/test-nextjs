'use client';

import { useEffect, useState } from 'react';
import i18next from 'i18next';
import { initReactI18next, useTranslation as useTranslationOrg } from 'react-i18next';
import { useCookies } from 'react-cookie';
import resourcesToBackend from 'i18next-resources-to-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { getOptions, languages, cookieName } from './settings';

const runsOnServerSide = typeof window === 'undefined';

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(resourcesToBackend((language: string, namespace: string) => import(`./locales/${language}/${namespace}.ts`)))
  .init({
    ...getOptions(),
    lng: undefined,
    detection: {
      order: ['path', 'htmlTag', 'cookie', 'navigator'],
    },
    preload: runsOnServerSide ? languages : [],
  })
  .catch(() => {});

/* eslint-disable react-hooks/rules-of-hooks */
// TODO: this functon from the link https://locize.com/blog/next-app-dir-i18n/
// that we have found in the official documentation https://github.com/i18next/next-i18next/
// this is a temporary solution, we need to find a better one
export default function useTranslation(lng: string, ns: string, options: { keyPrefix?: string } = {}) {
  const [cookies, setCookie] = useCookies([cookieName]);
  const ret = useTranslationOrg(ns, options);
  const { i18n } = ret;
  if (runsOnServerSide && lng && i18n.resolvedLanguage !== lng) {
    i18n
      .changeLanguage(lng)
      .catch(() => {});
  } else {
    const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage);
    useEffect(() => {
      if (activeLng === i18n.resolvedLanguage) return;
      setActiveLng(i18n.resolvedLanguage);
    }, [activeLng, i18n.resolvedLanguage]);
    useEffect(() => {
      if (!lng || i18n.resolvedLanguage === lng) return;
      i18n
        .changeLanguage(lng)
        .catch(() => {});
    }, [lng, i18n]);
    useEffect(() => {
      if (cookies.i18next === lng) return;
      setCookie(cookieName, lng, { path: '/' });
    }, [lng, cookies.i18next, setCookie]);
  }
  return ret;
}
