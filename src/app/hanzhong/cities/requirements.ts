import {
  areRequirementsSatisfied,
  errorRequirementResponse,
  isErrorRequirementResponse,
  type HanzhongBaseRequirement,
  type HanzhongRequirementResponse,
  type RequirementsCache,
} from '../requirements';
import { HANZHONG_REQUIREMENT_RESPONSES } from '../requirements/RequirementResponse';
import type { HanzhongUserDataType } from '../types';
import { HANZHONG_CITIES } from './data';
import type { HanzhongCityType } from './types';

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
          const check = areRequirementsSatisfied(userData, [city.requirement], requirementsCache);
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

export type HanzhongCitiesNonHanzhongRequirement = HanzhongCitiesBaseRequirement & {
  type: 'non-hanzhong';
  count: number;
};

export type HanzhongCitiesHanzhongRequirement = HanzhongCitiesBaseRequirement & {
  type: 'hanzhong';
  count: 1;
};

const isCityHanzhongOrNonHanzhongRequirementSatisfied = (
  requirement: HanzhongCitiesHanzhongRequirement | HanzhongCitiesNonHanzhongRequirement,
  userData: HanzhongUserDataType,
  filter: (city: HanzhongCityType) => boolean
): HanzhongRequirementResponse => {
  const count = HANZHONG_CITIES.filter(filter).reduce<number>((sum, city) => sum + (isCityOccupied(city.id, userData) ? 1 : 0), 0);

  return { satisfied: count >= requirement.count, value: count, expected: requirement.count };
};

const isCityNonHanzhongRequirementSatisfied = (
  requirement: HanzhongCitiesNonHanzhongRequirement,
  userData: HanzhongUserDataType
): HanzhongRequirementResponse =>
  isCityHanzhongOrNonHanzhongRequirementSatisfied(requirement, userData, (city) => city.name !== 'Hanzhong City');

const isCityHanzhongRequirementSatisfied = (
  requirement: HanzhongCitiesHanzhongRequirement,
  userData: HanzhongUserDataType
): HanzhongRequirementResponse =>
  isCityHanzhongOrNonHanzhongRequirementSatisfied(requirement, userData, (city) => city.name === 'Hanzhong City');

export type HanzhongCitiesRequirement =
  | HanzhongCitiesCountRequirement
  | HanzhongCitiesNonHanzhongRequirement
  | HanzhongCitiesHanzhongRequirement;

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
  } else if (requirement.type === 'non-hanzhong') {
    checkToCache = isCityNonHanzhongRequirementSatisfied(requirement, userData);
  } else if (requirement.type === 'hanzhong') {
    checkToCache = isCityHanzhongRequirementSatisfied(requirement, userData);
  } else {
    checkToCache = errorRequirementResponse(`Invalid type: "${JSON.stringify(requirement)}".`);
  }
  requirementsCache[requirement.id] = checkToCache;
  return checkToCache;
};
