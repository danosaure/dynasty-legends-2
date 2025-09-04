import type { BaseIDType } from '../../types';
import type { HanzhongRequirement } from '../requirements';

export type HanzhongWarTierTaskType = BaseIDType & {
  label: string;
  description: string;
  requirement: HanzhongRequirement;
};
