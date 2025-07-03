import type { BaseIDType } from './base-id-type';
import type { HanzhongBonusType } from './hanzhong-bonus-type';

export type HanzhongCityType = BaseIDType & {
  name: string;
  position: string;
  tacticalPoints: number;
  description: string;
  earnings: HanzhongBonusType;
};
