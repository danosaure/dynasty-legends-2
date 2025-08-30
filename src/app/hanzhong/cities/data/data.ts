import { baseInfo } from '../../data/base-info';
import type { HanzhongCitiesRequirement } from '../requirements';
import type { HanzhongCityType } from '../types';
import { cityIdByName } from '../utils/city-id-by-name';

const requirementsForExternalCities: HanzhongCitiesRequirement = {
  type: 'count',
  section: 'cities',
  cityNames: ['Mianyang County', 'Maming Pavilion', 'North Summit', 'Yangping Pass'],
  count: 1,
};

const requirementsForInnerCities: HanzhongCitiesRequirement = {
  type: 'count',
  section: 'cities',
  cityNames: ['Mount Dingjun', 'Hanshui Trail'],
  count: 1,
};

const HANZHONG__CITY__YANGPING_PASS: HanzhongCityType = {
  ...baseInfo('Yangping Pass', cityIdByName),
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
  ...baseInfo('North Summit', cityIdByName),
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
  ...baseInfo('Maming Pavilion', cityIdByName),
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
  ...baseInfo('Mianyang County', cityIdByName),
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
  ...baseInfo('Mount Dingjun', cityIdByName),
  position: '(63,81)',
  tacticalPoints: 5000000,
  description: "Reduces the garrison's damage taken by 20%",
  earnings: {
    woodRate: 360,
    grainsRate: 360,
    ironRate: 360,
  },
  requirement: requirementsForExternalCities,
} as const;

const HANZHONG__CITY__HANSHUI_TRAIL: HanzhongCityType = {
  ...baseInfo('Hanshui Trail', cityIdByName),
  position: '(87,91)',
  tacticalPoints: 5000000,
  description: "Reduces the garrison's damage taken by 20%",
  earnings: {
    woodRate: 360,
    grainsRate: 360,
    ironRate: 360,
  },
  requirement: requirementsForExternalCities,
} as const;

const HANZHONG__CITY__HANZHONG_CITY: HanzhongCityType = {
  ...baseInfo('Hanzhong City', cityIdByName),
  position: '(75,85)',
  tacticalPoints: 140000000,
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
