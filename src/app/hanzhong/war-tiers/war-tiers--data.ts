import { sanitizeId } from '../../../utils';
import { HANZHONG_WAR_TIER_IDS } from '../constants/items-ids';
import { HANZHONG__WAR_TIERS__TECHS__BY_LEVEL } from '../techs';

import type { HanzhongWarTierType } from './WarTierType';

const assetPath = (f: string): string => `hanzhong/war-tier/${f}.png`;

const baseTask = (label: string) => ({
  id: `hanzhong--war-tier--task--${sanitizeId(label)}`,
  label,
});

const requirementId = (label: string) => baseTask(label).id;

export const HANZHONG_WAR_TIER_1: HanzhongWarTierType = {
  id: HANZHONG_WAR_TIER_IDS.LV1,
  bg: '#B9E5E4',
  icon: {
    path: assetPath('lv1'),
  },
  tasks: [
    {
      ...baseTask('Logging Pioneer'),
      description: 'Occupy 2 Lumber territories',
      requirement: {
        id: requirementId('Logging Pioneer'),
        section: 'territories',
        type: 'resources',
        resourceType: 'lumber',
        count: 2,
      },
    },
    {
      ...baseTask('Farming Pioneer'),
      description: 'Occupy 2 Grains territories',
      requirement: {
        id: requirementId('Farming Pioneer'),
        section: 'territories',
        type: 'resources',
        resourceType: 'grains',
        count: 2,
      },
    },
    {
      ...baseTask('Mining Pioneer'),
      description: 'Occupy 2 Iron territories',
      requirement: {
        id: requirementId('Mining Pioneer'),
        section: 'territories',
        type: 'resources',
        resourceType: 'iron',
        count: 2,
      },
    },
    {
      ...baseTask('Free Paths'),
      description: 'Upgrade Tech Free Paths to Lv.1',
      requirement: {
        id: requirementId('Free Paths'),
        section: 'techs',
        type: 'level',
        techName: 'Free Paths',
        level: 1,
      },
    },
    {
      ...baseTask('Bandits Terminator I'),
      description: 'Defeat Bandits 1 times',
      requirement: {
        id: requirementId('Bandits Terminator I'),
        section: 'bandits',
        type: 'count',
        value: 1,
      },
    },
  ],
  techs: HANZHONG__WAR_TIERS__TECHS__BY_LEVEL[1],
};

export const HANZHONG_WAR_TIER_2: HanzhongWarTierType = {
  id: HANZHONG_WAR_TIER_IDS.LV2,
  bg: '#ADE7F7',
  icon: {
    path: assetPath('lv2'),
  },
  tasks: [
    {
      ...baseTask('Logging Elite'),
      description: 'Occupy 3 Lumber territories',
      requirement: {
        id: requirementId('Logging Elite'),
        section: 'territories',
        type: 'resources',
        resourceType: 'lumber',
        count: 3,
      },
    },
    {
      ...baseTask('Farming Elite'),
      description: 'Occupy 3 Grains territories',
      requirement: {
        id: requirementId('Farming Elite'),
        section: 'territories',
        type: 'resources',
        resourceType: 'grains',
        count: 3,
      },
    },
    {
      ...baseTask('Mining Elite'),
      description: 'Occupy 3 Iron territories',
      requirement: {
        id: requirementId('Mining Elite'),
        section: 'territories',
        type: 'resources',
        resourceType: 'iron',
        count: 3,
      },
    },
    {
      ...baseTask('Land Conqueror I'),
      description: 'Occupy 2 Lv.3 or above territories',
      requirement: {
        id: requirementId('Land Conqueror I'),
        section: 'territories',
        type: 'level',
        level: 3,
        count: 2,
      },
    },
    {
      ...baseTask('Bandits Terminator II'),
      description: 'Defeat Bandits 2 times',
      requirement: {
        id: requirementId('Bandits Terminator II'),
        section: 'bandits',
        type: 'count',
        value: 2,
      },
    },
  ],
  techs: HANZHONG__WAR_TIERS__TECHS__BY_LEVEL[2],
};

