import type { HanzhongRequirementSection } from './HanzhongRequirementSection';

export type HanzhongBaseRequirement = {
  section: HanzhongRequirementSection;
  type: 'sum' | 'count' | 'level';
  requirementIds: string[];
  value: number;
};
