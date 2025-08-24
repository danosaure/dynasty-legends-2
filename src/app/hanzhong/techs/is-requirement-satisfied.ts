import { getNumberValue } from '../../utils';
import {
  VALIDATOR_RESPONSES,
  type HanzhongRequirement,
  type HanzhongRequirementCheckResult,
  type HanzhongRequirementValidator,
} from '../requirements';
import type { HanzhongUserDataType } from '../types';
import { HANZHONG_TECH_IDS } from './techs-data';

export const isTechRequirementSatisfied: HanzhongRequirementValidator = (
  requirement: HanzhongRequirement,
  userData: HanzhongUserDataType
): HanzhongRequirementCheckResult => {
  if (requirement.section === 'techs') {
    if (requirement.type === 'level') {
      const value = getNumberValue(userData, requirement.techId);
      return { requirement, satisfies: value >= requirement.value, value };
    } else if (requirement.type === 'count') {
      const value = Object.values(HANZHONG_TECH_IDS).reduce<number>(
        (count, techId) => count + (getNumberValue(userData, techId) >= 0 ? 1 : 0),
        0
      );
      return { requirement, satisfies: value >= requirement.value, value };
    }
    return { requirement, ...VALIDATOR_RESPONSES.UNKNOWN_REQUIREMENT_TYPE };
  }

  return { requirement, ...VALIDATOR_RESPONSES.UNKNOWN_SECTION };
};