export const HANZHONG_WAR_TIER_3: HanzhongWarTierType = {
  id: HANZHONG_WAR_TIER_IDS.LV3,
  bg: '#DBC5FF',
  icon: {
    path: assetPath('lv3'),
  },
  tasks: [
    {
      ...baseTask('Territory Plunderer I'),
      description: 'Attack territories 10 times (Individual Territory, Strategic City, and Hanzhong City will be counted)',
      requirement: {
        id: requirementId('Territory Plunderer I'),
        section: 'freebie',
        type: 'freebie',
        count: 10,
      },
    },
    {
      ...baseTask('Land Conqueror II'),
      description: 'Occupy 2 Lv.4 or above territories',
      requirement: {
        id: requirementId('Land Conqueror II'),
        section: 'territories',
        type: 'level',
        level: 4,
        count: 2,
      },
    },
    {
      ...baseTask('Overall Boost'),
      description: 'Upgrade Tech Diligent Warrior I to Lv.5',
      requirement: {
        id: requirementId('Overall Boost'),
        section: 'techs',
        type: 'level',
        techName: 'Diligent Warrior I',
        level: 5,
      },
    },
    {
      ...baseTask('Tech Master I'),
      description: 'Activate 8 Techs',
      requirement: {
        id: requirementId('Tech Master I'),
        section: 'techs',
        type: 'count',
        count: 8,
      },
    },
  ],
  techs: HANZHONG__WAR_TIERS__TECHS__BY_LEVEL[3],
};

export const HANZHONG_WAR_TIER_4: HanzhongWarTierType = {
  id: HANZHONG_WAR_TIER_IDS.LV4,
  bg: '#F5CB87',
  icon: {
    path: assetPath('lv4'),
  },
  tasks: [
    {
      ...baseTask('Territory Plunderer II'),
      description: 'Attack territories 15 times (Individual Territory, Strategic City, and Hanzhong City will be counted)',
      requirement: {
        id: requirementId('Territory Plunderer II'),
        section: 'freebie',
        type: 'freebie',
        count: 15,
      },
    },
    {
      ...baseTask('Land Conqueror III'),
      description: 'Occupy 2 Lv.5 or above territories',
      requirement: {
        id: requirementId('Land Conqueror III'),
        section: 'territories',
        type: 'level',
        level: 5,
        count: 2,
      },
    },
    {
      ...baseTask('Siege I'),
      description: 'Guild occupies 1 Strategic Cities (Hanzhong City excluded)',
      requirement: {
        id: requirementId('Siege I'),
        section: 'cities',
        type: 'non-hanzhong',
        count: 1,
      },
    },
    {
      ...baseTask('Bandits Terminator III'),
      description: 'Defeat Bandits 4 times',
      requirement: {
        id: requirementId('Bandits Terminator III'),
        section: 'bandits',
        type: 'count',
        value: 4,
      },
    },
  ],
  techs: HANZHONG__WAR_TIERS__TECHS__BY_LEVEL[4],
};

export const HANZHONG_WAR_TIER_5: HanzhongWarTierType = {
  id: HANZHONG_WAR_TIER_IDS.LV5,
  bg: '#FFD9A8',
  icon: {
    path: assetPath('lv5'),
  },
  tasks: [
    {
      ...baseTask('Land Conqueror IV'),
      description: 'Occupy 2 Lv.6 or above territories',
      requirement: {
        id: requirementId('Land Conqueror IV'),
        section: 'territories',
        type: 'level',
        level: 6,
        count: 2,
      },
    },
    {
      ...baseTask('Siege II'),
      description: 'Guild occupies 2 Strategic Cities (Hanzhong City excluded)',
      requirement: {
        id: requirementId('Siege II'),
        section: 'cities',
        type: 'non-hanzhong',
        count: 2,
      },
    },
    {
      ...baseTask("Dragon's Attendant"),
      description: 'Upgrade Tech Formation Expansion to Lv.1',
      requirement: {
        id: requirementId("Dragon's Attendant"),
        section: 'techs',
        type: 'level',
        techName: 'Formation Expansion',
        level: 1,
      },
    },
    {
      ...baseTask('Tech Master II'),
      description: 'Activate 14 Techs',
      requirement: {
        id: requirementId('Tech Master II'),
        section: 'techs',
        type: 'count',
        count: 14,
      },
    },
  ],
  techs: HANZHONG__WAR_TIERS__TECHS__BY_LEVEL[5],
};

