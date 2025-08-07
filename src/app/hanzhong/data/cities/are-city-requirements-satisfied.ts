import type { HanzhongRequirement } from '../../requirements';
import type { RequirementsCache } from '../../requirements/RequirementsCache';
import type { HanzhongUserDataType } from '../../types';

import { isCityOccupied } from './is-city-occupied';

export const areCityRequirementsSatisfied = (
  userData: HanzhongUserDataType,
  requirement: HanzhongRequirement,
  requirementsCache: RequirementsCache
): boolean => {
  if (requirement.type == 'count') {
    const count = requirement.requirementIds.reduce<number>((sum, cityId) => sum + (isCityOccupied(cityId, userData) ? 1 : 0), 0);
    return count >= requirement.value;
  }

  console.log(`requirementsCache:`, requirementsCache);
  console.error(`areCityRequirementsSatisfied(): Need to implement type="${requirement.type}".`);
  return false;
};
