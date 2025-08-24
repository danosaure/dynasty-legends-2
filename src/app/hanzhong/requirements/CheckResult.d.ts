import type { HanzhongRequirement } from './Requirement';

export type HanzhongRequirementCheckResult = {
  requirement: HanzhongRequirement;
  satisfies: boolean;
  value: number;
};
