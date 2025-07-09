import type { HanzhongTerritoryType } from '../types';
import { HANZHONG_TERRITORY_IDS } from '../constants/items-ids';

export const HANZHONG_TERRITORIES: HanzhongTerritoryType = {
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
      tacticalPoints: 300000,
      earnings: [
        {
          id: HANZHONG_TERRITORY_IDS.LUMBER_MILL__1,
          earnings: { woodRate: 60 },
        },
        {
          id: HANZHONG_TERRITORY_IDS.GRANARY__1,
          earnings: { grainsRate: 60 },
        },
        {
          id: HANZHONG_TERRITORY_IDS.IRON_MINE__1,
          earnings: { ironRate: 60 },
        },
      ],
      team: {
        green: 489425,
        orange: [null, null],
        red: null,
        factionBonus: null,
      },
      /*
      features: [
        "Increases the garrison's damage taken by 20%."
      ]
      */
    },
    {
      tacticalPoints: 500000,
      earnings: [
        {
          id: HANZHONG_TERRITORY_IDS.LUMBER_MILL__2,
          earnings: { woodRate: 120 },
        },
        {
          id: HANZHONG_TERRITORY_IDS.GRANARY__2,
          earnings: { grainsRate: 120 },
        },
        {
          id: HANZHONG_TERRITORY_IDS.IRON_MINE__2,
          earnings: { ironRate: 120 },
        },
      ],
      team: {
        green: 489425,
        orange: [null, 489425],
        red: null,
        factionBonus: null,
      },
      /*
      features: [
        "Increases the garrison's damage taken by 20%."
      ]
      */
    },
    {
      tacticalPoints: 700000,
      earnings: [
        {
          id: HANZHONG_TERRITORY_IDS.LUMBER_MILL__3,
          earnings: { woodRate: 180 },
        },
        {
          id: HANZHONG_TERRITORY_IDS.GRANARY__3,
          earnings: { grainsRate: 180 },
        },
        {
          id: HANZHONG_TERRITORY_IDS.IRON_MINE__3,
          earnings: { ironRate: 180 },
        },
      ],
      team: {
        green: 701068,
        orange: [699201, 556621],
        red: 491267,
        factionBonus: 491267,
      },
    },
    {
      tacticalPoints: 1500000,
      earnings: [
        {
          id: HANZHONG_TERRITORY_IDS.LUMBER_MILL__4,
          earnings: { woodRate: 240 },
        },
        {
          id: HANZHONG_TERRITORY_IDS.GRANARY__4,
          earnings: { grainsRate: 240 },
        },
        {
          id: HANZHONG_TERRITORY_IDS.IRON_MINE__4,
          earnings: { ironRate: 240 },
        },
      ],
      team: {
        green: 1641266,
        orange: [1472552, 1172380],
        red: 941080,
        factionBonus: 1472552,
      },
    },
    {
      tacticalPoints: 2700000,
      earnings: [
        {
          id: HANZHONG_TERRITORY_IDS.LUMBER_MILL__5,
          earnings: { woodRate: 300 },
        },
        {
          id: HANZHONG_TERRITORY_IDS.GRANARY__5,
          earnings: { grainsRate: 300 },
        },
        {
          id: HANZHONG_TERRITORY_IDS.IRON_MINE__5,
          earnings: { ironRate: 300 },
        },
      ],
      team: {
        green: 2764530,
        orange: [2327514, 1902304],
        red: 1899346,
        factionBonus: 2327514,
      },
    },
    {
      tacticalPoints: 4200000,
      earnings: [
        {
          id: HANZHONG_TERRITORY_IDS.LUMBER_MILL__6,
          earnings: { woodRate: 360 },
        },
        {
          id: HANZHONG_TERRITORY_IDS.GRANARY__6,
          earnings: { grainsRate: 360 },
        },
        {
          id: HANZHONG_TERRITORY_IDS.IRON_MINE__6,
          earnings: { ironRate: 360 },
        },
      ],
      team: {
        green: 4150360,
        orange: [4097498, 3946037],
        red: 2766346,
        factionBonus: 3445898,
      },
    },
    {
      tacticalPoints: 7300000,
      earnings: [
        {
          id: HANZHONG_TERRITORY_IDS.LUMBER_MILL__7,
          earnings: { woodRate: 420 },
        },
        {
          id: HANZHONG_TERRITORY_IDS.GRANARY__7,
          earnings: { grainsRate: 420 },
        },
        {
          id: HANZHONG_TERRITORY_IDS.IRON_MINE__7,
          earnings: { ironRate: 420 },
        },
      ],
      team: {
        green: 7432568,
        orange: [null, 6291460],
        red: 6291460,
        factionBonus: 6700996,
      },
    },
    {
      tacticalPoints: 10800000,
      earnings: [
        {
          id: HANZHONG_TERRITORY_IDS.LUMBER_MILL__8,
          earnings: { woodRate: 480 },
        },
        {
          id: HANZHONG_TERRITORY_IDS.GRANARY__8,
          earnings: { grainsRate: 480 },
        },
        {
          id: HANZHONG_TERRITORY_IDS.IRON_MINE__8,
          earnings: { ironRate: 480 },
        },
      ],
      team: {
        green: 11816536,
        orange: [10111904, 7510353],
        red: 7425451,
        factionBonus: 10025056,
      },
    },
    {
      tacticalPoints: 10800000,
      earnings: [
        {
          id: HANZHONG_TERRITORY_IDS.LUMBER_MILL__9,
          earnings: { woodRate: 540 },
        },
        {
          id: HANZHONG_TERRITORY_IDS.GRANARY__9,
          earnings: { grainsRate: 540 },
        },
        {
          id: HANZHONG_TERRITORY_IDS.IRON_MINE__9,
          earnings: { ironRate: 540 },
        },
      ],
      team: {
        green: 13796665,
        orange: [13391665, 10025056],
        red: -1,
        factionBonus: 11818474,
      },
    },
  ],
};
