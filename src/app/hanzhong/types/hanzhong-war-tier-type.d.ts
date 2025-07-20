import type { BaseIDType } from './base-id-type';
import type { HanzhongTechType } from './hanzhong-tech-type';
import type { HanzhongWarTierTaskType } from './hanzhong-war-tier-task-type';
import type { IconType } from './icon-type';

export type HanzhongWarTierType = BaseIDType & {
  icon: IconType;
  bg: string;
  tasks: HanzhongWarTierTaskType[];
  techs: HanzhongTechType[];
};
