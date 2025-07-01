import { HanzhongBaseIDType } from './hanzhong-base-id-type';

export type HanzhongCityType = HanzhongBaseIDType & {
  name: string;
  position: string;
  tacticalPoints: number;
  description: string;
  earnings: number;
};
