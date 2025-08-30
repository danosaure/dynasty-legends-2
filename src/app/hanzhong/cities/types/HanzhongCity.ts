import type { BaseIDType } from '../../../types';
import type { HanzhongBonusType } from '../../types';
import type { HanzhongCitiesRequirement } from '../requirements';

export type HanzhongCityType = BaseIDType & {
  name: string;
  position: string;
  tacticalPoints: number;
  description: string;
  earnings: HanzhongBonusType;
  requirement?: HanzhongCitiesRequirement;
};
