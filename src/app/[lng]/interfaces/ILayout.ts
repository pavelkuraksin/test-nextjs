import type { ILngNs } from '../../../i18n/interfaces/IUseTranslation';

export default interface ILayout {
  children: React.ReactNode,
  params: {
    lng: ILngNs,
  }
}
