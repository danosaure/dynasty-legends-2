import type { HanzhongUserDataType } from '../types';
import type { HanzhongRequirement } from './HanzhongRequirement';
import type { HanzhongRequirementCheckResult } from './RequirementCheckResult';
import type { RequirementsCache } from './RequirementsCache';

import { areCityRequirementsSatisfied } from '../cities';
import { areTerritoryRequirementsSatisfied } from '../territories';
import { areWarTierRequirementsSatisfied } from '../war-tiers';

export const areRequirementsSatified = (
  id: string,
  userData: HanzhongUserDataType,
  requirements: HanzhongRequirement[],
  requirementsCache: RequirementsCache
): HanzhongRequirementCheckResult => {
  if (requirementsCache[id] === undefined) {
    const requirementsSatisfied: HanzhongRequirementCheckResult = requirements.reduce<HanzhongRequirementCheckResult>(
      (doneChecking, requirement) => {
        if (!doneChecking.satisfies) {
          return doneChecking;
        }

        if (requirement.section === 'cities') {
          return areCityRequirementsSatisfied(userData, requirement, requirementsCache);
        } else if (requirement.section === 'territories') {
          return areTerritoryRequirementsSatisfied(userData, requirement, requirementsCache);
        } else if (requirement.section === 'warTiers') {
          return areWarTierRequirementsSatisfied(userData, requirement, requirementsCache);
        } else {
          return { satisfies: false, value: -1 } as HanzhongRequirementCheckResult;
        }
      },
      { satisfies: true, value: -1 } as HanzhongRequirementCheckResult
    );

    requirementsCache[id] = requirementsSatisfied;
  }

  return requirementsCache[id];
};
