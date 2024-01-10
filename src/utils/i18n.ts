import type { ILngNsUseTranslation, ILngNs } from '../i18n/interfaces/IUseTranslation';

const lngNsLookup = (data: ILngNsUseTranslation): ILngNs => (Array.isArray(data) ? data[0] : data);

export default lngNsLookup;
