import type { HanzhongUserDataType } from '../types';

import { isCityOccupied } from './utils';
import type { HanzhongCityRequirement, HanzhongCityType } from './types';
import type { RequirementsCache } from '../requirements';
import { getCityByName } from './cities--data';

const NON_HANZHONG_CITY_NAMES = [
  'Mianyang County',
  'Maming Pavilion',
  'North Summit',
  'Yangping Pass',
  'Mount Dingjun',
  'Hanshui Trail',
];

const recursiveSatisfied = (city: HanzhongCityType, userData: HanzhongUserDataType, requirementsCache: RequirementsCache) => {
  const occupied = isCityOccupied(city.id, userData);
  if (occupied && city.requirement) {
    const cachedCityRequirementSatisfied = requirementsCache[city.id];
    if (cachedCityRequirementSatisfied === undefined) {
      requirementsCache[city.id] = isCityRequirementSatisfied(city.requirement, userData, requirementsCache);
    }
    return requirementsCache[city.id];
  }
  return false;
};

export const isCityRequirementSatisfied = (
  requirement: HanzhongCityRequirement,
  userData: HanzhongUserDataType,
  requirementsCache: RequirementsCache
): boolean => {
  if (requirement.type === 'oneOf') {
    return requirement.cityNames.reduce<boolean>((foundCity, cityName) => {
      if (foundCity) {
        return foundCity;
      }

      return recursiveSatisfied(getCityByName(cityName), userData, requirementsCache);
    }, false);
  } else if (requirement.type === 'hanzhong') {
    return recursiveSatisfied(getCityByName('Hanzhong City'), userData, requirementsCache);
  } else if (requirement.type === 'non-hanzhong') {
    return (
      NON_HANZHONG_CITY_NAMES.reduce<number>((total, cityName) => {
        const satisfied = recursiveSatisfied(getCityByName(cityName), userData, requirementsCache);
        return total + (satisfied ? 1 : 0);
      }, 0) >= requirement.value
    );
  } else {
    return false;
  }
};
