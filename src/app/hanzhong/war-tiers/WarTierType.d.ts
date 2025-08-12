import type { BaseIdAndName, IconType } from '../../types';
import type { HanzhongTechType } from '../techs';
import type { HanzhongWarTierTaskType } from '../war-tier-tasks';
import type { HanzhongWarTierRequirement } from './requirements';

export type HanzhongWarTierType = BaseIdAndName & {
  icon: IconType;
  bg: string;
  tasks: HanzhongWarTierTaskType[];
  techs: HanzhongTechType[];
  requirement?: HanzhongWarTierRequirement;
};
