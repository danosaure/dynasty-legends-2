import type { BaseIDType, FactionNameType, IconType } from '../../types';
import type { HanzhongBonusType } from '../types';
import type { HanzhongCitiesRequirement } from './requirements';

export type HanzhongCityType = BaseIDType & {
  name: string;
  position: string;
  tacticalPoints: number[];
  description: string;
  earnings: HanzhongBonusType;
  requirement?: HanzhongCitiesRequirement;
  factionBonus?: FactionNameType;
  avatar: IconType;
};
