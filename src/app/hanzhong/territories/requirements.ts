import { getNumberValue } from '../../utils';
import {
  errorRequirementResponse,
  type HanzhongBaseRequirement,
  type HanzhongRequirementResponse,
  type RequirementsCache,
} from '../requirements';
import type { HanzhongUserDataType } from '../types';
import { HANZHONG_TERRITORIES } from './territories--data';
import type { HanzhongTerritoryResourceType } from './TerritoryResourceType';

const SECTION_NAME = 'territories';

export type HanzhongTerritoryBaseRequirement = HanzhongBaseRequirement & {
  section: typeof SECTION_NAME;
};

export type HanzhongTerritoryResourceRequirement = HanzhongTerritoryBaseRequirement & {
  type: 'resources';
  resourceType: HanzhongTerritoryResourceType;
  count: number;
};

const isTerritoryResourceRequirementSatisfied = (
  requirement: HanzhongTerritoryResourceRequirement,
  userData: HanzhongUserDataType
): HanzhongRequirementResponse => {
  const value = HANZHONG_TERRITORIES.levels.reduce<number>((count, level) => {
    const earning = level.earnings.find((info) => info.resource === requirement.resourceType);
    return count + (earning ? getNumberValue(userData, earning.id) : 0);
  }, 0);

  return { satisfied: value >= requirement.count, value, expected: requirement.count };
};

export type HanzhongTerritoryRequirement = HanzhongTerritoryResourceRequirement;

export const isTerritoryRequirementSatisfied = (
  requirement: HanzhongTerritoryRequirement,
  userData: HanzhongUserDataType,
  requirementsCache: RequirementsCache
): HanzhongRequirementResponse => {
  const cachedCheck = requirementsCache[requirement.id];
  if (cachedCheck) {
    return cachedCheck;
  }

  let checkToCache;
  if (requirement.section !== SECTION_NAME) {
    checkToCache = errorRequirementResponse(`Invalid requirement section="${requirement.section}". Expecting "${SECTION_NAME}".`);
  } else if (requirement.type === 'resources') {
    checkToCache = isTerritoryResourceRequirementSatisfied(requirement, userData);
  } else {
    checkToCache = errorRequirementResponse(`Invalid data: "${JSON.stringify(requirement)}".`);
  }

  requirementsCache[requirement.id] = checkToCache;
  return checkToCache;
};
