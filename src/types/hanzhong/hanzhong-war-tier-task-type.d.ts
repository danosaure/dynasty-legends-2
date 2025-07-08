import type { HanzhongRequirements } from './hanzhong-requirements';

export type HanzhongWarTierTaskType = {
  label: string;
  description: string;
  requirements?: HanzhongRequirements;
};
