import type { HanzhongTerritoriesType } from './TerritoriesType';

const LEVEL_1 = 'lv1';
const LEVEL_2 = 'lv2';
const LEVEL_3 = 'lv3';
const LEVEL_4 = 'lv4';
const LEVEL_5 = 'lv5';
const LEVEL_6 = 'lv6';
const LEVEL_7 = 'lv7';
const LEVEL_8 = 'lv8';
const LEVEL_9 = 'lv9';

const HANZHONG_TERRITORY = `hanzhong--territory`;
export const HANZHONG_TERRITORY_LEVEL_IDS: Record<number, string> = {
  [1]: `${HANZHONG_TERRITORY}--${LEVEL_1}`,
  [2]: `${HANZHONG_TERRITORY}--${LEVEL_2}`,
  [3]: `${HANZHONG_TERRITORY}--${LEVEL_3}`,
  [4]: `${HANZHONG_TERRITORY}--${LEVEL_4}`,
  [5]: `${HANZHONG_TERRITORY}--${LEVEL_5}`,
  [6]: `${HANZHONG_TERRITORY}--${LEVEL_6}`,
  [7]: `${HANZHONG_TERRITORY}--${LEVEL_7}`,
  [8]: `${HANZHONG_TERRITORY}--${LEVEL_8}`,
  [9]: `${HANZHONG_TERRITORY}--${LEVEL_9}`,
} as const;

const LUMBER_MILL = 'lumber-mill';
const GRANARY = 'granary';
const IRON_MINE = 'iron-mine';

type ResourceLevelRecord = Record<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9, string>;
type Resources = Record<string, ResourceLevelRecord>;

export const HANZHONG_TERRITORY_IDS: Resources = {
  LUMBER_MILL: {
    [1]: `${HANZHONG_TERRITORY}--${LUMBER_MILL}--${LEVEL_1}`,
    [2]: `${HANZHONG_TERRITORY}--${LUMBER_MILL}--${LEVEL_2}`,
    [3]: `${HANZHONG_TERRITORY}--${LUMBER_MILL}--${LEVEL_3}`,
    [4]: `${HANZHONG_TERRITORY}--${LUMBER_MILL}--${LEVEL_4}`,
    [5]: `${HANZHONG_TERRITORY}--${LUMBER_MILL}--${LEVEL_5}`,
    [6]: `${HANZHONG_TERRITORY}--${LUMBER_MILL}--${LEVEL_6}`,
    [7]: `${HANZHONG_TERRITORY}--${LUMBER_MILL}--${LEVEL_7}`,
    [8]: `${HANZHONG_TERRITORY}--${LUMBER_MILL}--${LEVEL_8}`,
    [9]: `${HANZHONG_TERRITORY}--${LUMBER_MILL}--${LEVEL_9}`,
  },

  GRANARY: {
    [1]: `${HANZHONG_TERRITORY}--${GRANARY}--${LEVEL_1}`,
    [2]: `${HANZHONG_TERRITORY}--${GRANARY}--${LEVEL_2}`,
    [3]: `${HANZHONG_TERRITORY}--${GRANARY}--${LEVEL_3}`,
    [4]: `${HANZHONG_TERRITORY}--${GRANARY}--${LEVEL_4}`,
    [5]: `${HANZHONG_TERRITORY}--${GRANARY}--${LEVEL_5}`,
    [6]: `${HANZHONG_TERRITORY}--${GRANARY}--${LEVEL_6}`,
    [7]: `${HANZHONG_TERRITORY}--${GRANARY}--${LEVEL_7}`,
    [8]: `${HANZHONG_TERRITORY}--${GRANARY}--${LEVEL_8}`,
    [9]: `${HANZHONG_TERRITORY}--${GRANARY}--${LEVEL_9}`,
  },

  IRON_MINE: {
    [1]: `${HANZHONG_TERRITORY}--${IRON_MINE}--${LEVEL_1}`,
    [2]: `${HANZHONG_TERRITORY}--${IRON_MINE}--${LEVEL_2}`,
    [3]: `${HANZHONG_TERRITORY}--${IRON_MINE}--${LEVEL_3}`,
    [4]: `${HANZHONG_TERRITORY}--${IRON_MINE}--${LEVEL_4}`,
    [5]: `${HANZHONG_TERRITORY}--${IRON_MINE}--${LEVEL_5}`,
    [6]: `${HANZHONG_TERRITORY}--${IRON_MINE}--${LEVEL_6}`,
    [7]: `${HANZHONG_TERRITORY}--${IRON_MINE}--${LEVEL_7}`,
    [8]: `${HANZHONG_TERRITORY}--${IRON_MINE}--${LEVEL_8}`,
    [9]: `${HANZHONG_TERRITORY}--${IRON_MINE}--${LEVEL_9}`,
  },
};

