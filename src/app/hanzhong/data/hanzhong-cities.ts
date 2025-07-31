import type { HanzhongCityType } from '../types';
import { sanitizeId } from '../../../utils';

const baseInfo = (name: string) => ({
  id: sanitizeId(name),
  name,
});

export const HANZHONG_CITY_NAMES: Record<string, string> = {
  HANSHUI_TRAIL: 'Hanshui Trail',
  HANZHONG_CITY: 'Hanzhong City',
  MAMING_PAVILION: 'Maming Pavilion',
  MIANYANG_COUNTY: 'Mianyang County',
  MOUNT_DINGJUN: 'Mount Dingjun',
  NORTH_SUMMIT: 'North Summit',
  YANGPING_PASS: 'Yangping Pass',
};

export type HanzhongCityName = keyof typeof HANZHONG_CITY_NAMES;

export const HANZHONG_CITIES: HanzhongCityType[] = [
  {
    ...baseInfo(HANZHONG_CITY_NAMES.YANGPING_PASS),
    position: '(61,106)',
    tacticalPoints: 2000000,
    description: 'Increases Wei Officers damage to the garrison by 20%',
    earnings: {
      woodRate: 180,
      grainsRate: 180,
      ironRate: 180,
    },
  },
  {
    ...baseInfo(HANZHONG_CITY_NAMES.NORTH_SUMMIT),
    position: '(52,74)',
    tacticalPoints: 2000000,
    description: 'Increases Shu Officers damage to the garrison by 20%',
    earnings: {
      woodRate: 180,
      grainsRate: 180,
      ironRate: 180,
    },
  },
  {
    ...baseInfo(HANZHONG_CITY_NAMES.MAMING_PAVILION),
    position: '(90,63)',
    tacticalPoints: 2000000,
    description: 'Increases Wu Officers damage to the garrison by 20%',
    earnings: {
      woodRate: 180,
      grainsRate: 180,
      ironRate: 180,
    },
  },
  {
    ...baseInfo(HANZHONG_CITY_NAMES.MIANYANG_COUNTY),
    position: '(99,96)',
    tacticalPoints: 2000000,
    description: 'Increases Other Officers damage to the garrison by 20%',
    earnings: {
      woodRate: 180,
      grainsRate: 180,
      ironRate: 180,
    },
  },
  {
    ...baseInfo(HANZHONG_CITY_NAMES.MOUNT_DINGJUN),
    position: '(63,81)',
    tacticalPoints: 5000000,
    description: "Reduces the garrison's damage taken by 20%",
    earnings: {
      woodRate: 360,
      grainsRate: 360,
      ironRate: 360,
    },
  },
  {
    ...baseInfo(HANZHONG_CITY_NAMES.HANSHUI_TRAIL),
    position: '(87,91)',
    tacticalPoints: 5000000,
    description: "Reduces the garrison's damage taken by 20%",
    earnings: {
      woodRate: 360,
      grainsRate: 360,
      ironRate: 360,
    },
  },
  {
    ...baseInfo(HANZHONG_CITY_NAMES.HANZHONG_CITY),
    position: '(75,85)',
    tacticalPoints: 140000000,
    description: "Reduces the garrison's damage taken by 20%",
    earnings: {
      woodRate: 720,
      grainsRate: 720,
      ironRate: 720,
    },
  },
] as const;

export const getCityByName = (name: HanzhongCityName): HanzhongCityType =>
  HANZHONG_CITIES.find((city: HanzhongCityType) => city.name === name);
