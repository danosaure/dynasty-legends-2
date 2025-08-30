import { isCityRequirementSatisfied } from '../cities';
import { isTechRequirementSatisfied } from '../techs';
import type { HanzhongUserDataType } from '../types';
import type { HanzhongRequirement } from './HanzhongRequirement';
import { errorRequirementResponse, HANZHONG_REQUIREMENT_RESPONSES, type HanzhongRequirementResponse } from './RequirementResponse';
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
      } else if (requirement.section === 'techs') {
        return isTechRequirementSatisfied(requirement, userData);
      } else {
        return errorRequirementResponse(`Unknown section.`);
      }
    }, HANZHONG_REQUIREMENT_RESPONSES.INITIAL_VALUE);

    requirementsCache[id] = requirementsSatisfied;
  }

  return requirementsCache[id];
};
