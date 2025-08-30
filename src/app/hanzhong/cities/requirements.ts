import { areRequirementsSatified, type RequirementsCache } from '../requirements';
import type { HanzhongUserDataType } from '../types';

import { getCityByName, isCityOccupied } from './utils';

const SECTION_NAME = 'cities';

export type HanzhongCitiesBaseRequirement = {
  section: typeof SECTION_NAME;
};

export type HanzhongCitiesCountRequirement = HanzhongCitiesBaseRequirement & {
  type: 'count';
  cityNames: string[];
  count: number;
};

export type HanzhongCitiesRequirement = HanzhongCitiesCountRequirement;

export const isCityRequirementSatisfied = (
  requirement: HanzhongCitiesRequirement,
  userData: HanzhongUserDataType,
  requirementsCache: RequirementsCache
): boolean => {
  if (requirement.section !== SECTION_NAME) {
    throw new Error(`Invalid requirement section="${requirement.section}". Expecting "${SECTION_NAME}".`);
  }

  if (requirement.type == 'count') {
    const count = requirement.cityNames.reduce<number>((sum, cityName) => {
      const city = getCityByName(cityName);
      if (!city) {
        throw new Error(`Invalid city name="${cityName}".`);
      }

      if (isCityOccupied(city.id, userData)) {
        if (city.requirement) {
          const satisfied = areRequirementsSatified(city.id, userData, [city.requirement], requirementsCache);
          return sum + (satisfied ? 1 : 0);
        } else {
          return sum + 1;
        }
      }

      return sum;
    }, 0);

    return count >= requirement.count;
  } else {
    console.error(`areCityRequirementsSatisfied(): Need to implement type="${requirement.type}".`);
    return false;
  }
};
