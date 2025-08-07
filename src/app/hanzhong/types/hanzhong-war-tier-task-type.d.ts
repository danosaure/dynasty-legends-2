import type { BaseIdAndName } from '../../types';
import type { HanzhongRequirements } from './hanzhong-requirements';

export type HanzhongWarTierTaskType = BaseIdAndName & {
  description: string;
  requirements?: HanzhongRequirements;
};
