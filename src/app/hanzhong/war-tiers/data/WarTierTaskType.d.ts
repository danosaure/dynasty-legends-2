import type { BaseIdAndName } from '../../types';
import type { HanzhongRequirement } from '../requirements';

export type HanzhongWarTierTaskType = BaseIdAndName & {
  description: string;
  requirement?: HanzhongRequirement;
};
