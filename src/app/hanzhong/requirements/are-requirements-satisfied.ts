import { isBanditRequirementSatisfied } from '../bandits';
import { isCityRequirementSatisfied } from '../cities';
import { isTechRequirementSatisfied } from '../techs';
import { isTerritoryRequirementSatisfied } from '../territories';
import type { HanzhongUserDataType } from '../types';
import { isWarTierRequirementSatisfied } from '../war-tiers';
import type { HanzhongRequirement, HanzhongUnverifiableRequirement } from './HanzhongRequirement';
import { errorRequirementResponse, HANZHONG_REQUIREMENT_RESPONSES, type HanzhongRequirementResponse } from './RequirementResponse';
import type { RequirementsCache } from './RequirementsCache';

const isFreebieRequirementSatisfied = (
  requirement: HanzhongUnverifiableRequirement,
  requirementsCache: RequirementsCache
): HanzhongRequirementResponse => {
  const cachedCheck = requirementsCache[requirement.id];
  if (cachedCheck) {
    return cachedCheck;
  }

  const checkToCache = { satisfied: true, value: -1, expected: requirement.count };
  requirementsCache[requirement.id] = checkToCache;
  return checkToCache;
};

export const areRequirementsSatisfied = (
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
    } else if (requirement.section === 'freebie') {
      return isFreebieRequirementSatisfied(requirement, requirementsCache);
    } else if (requirement.section === 'wartier') {
      return isWarTierRequirementSatisfied(requirement, userData, requirementsCache);
    } else {
      return errorRequirementResponse(`Unknown section.`);
    }
  }, HANZHONG_REQUIREMENT_RESPONSES.INITIAL_VALUE);
