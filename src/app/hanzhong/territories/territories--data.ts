import { HANZHONG_TERRITORY_IDS, HANZHONG_TERRITORY_LEVEL_IDS } from '../constants/items-ids';
import type { HanzhongTerritoriesType } from './TerritoriesType';

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
          resource: 'lumber',
          earnings: { woodRate: 60 },
        },
        {
          id: HANZHONG_TERRITORY_IDS.GRANARY__1,
          resource: 'grains',
          earnings: { grainsRate: 60 },
        },
        {
          id: HANZHONG_TERRITORY_IDS.IRON_MINE__1,
          resource: 'iron',
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
          resource: 'lumber',
          earnings: { woodRate: 120 },
        },
        {
          id: HANZHONG_TERRITORY_IDS.GRANARY__2,
          resource: 'grains',
          earnings: { grainsRate: 120 },
        },
        {
          id: HANZHONG_TERRITORY_IDS.IRON_MINE__2,
          resource: 'iron',
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
          resource: 'lumber',
          earnings: { woodRate: 180 },
        },
        {
          id: HANZHONG_TERRITORY_IDS.GRANARY__3,
          resource: 'grains',
          earnings: { grainsRate: 180 },
        },
        {
          id: HANZHONG_TERRITORY_IDS.IRON_MINE__3,
          resource: 'iron',
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
          resource: 'lumber',
          earnings: { woodRate: 240 },
        },
        {
          id: HANZHONG_TERRITORY_IDS.GRANARY__4,
          resource: 'grains',
          earnings: { grainsRate: 240 },
        },
        {
          id: HANZHONG_TERRITORY_IDS.IRON_MINE__4,
          resource: 'iron',
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
          resource: 'lumber',
          earnings: { woodRate: 300 },
        },
        {
          id: HANZHONG_TERRITORY_IDS.GRANARY__5,
          resource: 'grains',
          earnings: { grainsRate: 300 },
        },
        {
          id: HANZHONG_TERRITORY_IDS.IRON_MINE__5,
          resource: 'iron',
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
          resource: 'lumber',
          earnings: { woodRate: 360 },
        },
        {
          id: HANZHONG_TERRITORY_IDS.GRANARY__6,
          resource: 'grains',
          earnings: { grainsRate: 360 },
        },
        {
          id: HANZHONG_TERRITORY_IDS.IRON_MINE__6,
          resource: 'iron',
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
          resource: 'lumber',
          earnings: { woodRate: 420 },
        },
        {
          id: HANZHONG_TERRITORY_IDS.GRANARY__7,
          resource: 'grains',
          earnings: { grainsRate: 420 },
        },
        {
          id: HANZHONG_TERRITORY_IDS.IRON_MINE__7,
          resource: 'iron',
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
          resource: 'lumber',
          earnings: { woodRate: 480 },
        },
        {
          id: HANZHONG_TERRITORY_IDS.GRANARY__8,
          resource: 'grains',
          earnings: { grainsRate: 480 },
        },
        {
          id: HANZHONG_TERRITORY_IDS.IRON_MINE__8,
          resource: 'iron',
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
          resource: 'lumber',
          earnings: { woodRate: 540 },
        },
        {
          id: HANZHONG_TERRITORY_IDS.GRANARY__9,
          resource: 'grains',
          earnings: { grainsRate: 540 },
        },
        {
          id: HANZHONG_TERRITORY_IDS.IRON_MINE__9,
          resource: 'iron',
          earnings: { ironRate: 540 },
        },
      ],
    },
  ],
};
