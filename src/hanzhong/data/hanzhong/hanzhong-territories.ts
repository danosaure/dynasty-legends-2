import type { HanzhongTerritoryType } from '../../types/hanzhong/hanzhong-territory-type';

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
      earnings: 60,
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
      earnings: 120,
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
      earnings: 180,
      team: {
        green: 701068,
        orange: [699201, 556621],
        red: 491267,
        factionBonus: 491267,
      },
    },
    {
      tacticalPoints: 1500000,
      earnings: 240,
      team: {
        green: 1641266,
        orange: [1472552, 1172380],
        red: 941080,
        factionBonus: 1472552,
      },
    },
    {
      tacticalPoints: 2700000,
      earnings: 300,
      team: {
        green: 2764530,
        orange: [2327514, 1902304],
        red: 1899346,
        factionBonus: 2327514,
      },
    },
    {
      tacticalPoints: 4200000,
      earnings: 360,
      team: {
        green: 4150360,
        orange: [4097498, 3946037],
        red: 2766346,
        factionBonus: 3445898,
      },
    },
    {
      tacticalPoints: 7300000,
      earnings: 420,
      team: {
        green: 7432568,
        orange: [null, 6291460],
        red: 6291460,
        factionBonus: 6700996,
      },
    },
    {
      tacticalPoints: 10800000,
      earnings: 480,
      team: {
        green: 11816536,
        orange: [10111904, 7510353],
        red: 7425451,
        factionBonus: 10025056,
      },
    },
    {
      tacticalPoints: 10800000,
      earnings: 540,
      team: {
        green: 13796665,
        orange: [13391665, 10025056],
        red: -1,
        factionBonus: 11818474,
      },
    },
  ],
};
