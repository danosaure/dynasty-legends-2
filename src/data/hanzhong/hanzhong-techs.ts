import type { HanzhongTechType } from '../../types/hanzhong-tech-type';
import { mapTableToResourcesAndBonuses } from '../utils';

export const HANZHONG_TECH_ATTACK_TRAINING_1: HanzhongTechType = {
  id: 'hanzhong--tech--attack-training-1',
  assetPath: 'hanzhong/tech/attack-training-1.png',
  label: 'Attack Training I',
  description: 'Increases ATK for Officers in the battle Formation',
  levels: mapTableToResourcesAndBonuses(
    ['atk'],
    [
      [20, 50, 110, 440],
      [70, 200, 400, 1100],
      [120, 360, 720, 2000],
      [240, 720, 1440, 3100],
      [500, 1400, 2900, 4400],
      [1000, 2900, 5800, 6000],
      [1400, 4300, 8700, 7900],
      [2200, 6500, 13000, 10300],
      [2900, 8700, 17300, 13400],
      [3600, 10900, 21900, 17400],
    ]
  ),
};

export const HANZHONG_TECH_DEFENSE_TRAINING_1: HanzhongTechType = {
  id: 'hanzhong--tech--defense-training-1',
  assetPath: 'hanzhong/tech/defense-training-1.png',
  label: 'Defense Training I',
  description: 'Increases DEF for Officers in the battle Formation',
  levels: mapTableToResourcesAndBonuses(
    ['def'],
    [
      [110, 20, 50, 440],
      [400, 70, 200, 1100],
      [720, 120, 360, 2000],
      [1440, 240, 720, 3100],
      [2900, 500, 1400, 4400],
      [5800, 1000, 2900, 6000],
      [8700, 1400, 4300, 7900],
      [13000, 2200, 6500, 10300],
      [17300, 2900, 8700, 13400],
      [21900, 3600, 10900, 17400],
    ]
  ),
};

export const HANZHONG_TECH_TENACITY_TRAINING_1: HanzhongTechType = {
  id: 'hanzhong--tech--tenacity-training-1',
  assetPath: 'hanzhong/tech/tenacity-training-1.png',
  label: 'Tenacity Training I',
  description: 'Increases HP for Officers in the battle Formation',
  levels: mapTableToResourcesAndBonuses(
    ['hp'],
    [
      [50, 110, 20, 33000],
      [200, 400, 70, 83000],
      [360, 720, 120, 150000],
      [720, 1440, 240, 230000],
      [1400, 2900, 500, 330000],
      [2900, 5800, 1000, 450000],
      [4300, 8700, 1400, 590000],
      [6500, 13000, 2200, 770000],
      [8700, 17300, 2900, 1000000],
      [10900, 21900, 3600, 1300000],
    ]
  ),
};

export const HANZHONG_TECH_FREE_PATHS: HanzhongTechType = {
  id: 'hanzhong--tech--free-paths',
  assetPath: 'hanzhong/tech/free-paths.png',
  label: 'Free Paths',
  description: "Unlocks the function of borrowing other's territories for attack",
  levels: [
    {
      resources: {
        lumber: 100,
        grains: 100,
        iron: 100,
      },
      bonuses: {
        description:
          'Activating the Tech - Free Paths allows you to use territories occupied by other players and guild to attack their adjacent territories.',
      },
    },
  ],
};

export const HANZHONG_TECH_LUMBER_MILL: HanzhongTechType = {
  id: 'hanzhong--tech--lumber-mill',
  assetPath: 'hanzhong/tech/lumber-mill.png',
  label: 'Lumber Mill',
  description: 'Wood Yield Rate',
  levels: mapTableToResourcesAndBonuses(
    ['woodRate'],
    [
      [520, 1040, 1040, 180],
      [810, 1610, 1610, 420],
      [1150, 2300, 2300, 720],
      [1560, 3110, 3110, 1080],
      [2020, 4030, 4030, 1500],
    ]
  ),
};

export const HANZHONG_TECH_GRANARY: HanzhongTechType = {
  id: 'hanzhong--tech--granary',
  assetPath: 'hanzhong/tech/granary.png',
  label: 'Granary',
  description: 'Grains Yield Rate',
  levels: mapTableToResourcesAndBonuses(
    ['grainsRate'],
    [
      [1040, 520, 1040, 180],
      [1610, 1610, 810, 420],
      [2300, 1150, 2300, 720],
      [3110, 1560, 3110, 1080],
      [4030, 2020, 4030, 1500],
    ]
  ),
};

export const HANZHONG_TECH_IRON_FOUNDRY: HanzhongTechType = {
  id: 'hanzhong--tech--iron-foundry',
  assetPath: 'hanzhong/tech/iron-foundry.png',
  label: 'Iron Foundry',
  description: 'Iron Yield Rate',
  levels: mapTableToResourcesAndBonuses(
    ['grainsRate'],
    [
      [1040, 1040, 520, 180],
      [1610, 1610, 810, 420],
      [2300, 2300, 1150, 720],
      [3110, 3110, 1560, 1080],
      [4030, 4030, 2020, 1500],
    ]
  ),
};

export const HANZHONG_TECH_MIGHTY_GENERALS: HanzhongTechType = {
  id: 'hanzhong--tech--mighty-generals',
  assetPath: 'hanzhong/tech/mighty-generals.png',
  label: 'Mighty Generals',
  description: 'Grants additional bonuses for Mythic and Unique Officers',
  levels: [
    {
      resources: {
        lumber: 500,
        grains: 500,
        iron: 500,
      },
      bonuses: {
        description:
          'Each evolution level increase of Mythich or above quality Officers deployed in a Formation boosts the damage dealt in battle by all Officers in this Formation by 0.5%.',
      },
    },
  ],
};

export const HANZHONG_WAR_TIER_1_TECHS: HanzhongTechType[] = [
  HANZHONG_TECH_ATTACK_TRAINING_1,
  HANZHONG_TECH_DEFENSE_TRAINING_1,
  HANZHONG_TECH_TENACITY_TRAINING_1,
  HANZHONG_TECH_FREE_PATHS,
];

export const HANZHONG_WAR_TIER_2_TECHS: HanzhongTechType[] = [
  HANZHONG_TECH_LUMBER_MILL,
  HANZHONG_TECH_GRANARY,
  HANZHONG_TECH_IRON_FOUNDRY,
  HANZHONG_TECH_MIGHTY_GENERALS,
];
