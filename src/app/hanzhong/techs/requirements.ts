import { getNumberValue } from '../../utils';
import {
  errorRequirementResponse,
  type HanzhongBaseRequirement,
  type HanzhongRequirementResponse,
  type RequirementsCache,
} from '../requirements';
import type { HanzhongUserDataType } from '../types';
import { getTechByName, HANZHONG_TECHS } from './techs--data';

const SECTION_NAME = 'techs';

export type HanzhongTechBaseRequirement = HanzhongBaseRequirement & {
  section: typeof SECTION_NAME;
};

export type HanzhongTechLevelRequirement = HanzhongTechBaseRequirement & {
  type: 'level';
  techName: string;
  level: number;
};

export const isTechLevelRequirementSatisfied = (
  requirement: HanzhongTechLevelRequirement,
  userData: HanzhongUserDataType
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

export type HanzhongTechCountRequirement = HanzhongTechBaseRequirement & {
  type: 'count';
  count: number;
};

const isTechCountRequirementSatisfied = (
  requirement: HanzhongTechCountRequirement,
  userData: HanzhongUserDataType
): HanzhongRequirementResponse => {
  const value = HANZHONG_TECHS.reduce<number>((count, tech) => {
    const level = getNumberValue(userData, tech.id);
    return count + (level > 0 ? 1 : 0);
  }, 0);

  return { satisfied: value >= requirement.count, value, expected: requirement.count };
};

export type HanzhongTechRequirement = HanzhongTechLevelRequirement | HanzhongTechCountRequirement;

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
    checkToCache = isTechLevelRequirementSatisfied(requirement, userData);
  } else if (requirement.type === 'count') {
    checkToCache = isTechCountRequirementSatisfied(requirement, userData);
  } else {
    checkToCache = errorRequirementResponse(`Invalid requirement "${JSON.stringify(requirement)}".`);
  }
  requirementsCache[requirement.id] = checkToCache;
  return checkToCache;
};
