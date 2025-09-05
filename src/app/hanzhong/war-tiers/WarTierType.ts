import type { BaseIDType, IconType } from '../../types';
import type { HanzhongTechType } from '../techs';
import type { HanzhongWarTierRequirement } from './requirements';
import type { HanzhongWarTierTaskType } from './WarTierTaskType';

export type HanzhongWarTierType = BaseIDType & {
  icon: IconType;
  bg: string;
  tasks: HanzhongWarTierTaskType[];
  techs: HanzhongTechType[];
  requirement?: HanzhongWarTierRequirement;
};
