import type { BaseIdAndName } from '../../types';
import type { HanzhongTechType } from './hanzhong-tech-type';
import type { HanzhongWarTierTaskType } from './hanzhong-war-tier-task-type';
import type { IconType } from './icon-type';

export type HanzhongWarTierType = BaseIdAndName & {
  icon: IconType;
  bg: string;
  tasks: HanzhongWarTierTaskType[];
  techs: HanzhongTechType[];
};
