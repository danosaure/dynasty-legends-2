import type { HanzhongTerritoriesType } from '../types';
import { HANZHONG_TERRITORY_IDS, HANZHONG_TERRITORY_LEVEL_IDS } from '../constants/items-ids';

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
      id: HANZHONG_TERRITORY_LEVEL_IDS.LEVEL__1,
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
      /*
      features: [
        "Increases the garrison's damage taken by 20%."
      ]
      */
    },
    {
      id: HANZHONG_TERRITORY_LEVEL_IDS.LEVEL__2,
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
      /*
      features: [
        "Increases the garrison's damage taken by 20%."
      ]
      */
    },
    {
      id: HANZHONG_TERRITORY_LEVEL_IDS.LEVEL__3,
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
    },
    {
      id: HANZHONG_TERRITORY_LEVEL_IDS.LEVEL__4,
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
    },
    {
      id: HANZHONG_TERRITORY_LEVEL_IDS.LEVEL__5,
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
    },
    {
      id: HANZHONG_TERRITORY_LEVEL_IDS.LEVEL__6,
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
    },
    {
      id: HANZHONG_TERRITORY_LEVEL_IDS.LEVEL__7,
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
    },
    {
      id: HANZHONG_TERRITORY_LEVEL_IDS.LEVEL__8,
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
    },
    {
      id: HANZHONG_TERRITORY_LEVEL_IDS.LEVEL__9,
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
    },
  ],
};
