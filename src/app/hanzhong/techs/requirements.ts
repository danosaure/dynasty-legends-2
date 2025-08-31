import { getNumberValue } from '../../utils';
import { getTechByName } from '../data';
import {
  errorRequirementResponse,
  type HanzhongBaseRequirement,
  type HanzhongRequirementResponse,
  type RequirementsCache,
} from '../requirements';
import type { HanzhongUserDataType } from '../types';

const SECTION_NAME = 'techs';

export type HanzhongTechBaseRequirement = HanzhongBaseRequirement & {
  section: typeof SECTION_NAME;
};

export type HanzhongTechLevelRequirement = HanzhongTechBaseRequirement & {
  type: 'level';
  techName: string;
  level: number;
};

export type HanzhongTechRequirement = HanzhongTechLevelRequirement;

export const isTechLevelRequirementSatisfied = (
  requirement: HanzhongTechLevelRequirement,
  userData: HanzhongUserDataType
  // requirementsCache: RequirementsCache
): HanzhongRequirementResponse => {
  const tech = getTechByName(requirement.techName);
  if (!tech) {
    return errorRequirementResponse(
      `Invalid techName="${requirement.techName}" for requirement "${requirement.section}/${requirement.type}".`
    );
  }

  const level = getNumberValue(userData, tech.id);
  return {
    satisfied: requirement.level > 0 && level >= requirement.level,
    value: level,
    expected: requirement.level,
  };
};

export const isTechRequirementSatisfied = (
  requirement: HanzhongTechRequirement,
  userData: HanzhongUserDataType,
  requirementsCache: RequirementsCache
): HanzhongRequirementResponse => {
  const cachedCheck = requirementsCache[requirement.id];
  if (cachedCheck) {
    return cachedCheck;
  }

  let checkToCache;
  if (requirement.section !== SECTION_NAME) {
    checkToCache = errorRequirementResponse(`Invalid requirement section="${requirement.section}". Expecting "techs"`);
  } else if (requirement.type === 'level') {
    checkToCache = isTechLevelRequirementSatisfied(requirement, userData /*, requirementsCache*/);
  } else {
    checkToCache = errorRequirementResponse(`Invalid requirement type "${requirement.type}" for section "${requirement.section}".`);
  }
  requirementsCache[requirement.id] = checkToCache;
  return checkToCache;
};
