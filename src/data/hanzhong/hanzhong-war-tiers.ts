import type { HanzhongWarTierType } from '../../types/hanzhong-war-tier-type';
import {
  HANZHONG_WAR_TIER_1_TECHS,
  HANZHONG_WAR_TIER_2_TECHS,
  HANZHONG_WAR_TIER_3_TECHS,
  HANZHONG_WAR_TIER_4_TECHS,
  HANZHONG_WAR_TIER_5_TECHS,
  HANZHONG_WAR_TIER_6_TECHS,
  HANZHONG_WAR_TIER_7_TECHS,
} from './hanzhong-techs';

export const HANZHONG_WAR_TIER_1: HanzhongWarTierType = {
  id: 'hanzhong--war-tier--1',
  bg: '#B9E5E4',
  icon: {
    path: 'hanzhong/war-tier/lv1.png',
  },
  tasks: [
    {
      label: 'Logging Pioneer',
      description: 'Occupy 2 Lumber territories',
    },
    {
      label: 'Farming Pioneer',
      description: 'Occupy 2 Grains territories',
    },
    {
      label: 'Mining Pioneer',
      description: 'Occupy 2 Iron territories',
    },
    {
      label: 'Free Paths',
      description: 'Upgrade Tech Free Paths to Lv.1',
    },
    {
      label: 'Bandits Terminator I',
      description: 'Defeat Bandits 1 times',
    },
  ],
  techs: HANZHONG_WAR_TIER_1_TECHS,
};

export const HANZHONG_WAR_TIER_2: HanzhongWarTierType = {
  id: 'hanzhong--war-tier--2',
  bg: '#ADE7F7',
  icon: {
    path: 'hanzhong/war-tier/lv2.png',
  },
  tasks: [
    {
      label: 'Logging Elite',
      description: 'Occupy 3 Lumber territories',
    },
    {
      label: 'Farming Elite',
      description: 'Occupy 3 Grains territories',
    },
    {
      label: 'Mining Elite',
      description: 'Occupy 3 Iron territories',
    },
    {
      label: 'Land Conqueror I',
      description: 'Occupy 2 Lv.3 or above territories',
    },
    {
      label: 'Bandits Terminator II',
      description: 'Defeat Bandits 2 times',
    },
  ],
  techs: HANZHONG_WAR_TIER_2_TECHS,
};

export const HANZHONG_WAR_TIER_3: HanzhongWarTierType = {
  id: 'hanzhong--war-tier--3',
  bg: '#DBC5FF',
  icon: {
    path: 'hanzhong/war-tier/lv3.png',
  },
  tasks: [
    {
      label: 'Territory Plunderer I',
      description: 'Attack territories 10 times (Individual Territory, Strategic City, and Hanzhong City will be counted)',
    },
    {
      label: 'Land Conqueror II',
      description: 'Occupy 2 Lv.4 or above territories',
    },
    {
      label: 'Overall Boost',
      description: 'Upgrade Tech Diligent Warrior I to Lv.5',
    },
    {
      label: 'Tech Master I',
      description: 'Activate 8 Techs',
    },
  ],
  techs: HANZHONG_WAR_TIER_3_TECHS,
};

export const HANZHONG_WAR_TIER_4: HanzhongWarTierType = {
  id: 'hanzhong--war-tier--4',
  bg: '#F5CB87',
  icon: {
    path: 'hanzhong/war-tier/lv4.png',
  },
  tasks: [
    {
      label: 'Territory Plunderer II',
      description: 'Attack territories 15 times (Individual Territory, Strategic City, and Hanzhong City will be counted)',
    },
    {
      label: 'Land Conqueror III',
      description: 'Occupy 2 Lv.5 or above territories',
    },
    {
      label: 'Siege I',
      description: 'Guild occupies 1 Strategic Cities (Hanzhong City excluded)',
    },
    {
      label: 'Bandits Terminator III',
      description: 'Defeat Bandits 4 times',
    },
  ],
  techs: HANZHONG_WAR_TIER_4_TECHS,
};

export const HANZHONG_WAR_TIER_5: HanzhongWarTierType = {
  id: 'hanzhong--war-tier--5',
  bg: '#FFD9A8',
  icon: {
    path: 'hanzhong/war-tier/lv5.png',
  },
  tasks: [
    {
      label: 'Land Conqueror IV',
      description: 'Occupy 2 Lv.6 or above territories',
    },
    {
      label: 'Siege II',
      description: 'Guild occupies 2 Strategic Cities (Hanzhong City excluded)',
    },
    {
      label: "Dragon's Attendant",
      description: 'Upgrade Tech Formation Expansion to Lv.1',
    },
    {
      label: 'Tech Master II',
      description: 'Activate 14 Techs',
    },
  ],
  techs: HANZHONG_WAR_TIER_5_TECHS,
};

export const HANZHONG_WAR_TIER_6: HanzhongWarTierType = {
  id: 'hanzhong--war-tier--6',
  bg: '#F6E8A4',
  icon: {
    path: 'hanzhong/war-tier/lv6.png',
  },
  tasks: [
    {
      label: 'Territory Plunderer III',
      description: 'Attack territories 25 times (Individual Territory, Strategic City, and Hanzhong City will be counted)',
    },
    {
      label: 'Land Conqueror V',
      description: 'Occupy 5 Lv.6 or above territories',
    },
    {
      label: 'Siege III',
      description: 'Guild occupies 3 Strategic Cities (Hazhong City excluded)',
    },
    {
      label: 'Bandits Terminator IV',
      description: 'Defeat Bandits 6 times',
    },
    {
      label: 'Tech Master III',
      description: 'Activate 18 Techs',
    },
  ],
  techs: HANZHONG_WAR_TIER_6_TECHS,
};

export const HANZHONG_WAR_TIER_7: HanzhongWarTierType = {
  id: 'hanzhong--war-tier--7',
  bg: '#FFFCA6',
  icon: {
    path: 'hanzhong/war-tier/lv7.png',
  },
  tasks: [
    {
      label: 'Territory Plunderer IV',
      description: 'Attack territories 40 times (Individual Territory, Strategic City, and Hanzhong City will be counted)',
    },
    {
      label: 'Land Conqueror VI',
      description: 'Occupy 10 Lv.6 or above territories',
    },
    {
      label: 'Siege IV',
      description: 'Guild occupies 5 Strategic Cities (Hanzhong City excluded)',
    },
    {
      label: 'Pacificator',
      description: 'Guild occupies Hanzhong City 1 times',
    },
  ],
  techs: HANZHONG_WAR_TIER_7_TECHS,
};

export const HANZHONG_WAR_TIERS: HanzhongWarTierType[] = [
  HANZHONG_WAR_TIER_1,
  HANZHONG_WAR_TIER_2,
  HANZHONG_WAR_TIER_3,
  HANZHONG_WAR_TIER_4,
  HANZHONG_WAR_TIER_5,
  HANZHONG_WAR_TIER_6,
  HANZHONG_WAR_TIER_7,
];
