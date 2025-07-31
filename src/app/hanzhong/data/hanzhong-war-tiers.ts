import type { HanzhongWarTierType } from '../types';
import * as HANZHONG_TECHS from './hanzhong-techs';

import { DOMAIN_KEY, SECTION_KEYS } from '../constants';
import { sanitizeId } from '../../../utils';

export type HanzhongWarTierLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7;

const assetPath = (filename: string): string => `${DOMAIN_KEY}/${SECTION_KEYS.WAR_TIERS}/${sanitizeId(filename)}.png`;

const baseInfo = (level: HanzhongWarTierLevel) => {
  return {
    id: sanitizeId(`${SECTION_KEYS.WAR_TIERS}--${level}`),
    name: `War Tier ${level}`,
    icon: {
      path: assetPath(`lv${level}`),
    },
  };
};

const HANZHONG_WAR_TIER_1: HanzhongWarTierType = {
  ...baseInfo(1),
  bg: '#B9E5E4',
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
      requirements: [1, 'hanzhong--tech--free-paths'],
    },
    {
      label: 'Bandits Terminator I',
      description: 'Defeat Bandits 1 times',
    },
  ],
  techs: [
    HANZHONG_TECHS.HANZHONG_TECH_ATTACK_TRAINING_I,
    HANZHONG_TECHS.HANZHONG_TECH_DEFENSE_TRAINING_I,
    HANZHONG_TECHS.HANZHONG_TECH_TENACITY_TRAINING_I,
    HANZHONG_TECHS.HANZHONG_TECH_FREE_PATHS,
  ],
};

const HANZHONG_WAR_TIER_2: HanzhongWarTierType = {
  ...baseInfo(2),
  bg: '#ADE7F7',
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
  techs: [
    HANZHONG_TECHS.HANZHONG_TECH_LUMBER_MILL,
    HANZHONG_TECHS.HANZHONG_TECH_GRANARY,
    HANZHONG_TECHS.HANZHONG_TECH_IRON_FOUNDRY,
    HANZHONG_TECHS.HANZHONG_TECH_MIGHTY_GENERALS,
  ],
};

const HANZHONG_WAR_TIER_3: HanzhongWarTierType = {
  ...baseInfo(3),
  bg: '#DBC5FF',
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
  techs: [HANZHONG_TECHS.HANZHONG_TECH_DILIGENT_WARRIOR_I, HANZHONG_TECHS.HANZHONG_TECH_TERRITORY_EXPANSION],
};

const HANZHONG_WAR_TIER_4: HanzhongWarTierType = {
  ...baseInfo(4),
  bg: '#F5CB87',
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
  techs: [
    HANZHONG_TECHS.HANZHONG_TECH_ATTACK_TRAINING_II,
    HANZHONG_TECHS.HANZHONG_TECH_DEFENSE_TRAINING_II,
    HANZHONG_TECHS.HANZHONG_TECH_TENACITY_TRAINING_II,
  ],
};

const HANZHONG_WAR_TIER_5: HanzhongWarTierType = {
  ...baseInfo(5),
  bg: '#FFD9A8',
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
  techs: [
    HANZHONG_TECHS.HANZHONG_TECH_OVERALL_DEVELOPMENT,
    HANZHONG_TECHS.HANZHONG_TECH_UNITED_STRENGTH,
    HANZHONG_TECHS.HANZHONG_TECH_FORMATION_EXPANSION,
  ],
};

const HANZHONG_WAR_TIER_6: HanzhongWarTierType = {
  ...baseInfo(6),
  bg: '#F6E8A4',
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
  techs: [
    HANZHONG_TECHS.HANZHONG_TECH_SPECIAL_TRAINING_VANGUARD_CAMP,
    HANZHONG_TECHS.HANZHONG_TECH_SPECIAL_TRAINING_VALIANT_CAVALRY,
    HANZHONG_TECHS.HANZHONG_TECH_SPECIAL_TRAINING_ROYAL_GUARDS,
    HANZHONG_TECHS.HANZHONG_TECH_REHABILITATION,
  ],
};

const HANZHONG_WAR_TIER_7: HanzhongWarTierType = {
  ...baseInfo(7),
  bg: '#FFFCA6',
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
  techs: [HANZHONG_TECHS.HANZHONG_TECH_DILIGENT_WARRIOR_III],
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

export const getWarTierByLevel = (level: HanzhongWarTierLevel): HanzhongWarTierType => HANZHONG_WAR_TIERS[level - 1];
