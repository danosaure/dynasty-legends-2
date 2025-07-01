import type { HanzhongTechType } from './hanzhong-tech-type';
import type { HanzhongWarTierTaskType } from './hanzhong-war-tier-task-type';

export type HanzhongWarTierType = {
  icon: string;
  tasks: HanzhongWarTierTaskType[];
  techs: HanzhongTechType[];
};