export const HANZHONG_TERRITORIES: HanzhongTerritoriesType = {
  features: [
    'Increases Wei Officers damage to the garrison by 20%',
    'Increases Shu Officers damage to the garrison by 20%',
    'Increases Wu Officers damage to the garrison by 20%',
    'Increases Others Officers damage to the garrison by 20%',
    "Reduces the garrison's damage taken from Wei Officers by 20%",
    "Reduces the garrison's damage taken from Shu Officers by 20%",
    "Reduces the garrison's damage taken from Wu Officers by 20%",
    "Reduces the garrison's damage taken from Others Officers by 20%",
  ],
  levels: [
    {
      id: HANZHONG_TERRITORY_LEVEL_IDS[1],
      tacticalPoints: 300000,
      earnings: [
        {
          id: HANZHONG_TERRITORY_IDS.LUMBER_MILL[1],
          earnings: { woodRate: 60 },
        },
        {
          id: HANZHONG_TERRITORY_IDS.GRANARY[1],
          earnings: { grainsRate: 60 },
        },
        {
          id: HANZHONG_TERRITORY_IDS.IRON_MINE[1],
          earnings: { ironRate: 60 },
        },
      ],
      /*
      features: [
        "Increases the garrison's damage taken by 20%."
      ]
      */
    },
    {
      id: HANZHONG_TERRITORY_LEVEL_IDS[2],
      tacticalPoints: 500000,
      earnings: [
        {
          id: HANZHONG_TERRITORY_IDS.LUMBER_MILL[2],
          earnings: { woodRate: 120 },
        },
        {
          id: HANZHONG_TERRITORY_IDS.GRANARY[2],
          earnings: { grainsRate: 120 },
        },
        {
          id: HANZHONG_TERRITORY_IDS.IRON_MINE[2],
          earnings: { ironRate: 120 },
        },
      ],
      /*
      features: [
        "Increases the garrison's damage taken by 20%."
      ]
      */
    },
    {
      id: HANZHONG_TERRITORY_LEVEL_IDS[3],
      tacticalPoints: 700000,
      earnings: [
        {
          id: HANZHONG_TERRITORY_IDS.LUMBER_MILL[3],
          earnings: { woodRate: 180 },
        },
        {
          id: HANZHONG_TERRITORY_IDS.GRANARY[3],
          earnings: { grainsRate: 180 },
        },
        {
          id: HANZHONG_TERRITORY_IDS.IRON_MINE[3],
          earnings: { ironRate: 180 },
        },
      ],
    },
    {
      id: HANZHONG_TERRITORY_LEVEL_IDS[4],
      tacticalPoints: 1500000,
      earnings: [
        {
          id: HANZHONG_TERRITORY_IDS.LUMBER_MILL[4],
          earnings: { woodRate: 240 },
        },
        {
          id: HANZHONG_TERRITORY_IDS.GRANARY[4],
          earnings: { grainsRate: 240 },
        },
        {
          id: HANZHONG_TERRITORY_IDS.IRON_MINE[4],
          earnings: { ironRate: 240 },
        },
      ],
    },
    {
      id: HANZHONG_TERRITORY_LEVEL_IDS[5],
      tacticalPoints: 2700000,
      earnings: [
        {
          id: HANZHONG_TERRITORY_IDS.LUMBER_MILL[5],
          earnings: { woodRate: 300 },
        },
        {
          id: HANZHONG_TERRITORY_IDS.GRANARY[5],
          earnings: { grainsRate: 300 },
        },
        {
          id: HANZHONG_TERRITORY_IDS.IRON_MINE[5],
          earnings: { ironRate: 300 },
        },
      ],
    },
    {
      id: HANZHONG_TERRITORY_LEVEL_IDS[6],
      tacticalPoints: 4200000,
      earnings: [
        {
          id: HANZHONG_TERRITORY_IDS.LUMBER_MILL[6],
          earnings: { woodRate: 360 },
        },
        {
          id: HANZHONG_TERRITORY_IDS.GRANARY[6],
          earnings: { grainsRate: 360 },
        },
        {
          id: HANZHONG_TERRITORY_IDS.IRON_MINE[6],
          earnings: { ironRate: 360 },
        },
      ],
    },
    {
      id: HANZHONG_TERRITORY_LEVEL_IDS[7],
      tacticalPoints: 7300000,
      earnings: [
        {
          id: HANZHONG_TERRITORY_IDS.LUMBER_MILL[7],
          earnings: { woodRate: 420 },
        },
        {
          id: HANZHONG_TERRITORY_IDS.GRANARY[7],
          earnings: { grainsRate: 420 },
        },
        {
          id: HANZHONG_TERRITORY_IDS.IRON_MINE[7],
          earnings: { ironRate: 420 },
        },
      ],
    },
    {
      id: HANZHONG_TERRITORY_LEVEL_IDS[8],
      tacticalPoints: 10800000,
      earnings: [
        {
          id: HANZHONG_TERRITORY_IDS.LUMBER_MILL[8],
          earnings: { woodRate: 480 },
        },
        {
          id: HANZHONG_TERRITORY_IDS.GRANARY[8],
          earnings: { grainsRate: 480 },
        },
        {
          id: HANZHONG_TERRITORY_IDS.IRON_MINE[8],
          earnings: { ironRate: 480 },
        },
      ],
    },
    {
      id: HANZHONG_TERRITORY_LEVEL_IDS[9],
      tacticalPoints: 10800000,
      earnings: [
        {
          id: HANZHONG_TERRITORY_IDS.LUMBER_MILL[9],
          earnings: { woodRate: 540 },
        },
        {
          id: HANZHONG_TERRITORY_IDS.GRANARY[9],
          earnings: { grainsRate: 540 },
        },
        {
          id: HANZHONG_TERRITORY_IDS.IRON_MINE[9],
          earnings: { ironRate: 540 },
        },
      ],
    },
  ],
} as const;
