import { HanzhongType } from '../types/hanzhong-type';

export const HANZHONG_DATA: HanzhongType = {
  cities: [
    {
      name: 'Yangping Pass',
      position: '(61,106)',
      tacticalPoints: 2000000,
      description: 'Increases Wei Officers damage to the garrison by 20%',
      earnings: 180,
    },
    {
      name: 'North Summit',
      position: '(52,74)',
      tacticalPoints: 2000000,
      description: 'Increases Shu Officers damage to the garrison by 20%',
      earnings: 180,
    },
    {
      name: 'Maming Pavilion',
      position: '(90,63)',
      tacticalPoints: 2000000,
      description: 'Increases Wu Officers damage to the garrison by 20%',
      earnings: 180,
    },
    {
      name: 'Mianyang County',
      position: '(99,96)',
      tacticalPoints: 2000000,
      description: 'Increases Other Officers damage to the garrison by 20%',
      earnings: 180,
    },
    {
      name: 'Mount Dingjun',
      position: '(63,81)',
      tacticalPoints: 5000000,
      description: "Reduces the garrison's damage taken by 20%",
      earnings: 360,
    },
    {
      name: 'Hanshui Trail',
      position: '(87,91)',
      tacticalPoints: 5000000,
      description: "Reduces the garrison's damage taken by 20%",
      earnings: 360,
    },
    {
      name: 'Hanzhong City',
      position: '(75,85)',
      tacticalPoints: 140000000,
      description: "Reduces the garrison's damage taken by 20%",
      earnings: 720,
    },
  ],
  territories: {
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
  },
  warTiers: [
    {
      icon: 'war-tier-1',
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
      techs: [
        {
          label: 'Attack Training I',
          description: 'Increases ATK for Officers in the battle Formation',
          levels: [],
        },
        {
          label: 'Defense Training I',
          description: 'Increases DEF for Officers in the battle Formation',
          levels: [],
        },
        {
          label: 'Tenacity Training I',
          description: 'Increases HP for Officers in the battle Formation',
          levels: [],
        },
        {
          label: 'Free Paths',
          description: "Unlocks the function of borrowing other's territories for attack",
          levels: [],
        },
      ],
    },
    {
      icon: 'war-tier-2',
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
        {
          label: 'Lumber Mill',
          description: 'Wood Yield Rate',
          levels: [],
        },
        {
          label: 'Granary',
          description: 'Grains Yield Rate',
          levels: [],
        },
        {
          label: 'Iron Foundry',
          description: 'Iron Yield Rate',
          levels: [],
        },
        {
          label: 'Mighty Generals',
          description: 'Grants additional bonuses for Mythic and Unique Officers',
          levels: [],
        },
      ],
    },
    {
      icon: 'war-tier-3',
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
      techs: [
        {
          label: 'Diligent Warrior I',
          description: 'Increases ATK, DEF, and HP for Officers in the battle Formation',
          levels: [],
        },
        {
          label: 'Territory Expansion',
          description: 'Territory Cap',
          levels: [],
        },
      ],
    },
    {
      icon: 'war-tier-4',
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
        {
          label: 'Attack Training II',
          description: 'Greatly increases ATK for Officers in the battle Formation',
          levels: [],
        },
        {
          label: 'Defense Training II',
          description: 'Greatly increases DEF for Officers in the battle Formation',
          levels: [],
        },
        {
          label: 'Tenacity Training II',
          description: 'Greatly increases HP for Officers in the battle Formation',
          levels: [],
        },
      ],
    },
    {
      icon: 'war-tier-5',
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
        {
          label: 'Overall Development',
          description: 'Increases the yield rate of all resources',
          levels: [],
        },
        {
          label: 'United Strength',
          description: 'Activates additional bonuses when deploying Officers of the same faction in the battle Formation',
          levels: [],
        },
        {
          label: 'Formation Expansion',
          description: 'Unlock new Formations',
          levels: [],
        },
      ],
    },
    {
      icon: 'war-tier-6',
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
        {
          label: 'Special Training - Vanguard Camp',
          description: 'Increases ATK, DEF, and HP for Officers of Vanguard Camp',
          levels: [],
        },
        {
          label: 'Special Training - Valiant Cavalry',
          description: 'Increases ATK, DEF, and HP for Officers of Valiant Cavalry',
          levels: [],
        },
        {
          label: 'Special Training - Royal Guards',
          description: 'Increases ATK, DEF, and HP for Officers of Royal Guards',
          levels: [],
        },
        {
          label: 'Rehabilitation',
          description: 'March Order Cap',
          levels: [],
        },
      ],
    },
    {
      icon: 'war-tier-7',
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
      techs: [
        {
          label: 'Diligent Warrior III',
          description: 'Greatly increases ATK, DEF, and HP for Officers in the battle Formation',
          levels: [],
        },
      ],
    },
  ],
};
