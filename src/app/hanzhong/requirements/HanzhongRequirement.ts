import type { HanzhongCityRequirement } from '../cities';
import type { HanzhongRequirementSection } from './HanzhongRequirementSection';

export type HanzhongRequirement =
  | HanzhongCityRequirement
  | {
      section: HanzhongRequirementSection;
      type: 'sum' | 'count' | 'level';
      requirementIds: string[];
      value: number;
    };
