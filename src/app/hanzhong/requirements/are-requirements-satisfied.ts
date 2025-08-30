import { isCityRequirementSatisfied } from '../cities';
import type { HanzhongUserDataType } from '../types';
import type { HanzhongRequirement } from './HanzhongRequirement';
import { HANZHONG_REQUIREMENT_RESPONSES, type HanzhongRequirementResponse } from './RequirementResponse';
import type { RequirementsCache } from './RequirementsCache';

export const areRequirementsSatified = (
  id: string,
  userData: HanzhongUserDataType,
  requirements: HanzhongRequirement[],
  requirementsCache: RequirementsCache
): HanzhongRequirementResponse => {
  const savedValue = requirementsCache[id];

  if (savedValue === undefined) {
    const requirementsSatisfied = requirements.reduce<HanzhongRequirementResponse>((stillValid, requirement) => {
      if (!stillValid.satisfied) {
        return stillValid;
      }

      if (requirement.section === 'cities') {
        return isCityRequirementSatisfied(requirement, userData, requirementsCache);
      } else {
        console.error(`areRequirementsSatified(id="${id}"): need to handle requirement.section="${requirement.section}".`);
        return HANZHONG_REQUIREMENT_RESPONSES.ERROR;
      }
    }, HANZHONG_REQUIREMENT_RESPONSES.INITIAL_VALUE);

    requirementsCache[id] = requirementsSatisfied;
  }

  return requirementsCache[id];
};
