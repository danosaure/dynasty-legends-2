import type { BaseIdAndName, HanzhongWarTierTaskType } from '../../types';
import type { HanzhongTechType } from './hanzhong-tech-type';
import type { IconType } from './icon-type';

import type { HanzhongWarTierRequirement } from './HanzhongWarTierRequirement';

export type HanzhongWarTierType = BaseIdAndName & {
  icon: IconType;
  bg: string;
  tasks: HanzhongWarTierTaskType[];
  techs: HanzhongTechType[];
  requirement?: HanzhongWarTierRequirement;
};
