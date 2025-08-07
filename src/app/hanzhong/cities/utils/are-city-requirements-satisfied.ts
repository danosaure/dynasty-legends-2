import { areRequirementsSatified, type HanzhongRequirement, type RequirementsCache } from '../../requirements';
import type { HanzhongUserDataType } from '../../types';
import { getCityById } from './get-city-by-id';

import { isCityOccupied } from './is-city-occupied';

export const areCityRequirementsSatisfied = (
  userData: HanzhongUserDataType,
  requirement: HanzhongRequirement,
  requirementsCache: RequirementsCache
): boolean => {
  if (requirement.type == 'count') {
    const count = requirement.requirementIds.reduce<number>((sum, cityId) => sum + (isCityOccupied(cityId, userData) ? 1 : 0), 0);

    if (count >= requirement.value) {
      // If the condition is satisfied... Let's validate that each element doesn't have their own requirements.
      const subrequirementsChecks = requirement.requirementIds.map((cityId) => {
        const city = getCityById(cityId);
        if (city.requirements) {
          return areRequirementsSatified(city.id, userData, city.requirements, requirementsCache);
        }
      });

      return !subrequirementsChecks.includes(false);
    }
    return false;
  }

  console.error(`areCityRequirementsSatisfied(): Need to implement type="${requirement.type}".`);
  return false;
};
