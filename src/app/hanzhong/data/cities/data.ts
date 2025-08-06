import { baseInfo } from '../base-info';
import { cityIdByName } from './city-id-by-name';
import type { HanzhongCity } from './HanzhongCity';

const HANZHONG__CITY__YANGPING_PASS: HanzhongCity = {
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

const HANZHONG__CITY__NORTH_SUMMIT: HanzhongCity = {
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

const HANZHONG__CITY__MAMING_PAVILION: HanzhongCity = {
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

const HANZHONG__CITY__MIANYANG_COUNTY: HanzhongCity = {
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

const HANZHONG__CITY__MOUNT_DINGJUN: HanzhongCity = {
  ...baseInfo('Mount Dingjun', cityIdByName),
  position: '(63,81)',
  tacticalPoints: 5000000,
  description: "Reduces the garrison's damage taken by 20%",
  earnings: {
    woodRate: 360,
    grainsRate: 360,
    ironRate: 360,
  },
} as const;

const HANZHONG__CITY__HANSHUI_TRAIL: HanzhongCity = {
  ...baseInfo('Hanshui Trail', cityIdByName),
  position: '(87,91)',
  tacticalPoints: 5000000,
  description: "Reduces the garrison's damage taken by 20%",
  earnings: {
    woodRate: 360,
    grainsRate: 360,
    ironRate: 360,
  },
} as const;

const HANZHONG__CITY__HANZHONG_CITY: HanzhongCity = {
  ...baseInfo('Hanzhong City', cityIdByName),
  position: '(75,85)',
  tacticalPoints: 140000000,
  description: "Reduces the garrison's damage taken by 20%",
  earnings: {
    woodRate: 720,
    grainsRate: 720,
    ironRate: 720,
  },
} as const;

export const HANZHONG_CITIES: HanzhongCity[] = [
  HANZHONG__CITY__YANGPING_PASS,
  HANZHONG__CITY__NORTH_SUMMIT,
  HANZHONG__CITY__MAMING_PAVILION,
  HANZHONG__CITY__MIANYANG_COUNTY,
  HANZHONG__CITY__MOUNT_DINGJUN,
  HANZHONG__CITY__HANSHUI_TRAIL,
  HANZHONG__CITY__HANZHONG_CITY,
] as const;
