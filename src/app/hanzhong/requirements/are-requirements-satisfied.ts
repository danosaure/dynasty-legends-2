import { isBanditRequirementSatisfied } from '../bandits/is-requirement-satisfied';
import { isCityRequirementSatisfied } from '../cities/is-requirement-satisfied';
import { isTechRequirementSatisfied } from '../techs/is-requirement-satisfied';
import { isTerritoryRequirementSatisfied } from '../territories/is-requirement-satisfied';
import type { HanzhongUserDataType } from '../types';
import { isWarTierRequirementSatisfied } from '../war-tiers/is-requirement-satisfied';
import type { HanzhongRequirementsCache } from './Cache';
import type { HanzhongRequirementCheckResult } from './CheckResult';
import type { HanzhongRequirement } from './Requirement';
import type { HanzhongRequirementValidator } from './Validator';
import { VALIDATOR_RESPONSES } from './validator-responses';

const validators: Record<string, HanzhongRequirementValidator> = {
  bandits: isBanditRequirementSatisfied,
  cities: isCityRequirementSatisfied,
  techs: isTechRequirementSatisfied,
  territories: isTerritoryRequirementSatisfied,
  warTiers: isWarTierRequirementSatisfied,
} as const;

export const areRequirementsSatified = (
  id: string,
  requirements: HanzhongRequirement[],
  userData: HanzhongUserDataType,
  requirementsCache: HanzhongRequirementsCache
): HanzhongRequirementCheckResult => {
  if (requirementsCache[id] === undefined) {
    if (!requirements || requirements.length === 0) {
      requirementsCache[id] = { requirement: {}, ...VALIDATOR_RESPONSES.NO_REQUIREMENTS };
    } else {
      const requirementsSatisfied: HanzhongRequirementCheckResult = requirements.reduce<HanzhongRequirementCheckResult>(
        (doneChecking, requirement) => {
          if (!doneChecking.satisfies) {
            return doneChecking;
          }

          const validator = validators[requirement.section];
          if (!validator) {
            return { requirement, ...VALIDATOR_RESPONSES.UNKNOWN_SECTION };
          }

          return validator(requirement, userData, requirementsCache);
        },
        { requirement: {}, ...VALIDATOR_RESPONSES.INITIAL_VALUE }
      );

      requirementsCache[id] = requirementsSatisfied;
    }
  }

  return requirementsCache[id];
};
