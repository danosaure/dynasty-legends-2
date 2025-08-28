import type { HanzhongRequirementsType } from './hanzhong-requirements-type';

export type HanzhongWarTierTaskType = {
  label: string;
  description: string;
  requirements?: HanzhongRequirementsType;
};
