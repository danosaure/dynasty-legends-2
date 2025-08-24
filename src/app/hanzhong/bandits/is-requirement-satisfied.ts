import {
  VALIDATOR_RESPONSES,
  type HanzhongRequirement,
  type HanzhongRequirementCheckResult,
  type HanzhongRequirementValidator,
} from '../requirements';
import type { HanzhongUserDataType } from '../types';

import { HANZHONG_BANDITS } from './bandits-data';
import { isBanditDefeated } from './is-bandit-defeated';

export const isBanditRequirementSatisfied: HanzhongRequirementValidator = (
  requirement: HanzhongRequirement,
  userData: HanzhongUserDataType
): HanzhongRequirementCheckResult => {
  if (requirement.section === 'bandits') {
    const value = HANZHONG_BANDITS.attacks.reduce<number>(
      (total, attack) => total + (isBanditDefeated(attack.id, userData) ? 1 : 0),
      0
    );

    return { requirement, satisfies: value >= requirement.value, value };
  }
  return { requirement, ...VALIDATOR_RESPONSES.UNKNOWN_SECTION };
};
