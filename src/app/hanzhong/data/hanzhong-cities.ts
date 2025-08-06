import { sanitizeId } from '../../../utils';
import type { HanzhongCityType } from '../types';

export const cityIdByName = (name: string): string => `hanzhong--city--${sanitizeId(name)}`;

const baseInfo = (name: string) => ({
  id: cityIdByName(name),
  name,
});

export const HANZHONG_CITY_IDS = {
  YANGPING_PASS: 'hanzhong--city--yangping-pass',
  NORTH_SUMMIT: 'hanzhong--city--north-summit',
  MAMING_PAVILION: 'hanzhong--city--maming-pavilion',
  MIANYANG_COUNTY: 'hanzhong--city--mianyang-county',
  MOUNT_DINGJUN: 'hanzhong--city--mount-dingjun',
  HANSHUI_TRAIL: 'hanzhong--city--hanshui-trail',
  HANZHONG_CITY: 'hanzhong--city--hanzhong-city',
};

const HANZHONG__CITY__YANGPING_PASS: HanzhongCityType = {
  position: '(61,106)',
  tacticalPoints: 2000000,
  description: 'Increases Wei Officers damage to the garrison by 20%',
  earnings: {
    woodRate: 180,
    grainsRate: 180,
    ironRate: 180,
  },
} as const;

const HANZHONG__CITY__NORTH_SUMMIT: HanzhongCityType = {
  ...baseInfo('North Summit'),
  position: '(52,74)',
  tacticalPoints: 2000000,
  description: 'Increases Shu Officers damage to the garrison by 20%',
  earnings: {
    woodRate: 180,
    grainsRate: 180,
    ironRate: 180,
  },
} as const;

const HANZHONG__CITY__MAMING_PAVILION: HanzhongCityType = {
  ...baseInfo('Maming Pavilion'),
  position: '(90,63)',
  tacticalPoints: 2000000,
  description: 'Increases Wu Officers damage to the garrison by 20%',
  earnings: {
    woodRate: 180,
    grainsRate: 180,
    ironRate: 180,
  },
} as const;

const HANZHONG__CITY__MIANYANG_COUNTY: HanzhongCityType = {
  ...baseInfo('Mianyang County'),
  position: '(99,96)',
  tacticalPoints: 2000000,
  description: 'Increases Other Officers damage to the garrison by 20%',
  earnings: {
    woodRate: 180,
    grainsRate: 180,
    ironRate: 180,
  },
} as const;

const HANZHONG__CITY__MOUNT_DINGJUN: HanzhongCityType = {
  ...baseInfo('Mount Dingjun'),
  position: '(63,81)',
  tacticalPoints: 5000000,
  description: "Reduces the garrison's damage taken by 20%",
  earnings: {
    woodRate: 360,
    grainsRate: 360,
    ironRate: 360,
  },
} as const;

const HANZHONG__CITY__HANSHUI_TRAIL: HanzhongCityType = {
  ...baseInfo('Hanshui Trail'),
  position: '(87,91)',
  tacticalPoints: 5000000,
  description: "Reduces the garrison's damage taken by 20%",
  earnings: {
    woodRate: 360,
    grainsRate: 360,
    ironRate: 360,
  },
} as const;

const HANZHONG__CITY__HANZHONG_CITY: HanzhongCityType = {
  ...baseInfo('Hanzhong City'),
  position: '(75,85)',
  tacticalPoints: 140000000,
  description: "Reduces the garrison's damage taken by 20%",
  earnings: {
    woodRate: 720,
    grainsRate: 720,
    ironRate: 720,
  },
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

export type HanzhongCityName = keyof typeof __CACHE_BY_NAME;
export type HanzhongCityId = keyof typeof __CACHE_BY_ID;

export const getCityByName = (name: HanzhongCityName): HanzhongCityType => __CACHE_BY_NAME[name];
export const getCityById = (id: HanzhongCityId): HanzhongCityType => __CACHE_BY_ID[id];

export const isCityRequirementSatisfied = (): boolean => {
  return false;
};
