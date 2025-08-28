import type { BaseIDType, IconType } from '../../types';
import type { HanzhongTechType } from './hanzhong-tech-type';
import type { HanzhongWarTierTaskType } from './hanzhong-war-tier-task-type';

export type HanzhongWarTierType = BaseIDType & {
  icon: IconType;
  bg: string;
  tasks: HanzhongWarTierTaskType[];
  techs: HanzhongTechType[];
};
