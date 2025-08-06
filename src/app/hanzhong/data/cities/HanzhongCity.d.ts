import type { BaseIDType } from '../../../types';
import type { HanzhongBonusType } from './hanzhong-bonus-type';

export type HanzhongCity = BaseIDType & {
  name: string;
  position: string;
  tacticalPoints: number;
  description: string;
  earnings: HanzhongBonusType;
};
