import type { HanzhongRequirementBase } from '../requirements';

export type HanzhongWarTierRequirement = HanzhongRequirementBase & {
  section: 'warTiers';
  warTierId: string;
};
