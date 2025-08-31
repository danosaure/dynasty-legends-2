import {
  areRequirementsSatified,
  errorRequirementResponse,
  isErrorRequirementResponse,
  type HanzhongBaseRequirement,
  type HanzhongRequirementResponse,
  type RequirementsCache,
} from '../requirements';
import { HANZHONG_REQUIREMENT_RESPONSES } from '../requirements/RequirementResponse';
import type { HanzhongUserDataType } from '../types';

import { getCityByName, isCityOccupied } from './utils';

const SECTION_NAME = 'cities';

export type HanzhongCitiesBaseRequirement = HanzhongBaseRequirement & {
  section: typeof SECTION_NAME;
};

export type HanzhongCitiesCountRequirement = HanzhongCitiesBaseRequirement & {
  type: 'count';
  cityNames: string[];
  count: number;
};

export type HanzhongCitiesRequirement = HanzhongCitiesCountRequirement;

export const isCityCountRequirementSatisfied = (
  requirement: HanzhongCitiesCountRequirement,
  userData: HanzhongUserDataType,
  requirementsCache: RequirementsCache
): HanzhongRequirementResponse => {
  const result = requirement.cityNames.reduce<HanzhongRequirementResponse>(
    (consolidatedCheck, cityName) => {
      if (isErrorRequirementResponse(consolidatedCheck)) {
        return consolidatedCheck;
      }

      const city = getCityByName(cityName);
      if (!city) {
        return errorRequirementResponse(
          `Invalid city name="${cityName}" for requirement="${requirement.section}/${requirement.type}".`
        );
      }

      if (isCityOccupied(city.id, userData)) {
        if (city.requirement) {
          const check = areRequirementsSatified(userData, [city.requirement], requirementsCache);
          if (isErrorRequirementResponse(check)) {
            return check;
          }

          return {
            ...consolidatedCheck,
            value: consolidatedCheck.value + (check.satisfied ? 1 : 0),
          };
        } else {
          return {
            ...consolidatedCheck,
            value: consolidatedCheck.value + 1,
          };
        }
      }

      return consolidatedCheck;
    },
    { ...HANZHONG_REQUIREMENT_RESPONSES.INITIAL_VALUE, expected: requirement.count }
  );

  if (isErrorRequirementResponse(result)) {
    return result;
  }

  return {
    satisfied: result.value >= requirement.count,
    value: result.value,
    expected: requirement.count,
  };
};

export const isCityRequirementSatisfied = (
  requirement: HanzhongCitiesRequirement,
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
  } else if (requirement.type == 'count') {
    checkToCache = isCityCountRequirementSatisfied(requirement, userData, requirementsCache);
  } else {
    checkToCache = errorRequirementResponse(`isCityRequirementSatisfied(): Need to implement type="${requirement.type}".`);
  }
  requirementsCache[requirement.id] = checkToCache;
  return checkToCache;
};
