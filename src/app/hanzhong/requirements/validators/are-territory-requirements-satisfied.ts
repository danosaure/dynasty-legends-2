import { getNumberValue } from '../../../utils';
import type { HanzhongUserDataType } from '../../types';
import type { HanzhongRequirementCheckResult, HanzhongTerritoryRequirement, RequirementsCache } from '../types';

export const areTerritoryRequirementsSatisfied = (
  userData: HanzhongUserDataType,
  requirement: HanzhongTerritoryRequirement,
  requirementsCache: RequirementsCache
): HanzhongRequirementCheckResult => {
  if (requirement.type == 'sum') {
    const value = requirement.requirementIds.reduce<number>((sum, territoryId) => sum + getNumberValue(userData, territoryId), 0);
    return {
      satisfies: value >= requirement.value,
      value,
    };
  }

  console.log(`requirementsCache=`, requirementsCache);
  console.log(`areCityRequirementsSatisfied(): Need to implement type="${requirement.type}".`);
  return { satisfies: false, value: -1 };
};
