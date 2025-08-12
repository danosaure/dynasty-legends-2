import {
  VALIDATOR_RESPONSES,
  type HanzhongRequirement,
  type HanzhongRequirementCheckResult,
  type HanzhongRequirementValidator,
} from '../requirements';
import type { HanzhongUserDataType } from '../types';
import { cityIdByName } from './city-id-by-name';
import { isCityOccupied } from './is-city-occupied';

//
//    Validator
//
export const isCityRequirementSatisfied: HanzhongRequirementValidator = (
  requirement: HanzhongRequirement,
  userData: HanzhongUserDataType
): HanzhongRequirementCheckResult => {
  if (requirement.section === 'cities') {
    let cityNames: string[];
    let countRequired: number;

    if (requirement.type === 'hanzhong') {
      cityNames = ['Hanzhong City'];
      countRequired = 1;
    } else if (requirement.type === 'non-hanzhong') {
      cityNames = ['Mianyang County', 'Maming Pavilion', 'North Summit', 'Yangping Pass', 'Mount Dingjun', 'Hanshui Trail'];
      countRequired = requirement.value;
    } else if (requirement.type === 'amongst') {
      cityNames = requirement.cityNames;
      countRequired = requirement.value;
    } else {
      return VALIDATOR_RESPONSES.UNKNOWN_REQUIREMENT_TYPE;
    }

    const value = cityNames.reduce<number>(
      (count, cityName) => count + (isCityOccupied(cityIdByName(cityName), userData) ? 1 : 0),
      0
    );

    return { satisfies: value >= countRequired, value };
  }

  return VALIDATOR_RESPONSES.UNKNOWN_SECTION;
};
