import type { HanzhongRequirementSection } from './HanzhongRequirementSection';

export type HanzhongRequirement = {
  section: HanzhongRequirementSection;
  type: 'sum' | 'count' | 'level';
  requirementIds: string[];
  value: number;
};
