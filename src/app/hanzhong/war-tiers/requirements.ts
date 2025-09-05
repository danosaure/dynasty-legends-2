import {
  areRequirementsSatisfied,
  errorRequirementResponse,
  type HanzhongBaseRequirement,
  type HanzhongRequirement,
  type HanzhongRequirementResponse,
  type RequirementsCache,
} from '../requirements';
import type { HanzhongUserDataType } from '../types';
import { getWarTierByLevel, type HanzhongWarTierLevel } from './war-tiers--data';
import type { HanzhongWarTierType } from './WarTierType';

const SECTION_NAME = 'wartier';

const RESPONSES: Record<string, HanzhongRequirementResponse> = {
  INACTIVE: { satisfied: false, value: -1, expected: 1 } as const,
  ACTIVE: { satisfied: false, value: 0, expected: 1 } as const,
  COMPLETE: { satisfied: true, value: 1, expected: 1 } as const,
} as const;

export const isHanzhongWarTierRequirementCompleted = (check: HanzhongRequirementResponse): boolean =>
  check.satisfied === RESPONSES.COMPLETE.satisfied && check.value === RESPONSES.COMPLETE.value;

export const isHanzhongWarTierRequirementActive = (check: HanzhongRequirementResponse): boolean =>
  check.satisfied === RESPONSES.ACTIVE.satisfied && check.value === RESPONSES.ACTIVE.value;

export const isHanzhongWarTierRequirementInactive = (check: HanzhongRequirementResponse): boolean =>
  check.satisfied === RESPONSES.INACTIVE.satisfied && check.value === RESPONSES.INACTIVE.value;

export type HanzhongWarTierRequirement = HanzhongBaseRequirement & {
  section: typeof SECTION_NAME;
  type: 'level';
  level: HanzhongWarTierLevel;
};

const checkRequirementByLevel = (
  level: HanzhongWarTierLevel,
  userData: HanzhongUserDataType,
  requirementsCache: RequirementsCache
): HanzhongRequirementResponse => {
  const warTier = getWarTierByLevel(level);
  const tasksCheck = areRequirementsSatisfied(
    userData,
    warTier.tasks.map<HanzhongRequirement>((task) => task.requirement),
    requirementsCache
  );
  if (tasksCheck.satisfied) {
    return RESPONSES.COMPLETE;
  } else {
    return RESPONSES.ACTIVE;
  }
};

/**
 *
 * @param requirement
 * @param userData
 * @param requirementsCache
 * @returns `value === -1` if inactive. `value === 0` if active. `value === 1` if complete.
 */
export const isWarTierRequirementSatisfied = (
  requirement: HanzhongWarTierRequirement,
  userData: HanzhongUserDataType,
  requirementsCache: RequirementsCache
): HanzhongRequirementResponse => {
  const cachedCheck = requirementsCache[requirement.id];
  if (cachedCheck) {
    return cachedCheck;
  }

  let checkToCache: HanzhongRequirementResponse;

  if (requirement.section !== SECTION_NAME) {
    checkToCache = errorRequirementResponse(`Invalid requirement section="${requirement.section}". Expecting "${SECTION_NAME}".`);
  } else {
    // If the previous war tier is incomplete, then the current one is inactive (red).
    // If the previous war tier is completed, then the current can be either active (orange) or complete (green).
    // Let's find the previous war tier.
    const warTier = getWarTierByLevel(requirement.level);

    if (!requirementsCache[warTier.id]) {
      if (warTier.requirement) {
        const check = areRequirementsSatisfied(userData, [warTier.requirement], requirementsCache);
        if (isHanzhongWarTierRequirementCompleted(check)) {
          requirementsCache[warTier.id] = checkRequirementByLevel(requirement.level, userData, requirementsCache);
        } else {
          requirementsCache[warTier.id] = RESPONSES.INACTIVE;
        }
      } else {
        requirementsCache[warTier.id] = checkRequirementByLevel(requirement.level, userData, requirementsCache);
      }
    }

    const requirementCheck = requirementsCache[warTier.id];
    if (isHanzhongWarTierRequirementCompleted(requirementCheck)) {
      checkToCache = checkRequirementByLevel((requirement.level + 1) as HanzhongWarTierLevel, userData, requirementsCache);
    } else {
      checkToCache = RESPONSES.INACTIVE;
    }
  }

  requirementsCache[requirement.id] = checkToCache;
  return checkToCache;
};

export const checkRequirement = (
  warTier: HanzhongWarTierType,
  userData: HanzhongUserDataType,
  requirementsCache: RequirementsCache
): HanzhongRequirementResponse => {
  if (warTier.requirement) {
    return areRequirementsSatisfied(userData, [warTier.requirement], requirementsCache);
  }

  return checkRequirementByLevel(1, userData, requirementsCache);
};
