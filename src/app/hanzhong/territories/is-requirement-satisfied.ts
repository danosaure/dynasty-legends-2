import { getNumberValue } from '../../utils';
import {
  VALIDATOR_RESPONSES,
  type HanzhongRequirement,
  type HanzhongRequirementCheckResult,
  type HanzhongRequirementValidator,
} from '../requirements';
import type { HanzhongUserDataType } from '../types';
import { HANZHONG_TERRITORIES, HANZHONG_TERRITORY_IDS } from './territories-data';

const IDS_BY_TYPE: Record<string, Record<number, string>> = {
  Lumber: HANZHONG_TERRITORY_IDS.LUMBER_MILL,
  Grains: HANZHONG_TERRITORY_IDS.GRANARY,
  Iron: HANZHONG_TERRITORY_IDS.IRON_MINE,
};

export const isTerritoryRequirementSatisfied: HanzhongRequirementValidator = (
  requirement: HanzhongRequirement,
  userData: HanzhongUserDataType
): HanzhongRequirementCheckResult => {
  if (requirement.section === 'territories') {
    if (requirement.type === 'plunder') {
      return { requirement, ...VALIDATOR_RESPONSES.ASSUME_DONE };
    } else if (requirement.type === 'level') {
      const value = HANZHONG_TERRITORIES.levels
        .slice(requirement.level - 1)
        .reduce<number>(
          (count, level) =>
            level.earnings.reduce<number>(
              (levelEarningsCount, earning) => levelEarningsCount + getNumberValue(userData, earning.id),
              count
            ),
          0
        );
      return { requirement, satisfies: value >= requirement.value, value };
    } else if (['Lumber', 'Grains', 'Iron'].includes(requirement.type)) {
      const record = IDS_BY_TYPE[requirement.type];
      let value: number = 0;
      for (let level = 1; level <= 9; level++) {
        value += getNumberValue(userData, record[level]);
      }
      return { requirement, satisfies: value >= requirement.value, value };
    }
    return { requirement, ...VALIDATOR_RESPONSES.UNKNOWN_REQUIREMENT_TYPE };
  }

  return { requirement, ...VALIDATOR_RESPONSES.UNKNOWN_SECTION };
};
