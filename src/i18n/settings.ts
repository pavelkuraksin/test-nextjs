import type { ILngNs } from './interfaces/IUseTranslation';

export const fallbackLng = 'en';
export const languages = [fallbackLng, 'ua'];
const defaultNS = 'common';
export const cookieName = 'i18next';

export function getOptions(lng: ILngNs = fallbackLng, ns: ILngNs = defaultNS) {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
