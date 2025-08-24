import type { HanzhongRequirementBase } from '../requirements';

export type HanzhongBanditRequirement = HanzhongRequirementBase & {
  section: 'bandits';
  type: 'count';
  value: number;
};
