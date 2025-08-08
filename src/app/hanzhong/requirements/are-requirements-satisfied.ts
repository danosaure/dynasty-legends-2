import { areCityRequirementsSatisfied } from '../cities';
import type { HanzhongCityRequirement } from '../cities/types/CityRequirement';
import { areTerritoryRequirementsSatisfied } from '../territories';
import type { HanzhongTerritoryRequirement } from '../territories/TerritoryRequirement';
import type { HanzhongUserDataType } from '../types';
import type { HanzhongRequirement } from './HanzhongRequirement';
import type { HanzhongRequirementCheckResult } from './RequirementCheckResult';
import type { RequirementsCache } from './RequirementsCache';

export const areRequirementsSatified = (
  id: string,
  userData: HanzhongUserDataType,
  requirements: HanzhongRequirement[],
  requirementsCache: RequirementsCache
): HanzhongRequirementCheckResult => {
  const cachedValue = requirementsCache[id];

  if (cachedValue === undefined) {
    const requirementsSatisfied: HanzhongRequirementCheckResult = requirements.reduce<HanzhongRequirementCheckResult>(
      (doneChecking, requirement) => {
        if (!doneChecking.satisfies) {
          return doneChecking;
        }

        if (requirement.section === 'cities') {
          return areCityRequirementsSatisfied(userData, requirement as HanzhongCityRequirement, requirementsCache);
        } else if (requirement.section === 'territories') {
          return areTerritoryRequirementsSatisfied(userData, requirement as HanzhongTerritoryRequirement, requirementsCache);
        } else {
          return { satisfies: false, value: -1 } as HanzhongRequirementCheckResult;
        }
      },
      { satisfies: true, value: -1 } as HanzhongRequirementCheckResult
    );

    console.log(`areRequirementsSatified(id="${id}"): requirementsSatisfied=`, requirementsSatisfied);
    requirementsCache[id] = requirementsSatisfied;
  }

  return requirementsCache[id];
};
