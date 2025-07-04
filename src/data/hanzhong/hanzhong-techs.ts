import type { HanzhongTechType } from '../../types/hanzhong-tech-type';

export const HANZHONG_TECH_ATTACK_TRAINING_1: HanzhongTechType = {
  id: 'hanzhong--tech--attack-training-1',
  assetPath: 'hanzhong/tech/attack-training-1.png',
  label: 'Attack Training I',
  description: 'Increases ATK for Officers in the battle Formation',
  levels: [
    {
      resources: {
        lumber: 20,
        grains: 50,
        iron: 110,
      },
      bonuses: {
        atk: 440,
      },
    },
    {
      resources: {
        lumber: 70,
        grains: 200,
        iron: 400,
      },
      bonuses: {
        atk: 1100,
      },
    },
    {
      resources: {
        lumber: 120,
        grains: 360,
        iron: 720,
      },
      bonuses: {
        atk: 2000,
      },
    },
    {
      resources: {
        lumber: 240,
        grains: 720,
        iron: 1440,
      },
      bonuses: {
        atk: 3100,
      },
    },
    {
      resources: {
        lumber: 500,
        grains: 1400,
        iron: 2900,
      },
      bonuses: {
        atk: 4400,
      },
    },
    {
      resources: {
        lumber: 1000,
        grains: 2900,
        iron: 5800,
      },
      bonuses: {
        atk: 6000,
      },
    },
    {
      resources: {
        lumber: 1400,
        grains: 4300,
        iron: 8700,
      },
      bonuses: {
        atk: 7900,
      },
    },
    {
      resources: {
        lumber: 2200,
        grains: 6500,
        iron: 13000,
      },
      bonuses: {
        atk: 10300,
      },
    },
    {
      resources: {
        lumber: 2900,
        grains: 8700,
        iron: 17300,
      },
      bonuses: {
        atk: 13400,
      },
    },
    {
      resources: {
        lumber: 3600,
        grains: 10900,
        iron: 21900,
      },
      bonuses: {
        atk: 17400,
      },
    },
  ],
};

export const HANZHONG_TECH_DEFENSE_TRAINING_1: HanzhongTechType = {
  id: 'hanzhong--tech--defense-training-1',
  assetPath: 'hanzhong/tech/defense-training-1.png',
  label: 'Defense Training I',
  description: 'Increases DEF for Officers in the battle Formation',
  levels: [
    {
      resources: {
        lumber: 110,
        grains: 20,
        iron: 50,
      },
      bonuses: {
        def: 440,
      },
    },
    {
      resources: {
        lumber: 400,
        grains: 70,
        iron: 200,
      },
      bonuses: {
        def: 1100,
      },
    },
    {
      resources: {
        lumber: 720,
        grains: 120,
        iron: 360,
      },
      bonuses: {
        def: 2000,
      },
    },
  ],
};

export const HANZHONG_TECH_TENACITY_TRAINING_1: HanzhongTechType = {
  id: 'hanzhong--tech--tenacity-training-1',
  assetPath: 'hanzhong/tech/tenacity-training-1.png',
  label: 'Tenacity Training I',
  description: 'Increases HP for Officers in the battle Formation',
  levels: [],
};

export const HANZHONG_TECH_FREE_PATHS: HanzhongTechType = {
  id: 'hanzhong--tech--free-paths',
  assetPath: 'hanzhong/tech/free-paths.png',
  label: 'Free Paths',
  description: "Unlocks the function of borrowing other's territories for attack",
  levels: [],
};

export const HANZHONG_WAR_TIER_1_TECHS: HanzhongTechType[] = [
  HANZHONG_TECH_ATTACK_TRAINING_1,
  HANZHONG_TECH_DEFENSE_TRAINING_1,
  HANZHONG_TECH_TENACITY_TRAINING_1,
  HANZHONG_TECH_FREE_PATHS,
];
