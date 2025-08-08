import type { HanzhongRequirementSection } from './HanzhongRequirementSection';

export type HanzhongBaseRequirement = {
  section: HanzhongRequirementSection;
  type: string;
  value: number;
  requirementIds: string[];
};