export const HANZHONG_WAR_TIER_6: HanzhongWarTierType = {
  id: HANZHONG_WAR_TIER_IDS.LV6,
  bg: '#F6E8A4',
  icon: {
    path: assetPath('lv6'),
  },
  tasks: [
    {
      ...baseTask('Territory Plunderer III'),
      description: 'Attack territories 25 times (Individual Territory, Strategic City, and Hanzhong City will be counted)',
      requirement: {
        id: requirementId('Territory Plunderer III'),
        section: 'freebie',
        type: 'freebie',
        count: 25,
      },
    },
    {
      ...baseTask('Land Conqueror V'),
      description: 'Occupy 5 Lv.6 or above territories',
      requirement: {
        id: requirementId('Land Conqueror V'),
        section: 'territories',
        type: 'level',
        level: 6,
        count: 5,
      },
    },
    {
      ...baseTask('Siege III'),
      description: 'Guild occupies 3 Strategic Cities (Hazhong City excluded)',
      requirement: {
        id: requirementId('Siege III'),
        section: 'cities',
        type: 'non-hanzhong',
        count: 3,
      },
    },
    {
      ...baseTask('Bandits Terminator IV'),
      description: 'Defeat Bandits 6 times',
      requirement: {
        id: requirementId('Bandits Terminator IV'),
        section: 'bandits',
        type: 'count',
        value: 6,
      },
    },
    {
      ...baseTask('Tech Master III'),
      description: 'Activate 18 Techs',
      requirement: {
        id: requirementId('Tech Master III'),
        section: 'techs',
        type: 'count',
        count: 18,
      },
    },
  ],
  techs: HANZHONG__WAR_TIERS__TECHS__BY_LEVEL[6],
};

export const HANZHONG_WAR_TIER_7: HanzhongWarTierType = {
  id: HANZHONG_WAR_TIER_IDS.LV7,
  bg: '#FFFCA6',
  icon: {
    path: assetPath('lv7'),
  },
  tasks: [
    {
      ...baseTask('Territory Plunderer IV'),
      description: 'Attack territories 40 times (Individual Territory, Strategic City, and Hanzhong City will be counted)',
      requirement: {
        id: requirementId('Territory Plunderer IV'),
        section: 'freebie',
        type: 'freebie',
        count: 40,
      },
    },
    {
      ...baseTask('Land Conqueror VI'),
      description: 'Occupy 10 Lv.6 or above territories',
      requirement: {
        id: requirementId('Land Conqueror VI'),
        section: 'territories',
        type: 'level',
        level: 6,
        count: 10,
      },
    },
    {
      ...baseTask('Siege IV'),
      description: 'Guild occupies 5 Strategic Cities (Hanzhong City excluded)',
      requirement: {
        id: requirementId('Siege IV'),
        section: 'cities',
        type: 'non-hanzhong',
        count: 5,
      },
    },
    {
      ...baseTask('Pacificator'),
      description: 'Guild occupies Hanzhong City 1 times',
      requirement: {
        id: requirementId('Pacificator'),
        section: 'cities',
        type: 'hanzhong',
        count: 1,
      },
    },
  ],
  techs: HANZHONG__WAR_TIERS__TECHS__BY_LEVEL[7],
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

export type HanzhongWarTierLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7;

const HANZHONG__WAR_TIERS__BY_LEVEL: Record<HanzhongWarTierLevel, HanzhongWarTierType> = {
  1: HANZHONG_WAR_TIER_1,
  2: HANZHONG_WAR_TIER_2,
  3: HANZHONG_WAR_TIER_3,
  4: HANZHONG_WAR_TIER_4,
  5: HANZHONG_WAR_TIER_5,
  6: HANZHONG_WAR_TIER_6,
  7: HANZHONG_WAR_TIER_7,
};

export const getWarTierByLevel = (level: HanzhongWarTierLevel) => HANZHONG__WAR_TIERS__BY_LEVEL[level];
