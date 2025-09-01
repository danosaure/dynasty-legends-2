import {
  errorRequirementResponse,
  type HanzhongBaseRequirement,
  type HanzhongRequirementResponse,
  type RequirementsCache,
} from '../requirements';
import type { HanzhongUserDataType } from '../types';
import { HANZHONG_BANDITS } from './bandits--data';
import { isBanditDefeated } from './is-bandit-defeated';

const SECTION_NAME = 'bandits';

export type HanzhongBanditsBaseRequirement = HanzhongBaseRequirement & {
  section: typeof SECTION_NAME;
};

export type HanzhongBanditsCountRequirement = HanzhongBanditsBaseRequirement & {
  type: 'count';
  value: number;
};

export type HanzhongBanditsRequirement = HanzhongBanditsCountRequirement;

export const isBanditCountRequirementSatisfied = (
  requirement: HanzhongBanditsCountRequirement,
  userData: HanzhongUserDataType
): HanzhongRequirementResponse => {
  const value = HANZHONG_BANDITS.attacks.reduce<number>(
    (count, attack) => count + (isBanditDefeated(attack.id, userData) ? 1 : 0),
    0
  );
  return {
    satisfied: requirement.value > 0 && value >= requirement.value,
    value,
    expected: requirement.value,
  };
};

export const isBanditRequirementSatisfied = (
  requirement: HanzhongBanditsRequirement,
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
  } else if (requirement.type === 'count') {
    checkToCache = isBanditCountRequirementSatisfied(requirement, userData);
  } else {
    checkToCache = errorRequirementResponse(`Invalid requirement type="${requirement.type}" for section "${requirement.section}".`);
  }

  requirementsCache[requirement.id] = checkToCache;
  return checkToCache;
};
