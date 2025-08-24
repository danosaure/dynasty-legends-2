import type { HanzhongRequirementBase } from '../requirements';

export type HanzhongWarTierTaskRequirement = HanzhongRequirementBase & {
  section: 'warTierTasks';
  warTierTaskId: string;
};
