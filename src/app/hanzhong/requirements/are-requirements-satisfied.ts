import { isBanditRequirementSatisfied } from '../bandits';
import { isCityRequirementSatisfied } from '../cities';
import { isTechRequirementSatisfied } from '../techs';
import { isTerritoryRequirementSatisfied } from '../territories';
import type { HanzhongUserDataType } from '../types';
import type { HanzhongRequirement } from './HanzhongRequirement';
import { errorRequirementResponse, HANZHONG_REQUIREMENT_RESPONSES, type HanzhongRequirementResponse } from './RequirementResponse';
import type { RequirementsCache } from './RequirementsCache';

export const areRequirementsSatified = (
  userData: HanzhongUserDataType,
  requirements: HanzhongRequirement[],
  requirementsCache: RequirementsCache
): HanzhongRequirementResponse =>
  requirements.reduce<HanzhongRequirementResponse>((stillValid, requirement) => {
    if (!stillValid.satisfied) {
      return stillValid;
    }

    if (requirement.section === 'cities') {
      return isCityRequirementSatisfied(requirement, userData, requirementsCache);
    } else if (requirement.section === 'techs') {
      return isTechRequirementSatisfied(requirement, userData, requirementsCache);
    } else if (requirement.section === 'bandits') {
      return isBanditRequirementSatisfied(requirement, userData, requirementsCache);
    } else if (requirement.section === 'territories') {
      return isTerritoryRequirementSatisfied(requirement, userData, requirementsCache);
    } else {
      return errorRequirementResponse(`Unknown section.`);
    }
  }, HANZHONG_REQUIREMENT_RESPONSES.INITIAL_VALUE);
