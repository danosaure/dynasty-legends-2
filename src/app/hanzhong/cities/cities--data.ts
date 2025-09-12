import { sanitizeId } from '../../../utils';
import { baseInfo } from '../data/base-info';
import type { HanzhongCityType } from './CityType';
import type { HanzhongCitiesRequirement } from './requirements';

export const cityIdByName = (name: string): string => `hanzhong--city--${sanitizeId(name)}`;
const avatarPath = (name: string): string => `hanzhong/cities/${sanitizeId(name)}.png`;

const baseCityInfo = (name: string) => ({
  ...baseInfo(name, cityIdByName),
  avatar: {
    path: avatarPath(name),
  },
});

const requirementsForExternalCities: HanzhongCitiesRequirement = {
  id: 'hanzhong--cities--external',
  type: 'count',
  section: 'cities',
  cityNames: ['Mianyang County', 'Maming Pavilion', 'North Summit', 'Yangping Pass'],
  count: 1,
};

const requirementsForInnerCities: HanzhongCitiesRequirement = {
  id: 'hanzhong--cities--inner',
  type: 'count',
  section: 'cities',
  cityNames: ['Mount Dingjun', 'Hanshui Trail'],
  count: 1,
};

const HANZHONG__CITY__YANGPING_PASS: HanzhongCityType = {
  ...baseCityInfo('Yangping Pass'),
  position: '(61,106)',
  tacticalPoints: [2000000],
  description: 'Increases Wei Officers damage to the garrison by 20%',
  factionBonus: 'Wei',
  earnings: {
    woodRate: 180,
    grainsRate: 180,
    ironRate: 180,
  },
} as const;

const HANZHONG__CITY__NORTH_SUMMIT: HanzhongCityType = {
  ...baseCityInfo('North Summit'),
  position: '(52,74)',
  tacticalPoints: [2000000],
  description: 'Increases Shu Officers damage to the garrison by 20%',
  factionBonus: 'Shu',
  earnings: {
    woodRate: 180,
    grainsRate: 180,
    ironRate: 180,
  },
} as const;

const HANZHONG__CITY__MAMING_PAVILION: HanzhongCityType = {
  ...baseCityInfo('Maming Pavilion'),
  position: '(90,63)',
  tacticalPoints: [2000000],
  description: 'Increases Wu Officers damage to the garrison by 20%',
  factionBonus: 'Wu',
  earnings: {
    woodRate: 180,
    grainsRate: 180,
    ironRate: 180,
  },
} as const;

const HANZHONG__CITY__MIANYANG_COUNTY: HanzhongCityType = {
  ...baseCityInfo('Mianyang County'),
  position: '(99,96)',
  tacticalPoints: [2000000],
  description: 'Increases Other Officers damage to the garrison by 20%',
  factionBonus: 'Other',
  earnings: {
    woodRate: 180,
    grainsRate: 180,
    ironRate: 180,
  },
} as const;

const HANZHONG__CITY__MOUNT_DINGJUN: HanzhongCityType = {
  ...baseCityInfo('Mount Dingjun'),
  position: '(63,81)',
  tacticalPoints: [5000000],
  description: "Reduces the garrison's damage taken by 20%",
  earnings: {
    woodRate: 360,
    grainsRate: 360,
    ironRate: 360,
  },
  requirement: requirementsForExternalCities,
} as const;

const HANZHONG__CITY__HANSHUI_TRAIL: HanzhongCityType = {
  ...baseCityInfo('Hanshui Trail'),
  position: '(87,91)',
  tacticalPoints: [5000000],
  description: "Reduces the garrison's damage taken by 20%",
  earnings: {
    woodRate: 360,
    grainsRate: 360,
    ironRate: 360,
  },
  requirement: requirementsForExternalCities,
} as const;

const HANZHONG__CITY__HANZHONG_CITY: HanzhongCityType = {
  ...baseCityInfo('Hanzhong City'),
  position: '(75,85)',
  tacticalPoints: [14000000, 25000000],
  description: "Reduces the garrison's damage taken by 20%",
  earnings: {
    woodRate: 720,
    grainsRate: 720,
    ironRate: 720,
  },
  requirement: requirementsForInnerCities,
} as const;

export const HANZHONG_CITIES: HanzhongCityType[] = [
  HANZHONG__CITY__YANGPING_PASS,
  HANZHONG__CITY__NORTH_SUMMIT,
  HANZHONG__CITY__MAMING_PAVILION,
  HANZHONG__CITY__MIANYANG_COUNTY,
  HANZHONG__CITY__MOUNT_DINGJUN,
  HANZHONG__CITY__HANSHUI_TRAIL,
  HANZHONG__CITY__HANZHONG_CITY,
] as const;

type CacheType = Record<string, HanzhongCityType>;

const __CACHE_BY_ID: CacheType = HANZHONG_CITIES.reduce<CacheType>(
  (citiesCache, city) =>
    ({
      ...citiesCache,
      [city.id]: city,
    } as const),
  {}
);

const __CACHE_BY_NAME: CacheType = HANZHONG_CITIES.reduce<CacheType>(
  (citiesCache, city) =>
    ({
      ...citiesCache,
      [city.name]: city,
    } as const),
  {}
);

export type HanzhongCityId = keyof typeof __CACHE_BY_ID;
type HanzhongCityName = keyof typeof __CACHE_BY_NAME;

export const getCityById = (id: HanzhongCityId): HanzhongCityType => __CACHE_BY_ID[id];
export const getCityByName = (name: HanzhongCityName): HanzhongCityType => __CACHE_BY_NAME[name];
