import { getCityById, isCityOccupied, type HanzhongCityType } from '../../cities';
import { areRequirementsSatified, type RequirementsCache } from '../../requirements';
import type { HanzhongUserDataType } from '../../types';
import type { HanzhongCityRequirement, HanzhongRequirementCheckResult } from '../types';
import { VALIDATOR_RESPONSES } from './constants';
import type { RequirementValidator } from './RequirementValidator';

export const areCityRequirementsSatisfied: RequirementValidator = (
  userData: HanzhongUserDataType,
  requirement: HanzhongCityRequirement,
  requirementsCache: RequirementsCache
): HanzhongRequirementCheckResult => {
  if (requirement.type == 'count') {
    const value = requirement.requirementIds.reduce<number>((sum, cityId) => sum + (isCityOccupied(cityId, userData) ? 1 : 0), 0);

    if (value >= requirement.value) {
      // If the condition is satisfied... Let's validate that each element satisfies their own requirements.
      const subrequirementsChecks: HanzhongRequirementCheckResult[] =
        requirement.requirementIds.map<HanzhongRequirementCheckResult>((cityId: string): HanzhongRequirementCheckResult => {
          const city: HanzhongCityType = getCityById(cityId);
          if (city.requirements) {
            return areRequirementsSatified(city.id, userData, city.requirements, requirementsCache);
          }
          return VALIDATOR_RESPONSES.NO_REQUIREMENTS;
        });

      return {
        satisfies: subrequirementsChecks.filter((check) => check?.satisfies === false).length === 0,
        value,
      };
    }

    return { satisfies: value >= requirement.value, value };
  } else {
    return VALIDATOR_RESPONSES.UNKNOWN_REQUIREMENT_TYPE;
  }
};
