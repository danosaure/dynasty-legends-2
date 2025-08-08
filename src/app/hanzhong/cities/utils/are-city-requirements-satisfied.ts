import { areRequirementsSatified, type HanzhongRequirement, type RequirementsCache } from '../../requirements';
import type { HanzhongRequirementCheckResult } from '../../requirements/RequirementCheckResult';
import type { HanzhongUserDataType } from '../../types';
import { getCityById } from './get-city-by-id';

import { isCityOccupied } from './is-city-occupied';

export const areCityRequirementsSatisfied = (
  userData: HanzhongUserDataType,
  requirement: HanzhongRequirement,
  requirementsCache: RequirementsCache
): HanzhongRequirementCheckResult => {
  if (requirement.type == 'count') {
    const value = requirement.requirementIds.reduce<number>((sum, cityId) => sum + (isCityOccupied(cityId, userData) ? 1 : 0), 0);

    if (value >= requirement.value) {
      // If the condition is satisfied... Let's validate that each element satisfies their own requirements.
      const subrequirementsChecks = requirement.requirementIds.map((cityId) => {
        const city = getCityById(cityId);
        if (city.requirements) {
          return areRequirementsSatified(city.id, userData, city.requirements, requirementsCache);
        }
      });

      return {
        satisfies: subrequirementsChecks.filter((check) => check?.satisfies === false).length === 0,
        value,
      };
    }

    return { satisfies: value >= requirement.value, value };
  }

  console.log(`areCityRequirementsSatisfied(): Need to implement type="${requirement.type}".`);
  return { satisfies: false, value: -1 };
};
