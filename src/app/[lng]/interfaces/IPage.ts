import type { ILngNs } from '../../../i18n/interfaces/IUseTranslation';

type IParams = {
  lng: ILngNs,
};

export interface ILayout {
  children: React.ReactNode,
  params: IParams,
}

export interface IPage {
  params: IParams,
}
