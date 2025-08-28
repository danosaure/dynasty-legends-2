import type { BaseIDType } from '../../../types';
import type { HanzhongRequirement } from '../../requirements';
import type { HanzhongBonusType } from '../../types';

export type HanzhongCityType = BaseIDType & {
  name: string;
  position: string;
  tacticalPoints: number;
  description: string;
  earnings: HanzhongBonusType;
  requirements?: HanzhongRequirement[];
};
