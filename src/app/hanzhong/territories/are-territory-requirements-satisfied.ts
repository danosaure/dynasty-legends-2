import { getNumberValue } from '../../utils';
import type { HanzhongRequirement, RequirementsCache } from '../requirements';
import type { HanzhongUserDataType } from '../types';

export const areTerritoryRequirementsSatisfied = (
  userData: HanzhongUserDataType,
  requirement: HanzhongRequirement,
  requirementsCache: RequirementsCache
): boolean => {
  if (requirement.type == 'sum') {
    const count = requirement.requirementIds.reduce<number>((sum, territoryId) => sum + getNumberValue(userData, territoryId), 0);
    return count >= requirement.value;
  }

  console.log(`requirementsCache=`, requirementsCache);
  console.log(`areCityRequirementsSatisfied(): Need to implement type="${requirement.type}".`);
  return false;
};
