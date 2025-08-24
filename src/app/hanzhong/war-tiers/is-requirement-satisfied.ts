import {
  areRequirementsSatified,
  VALIDATOR_RESPONSES,
  type HanzhongRequirement,
  type HanzhongRequirementCheckResult,
  type HanzhongRequirementValidator,
} from '../requirements';
import type { HanzhongRequirementsCache } from '../requirements/Cache';
import type { HanzhongUserDataType } from '../types';
import { getWarTierById } from './war-tiers-data';

export const isWarTierRequirementSatisfied: HanzhongRequirementValidator = (
  requirement: HanzhongRequirement,
  userData: HanzhongUserDataType,
  requirementsCache: HanzhongRequirementsCache
): HanzhongRequirementCheckResult => {
  if (requirement.section === 'warTiers') {
    const previousTier = getWarTierById(requirement.warTierId);

    // Has all tasks completed?

    const previousTierTasksSatisfied = previousTier.tasks.map<HanzhongRequirementCheckResult>((task) => {
      if (task.requirement) {
        return areRequirementsSatified(task.id, [task.requirement], userData, requirementsCache);
      }
      return { requirement, ...VALIDATOR_RESPONSES.NO_REQUIREMENTS };
    });

    const anyInvalidCheck = previousTierTasksSatisfied.filter((check) => !check.satisfies).length > 0;

    if (anyInvalidCheck) {
      return { requirement, satisfies: false, value: -1 };
    }

    if (previousTier.requirement) {
      return areRequirementsSatified(previousTier.id, [previousTier.requirement], userData, requirementsCache);
    }

    return { requirement, satisfies: true, value: -1 };
  }
  return { requirement, ...VALIDATOR_RESPONSES.UNKNOWN_SECTION };
};
