import type { HanzhongCityType } from '../types';
import { HANZHONG_CITY_IDS } from '../constants/items-ids';

export const HANZHONG_CITIES: HanzhongCityType[] = [
  {
    id: HANZHONG_CITY_IDS.YANGPING_PASS,
    name: 'Yangping Pass',
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
    id: HANZHONG_CITY_IDS.NORTH_SUMMIT,
    name: 'North Summit',
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
    id: HANZHONG_CITY_IDS.MAMING_PAVILION,
    name: 'Maming Pavilion',
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
    id: HANZHONG_CITY_IDS.MIANYANG_COUNTY,
    name: 'Mianyang County',
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
    id: HANZHONG_CITY_IDS.MOUNT_DINGJUN,
    name: 'Mount Dingjun',
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
    id: HANZHONG_CITY_IDS.HANSHUI_TRAIL,
    name: 'Hanshui Trail',
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
    id: HANZHONG_CITY_IDS.HANZHONG_CITY,
    name: 'Hanzhong City',
    position: '(75,85)',
    tacticalPoints: 140000000,
    description: "Reduces the garrison's damage taken by 20%",
    earnings: {
      woodRate: 720,
      grainsRate: 720,
      ironRate: 720,
    },
  },
];
