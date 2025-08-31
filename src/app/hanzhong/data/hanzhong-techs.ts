import { mapTableToResourcesAndBonuses } from './utils';
import type { HanzhongTechType } from '../types';
import { HANZHONG_TECH_IDS } from '../constants/items-ids';

const assetPath = (f: string): string => `hanzhong/tech/${f}.png`;

//
//  ----- War Tier 1 -----
//

export const HANZHONG_TECH_ATTACK_TRAINING_1: HanzhongTechType = {
  id: HANZHONG_TECH_IDS.ATTACK_TRAINING_1,
  assetPath: assetPath('attack-training-1'),
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
  id: HANZHONG_TECH_IDS.DEFENSE_TRAINING_1,
  assetPath: assetPath('defense-training-1'),
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
  id: HANZHONG_TECH_IDS.TENACITY_TRAINING_1,
  assetPath: assetPath('tenacity-training-1'),
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
  id: HANZHONG_TECH_IDS.FREE_PATHS,
  assetPath: assetPath('free-paths'),
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

//
//  ----- War Tier 2 -----
//

export const HANZHONG_TECH_LUMBER_MILL: HanzhongTechType = {
  id: HANZHONG_TECH_IDS.LUMBER_MILL,
  assetPath: assetPath('lumber-mill'),
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
  requirements: [
    {
      id: `tech--free-paths--level--1`,
      section: 'techs',
      type: 'level',
      techName: 'Free Paths',
      level: 1,
    },
  ],
};

export const HANZHONG_TECH_GRANARY: HanzhongTechType = {
  id: HANZHONG_TECH_IDS.GRANARY,
  assetPath: assetPath('granary'),
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
  requirements: [
    {
      id: `tech--free-paths--level--1`,
      section: 'techs',
      type: 'level',
      techName: 'Free Paths',
      level: 1,
    },
  ],
};

export const HANZHONG_TECH_IRON_FOUNDRY: HanzhongTechType = {
  id: HANZHONG_TECH_IDS.IRON_FOUNDRY,
  assetPath: assetPath('iron-foundry'),
  label: 'Iron Foundry',
  description: 'Iron Yield Rate',
  levels: mapTableToResourcesAndBonuses(
    ['ironRate'],
    [
      [1040, 1040, 520, 180],
      [1610, 1610, 810, 420],
      [2300, 2300, 1150, 720],
      [3110, 3110, 1560, 1080],
      [4030, 4030, 2020, 1500],
    ]
  ),
  requirements: [
    {
      id: `tech--free-paths--level--1`,
      section: 'techs',
      type: 'level',
      techName: 'Free Paths',
      level: 1,
    },
  ],
};

export const HANZHONG_TECH_MIGHTY_GENERALS: HanzhongTechType = {
  id: HANZHONG_TECH_IDS.MIGHTY_GENERALS,
  assetPath: assetPath('mighty-generals'),
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
          'Each evolution level increase of Mythic or above quality Officers deployed in a Formation boosts the damage dealt in battle by all Officers in this Formation by 0.5%.',
      },
    },
  ],
};

//
//  ----- War Tier 3 -----
//

export const HANZHONG_TECH_DILIGENT_WARRIOR_1: HanzhongTechType = {
  id: HANZHONG_TECH_IDS.DILIGENT_WARRIOR_1,
  assetPath: assetPath('diligent-warrior-1'),
  label: 'Diligent Warrior I',
  description: 'Increases ATK, DEF, and HP for Officers in the battle Formation',
  levels: mapTableToResourcesAndBonuses(
    ['atk', 'def', 'hp'],
    [
      [1340, 1340, 1340, 440, 220, 33330],
      [2670, 2670, 2670, 1110, 550, 83330],
      [4010, 4010, 4010, 2300, 1200, 173300],
      [5300, 5300, 5300, 4200, 2100, 313300],
      [6700, 6700, 6700, 6900, 3400, 513300],
      [10700, 10700, 10700, 10500, 5200, 783300],
      [16000, 16000, 16000, 15400, 7600, 1150000],
      [21400, 21400, 21400, 22000, 10900, 1643300],
      [29400, 29400, 29400, 30900, 15300, 2310000],
      [36100, 36100, 36100, 42600, 21200, 3190000],
    ]
  ),
};
export const HANZHONG_TECH_TERRITORY_EXPANSION: HanzhongTechType = {
  id: HANZHONG_TECH_IDS.TERRITORY_EXPANSION,
  assetPath: assetPath('territory-expansion'),
  label: 'Territory Expansion',
  description: 'Territory Cap',
  levels: mapTableToResourcesAndBonuses(
    ['territoryCap'],
    [
      [670, 670, 670, 1],
      [2000, 2000, 2000, 2],
      [3300, 3300, 3300, 3],
      [4700, 4700, 4700, 4],
      [6000, 6000, 6000, 5],
      [7400, 7400, 7400, 7],
      [8700, 8700, 8700, 9],
      [10000, 10000, 10000, 11],
      [11400, 11400, 11400, 13],
      [12700, 12700, 12700, 15],
    ]
  ),
};

//
//  ----- War Tier 4 -----
//

export const HANZHONG_TECH_ATTACK_TRAINING_2: HanzhongTechType = {
  id: HANZHONG_TECH_IDS.ATTACK_TRAINING_2,
  assetPath: assetPath('attack-training-2'),
  label: 'Attack Training II',
  description: 'Greatly increases ATK for Officers in the battle Formation',
  levels: mapTableToResourcesAndBonuses(
    ['atk'],
    [
      [220, 220, 1010, 890],
      [460, 460, 2150, 3100],
      [700, 700, 3280, 7100],
      [950, 950, 4420, 13300],
      [1500, 1500, 6900, 22200],
      [2300, 2300, 10700, 34200],
      [3400, 3400, 15700, 47800],
      [4300, 4300, 20200, 63400],
      [6000, 6000, 27800, 81600],
      [7300, 7300, 34100, 103200],
    ]
  ),
  requirements: [
    {
      id: `tech--attack-training-I--level--6`,
      section: 'techs',
      type: 'level',
      techName: 'Attack Training I',
      level: 6,
    },
  ],
};

export const HANZHONG_TECH_DEFENSE_TRAINING_2: HanzhongTechType = {
  id: HANZHONG_TECH_IDS.DEFENSE_TRAINING_2,
  assetPath: assetPath('defense-training-2'),
  label: 'Defense Training II',
  description: 'Greatly increases DEF for Officers in the battle Formation',
  levels: mapTableToResourcesAndBonuses(
    ['def'],
    [
      [1010, 220, 220, 890],
      [2150, 460, 460, 3100],
      [3280, 700, 700, 7100],
      [4420, 950, 950, 13300],
      [6900, 1500, 1500, 22200],
      [10700, 2300, 2300, 34200],
      [15700, 3400, 3400, 47800],
      [20200, 4300, 4300, 63400],
      [27800, 6000, 6000, 81600],
      [34100, 7300, 7300, 103200],
    ]
  ),
  requirements: [
    {
      id: `tech--defense-training-I--level--6`,
      section: 'techs',
      type: 'level',
      techName: 'Defense Training I',
      level: 6,
    },
  ],
};

export const HANZHONG_TECH_TENACITY_TRAINING_2: HanzhongTechType = {
  id: HANZHONG_TECH_IDS.TENACITY_TRAINING_2,
  assetPath: assetPath('tenacity-training-2'),
  label: 'Tenacity Training II',
  description: 'Greatly increases HP for Officers in the battle Formation',
  levels: mapTableToResourcesAndBonuses(
    ['hp'],
    [
      [220, 1010, 220, 66000],
      [460, 2150, 460, 233000],
      [700, 3280, 700, 530000],
      [950, 4420, 950, 1000000],
      [1500, 6900, 1500, 1670000],
      [2300, 10700, 2300, 2570000],
      [3400, 15700, 3400, 3590000],
      [4300, 20200, 4300, 4760000],
      [6000, 27800, 6000, 6130000],
      [7300, 34100, 7300, 7750000],
    ]
  ),
  requirements: [
    {
      id: `tech--tenacity-training-I--level--6`,
      section: 'techs',
      type: 'level',
      techName: 'Tenacity Training I',
      level: 6,
    },
  ],
};

//
//  ----- War Tier 5 -----
//

export const HANZHONG_TECH_OVERALL_DEVELOPMENT: HanzhongTechType = {
  id: HANZHONG_TECH_IDS.OVERALL_DEVELOPMENT,
  assetPath: assetPath('overall-development'),
  label: 'Overall Development',
  description: 'Increases the yield rate of all resources',
  levels: mapTableToResourcesAndBonuses(
    ['woodRate', 'grainsRate', 'ironRate'],
    [
      [2160, 2160, 2160, 240, 240, 240],
      [2700, 2700, 2700, 540, 540, 540],
      [4536, 4536, 4536, 960, 960, 960],
      [6048, 6048, 6048, 1440, 1440, 1440],
      [6912, 6912, 6912, 1980, 1980, 1980],
    ]
  ),
};

export const HANZHONG_TECH_UNITED_STRENGTH: HanzhongTechType = {
  id: HANZHONG_TECH_IDS.UNITED_STRENGTH,
  assetPath: assetPath('united-strength'),
  label: 'United Strength',
  description: 'Activates additional bonuses when deploying Officers of the same faction in the battle Formation',
  levels: [
    {
      resources: {
        lumber: 2500,
        grains: 2500,
        iron: 2500,
      },
      bonuses: {
        description:
          'Deploying 6 Officers of the same faction in a Formation additionally increases the damage dealt in battle by 20%.',
      },
    },
  ],
};

export const HANZHONG_TECH_FORMATION_EXPANSION: HanzhongTechType = {
  id: HANZHONG_TECH_IDS.FORMATION_EXPANSION,
  assetPath: assetPath('formation-expansion'),
  label: 'Formation Expansion',
  description: 'Unlock new Formations',
  levels: [
    {
      resources: {
        lumber: 5000,
        grains: 5000,
        iron: 5000,
      },
      bonuses: {
        description: 'Unlock new Formation - Royal Guards.',
      },
    },
  ],
  requirements: [
    {
      id: `tech--attack-training-II--level--6`,
      section: 'techs',
      type: 'level',
      techName: 'Attack Training II',
      level: 6,
    },
  ],
};

//
//  ----- War Tier 6 -----
//

export const HANZHONG_TECH_SPECIAL_TRAINING_VANGUARD_CAMP: HanzhongTechType = {
  id: HANZHONG_TECH_IDS.SPECIAL_TRAINING__VANGUARD_CAMP,
  assetPath: assetPath('special-training--vanguard-camp'),
  label: 'Special Training - Vanguard Camp',
  description: 'Increases ATK, DEF, and HP for Officers of Vanguard Camp',
  levels: mapTableToResourcesAndBonuses(
    ['atk', 'def', 'hp'],
    [
      [1000, 1000, 1000, 800, 400, 60000],
      [2200, 2200, 2200, 2800, 1400, 210000],
      [4000, 4000, 4000, 6400, 3200, 480000],
      [6000, 6000, 6000, 12000, 6000, 900000],
      [8000, 8000, 8000, 20000, 10000, 1500000],
      [12000, 12000, 12000, 30800, 15400, 2310000],
      [16000, 16000, 16000, 42900, 21400, 3220000],
      [20000, 20000, 20000, 56600, 28200, 4250000],
      [25000, 25000, 25000, 72300, 36100, 5430000],
      [30000, 30000, 30000, 90400, 45200, 6790000],
    ]
  ),
  requirements: [
    {
      id: `tech--defense-training-II--level--6`,
      section: 'techs',
      type: 'level',
      techName: 'Defense Training II',
      level: 6,
    },
  ],
};

export const HANZHONG_TECH_SPECIAL_TRAINING_VALIANT_CAVALRY: HanzhongTechType = {
  id: HANZHONG_TECH_IDS.SPECIAL_TRAINING__VALIANT_CAVALRY,
  assetPath: assetPath('special-training--valiant-cavalry'),
  label: 'Special Training - Valiant Cavalry',
  description: 'Increases ATK, DEF, and HP for Officers of Valiant Cavalry',
  levels: mapTableToResourcesAndBonuses(
    ['atk', 'def', 'hp'],
    [
      [1000, 1000, 1000, 800, 400, 60000],
      [2200, 2200, 2200, 2800, 1400, 210000],
      [4000, 4000, 4000, 6400, 3200, 480000],
      [6000, 6000, 6000, 12000, 6000, 900000],
      [8000, 8000, 8000, 20000, 10000, 1500000],
      [12000, 12000, 12000, 30800, 15400, 2310000],
      [16000, 16000, 16000, 42900, 21400, 3220000],
      [20000, 20000, 20000, 56600, 28200, 4250000],
      [25000, 25000, 25000, 72300, 36100, 5430000],
      [30000, 30000, 30000, 90400, 45200, 6790000],
    ]
  ),
  requirements: [
    {
      id: `tech--tenacity-training-II--level--6`,
      section: 'techs',
      type: 'level',
      techName: 'Tenacity Training II',
      level: 6,
    },
  ],
};

export const HANZHONG_TECH_SPECIAL_TRAINING_ROYAL_GUARDS: HanzhongTechType = {
  id: HANZHONG_TECH_IDS.SPECIAL_TRAINING__ROYAL_GUARDS,
  assetPath: assetPath('special-training--royal-guards'),
  label: 'Special Training - Royal Guards',
  description: 'Increases ATK, DEF, and HP for Officers of Royal Guards',
  levels: mapTableToResourcesAndBonuses(
    ['atk', 'def', 'hp'],
    [
      [1000, 1000, 1000, 800, 400, 60000],
      [2200, 2200, 2200, 2800, 1400, 210000],
      [4000, 4000, 4000, 6400, 3200, 480000],
      [6000, 6000, 6000, 12000, 6000, 900000],
      [8000, 8000, 8000, 20000, 10000, 1500000],
      [12000, 12000, 12000, 30800, 15400, 2310000],
      [16000, 16000, 16000, 42900, 21400, 3220000],
      [20000, 20000, 20000, 56600, 28200, 4250000],
      [25000, 25000, 25000, 72300, 36100, 5430000],
      [30000, 30000, 30000, 90400, 45200, 6790000],
    ]
  ),
  requirements: [
    {
      id: `tech--formation-expansion--level--6`,
      section: 'techs',
      type: 'level',
      techName: 'Formation Expansion',
      level: 1,
    },
  ],
};

export const HANZHONG_TECH_REHABILITATION: HanzhongTechType = {
  id: HANZHONG_TECH_IDS.REHABILITATION,
  assetPath: assetPath('rehabilitation'),
  label: 'Rehabilitation',
  description: 'March Order Cap',
  levels: [
    {
      resources: {
        lumber: 4000,
        grains: 4000,
        iron: 4000,
      },
      bonuses: {
        description: "Increases all Formation's March Orders cap by 20",
      },
    },
  ],
};

//
//  ----- War Tier 7 -----
//

export const HANZHONG_TECH_DILIGENT_WARRIOR_3: HanzhongTechType = {
  id: HANZHONG_TECH_IDS.DILIGENT_WARRIOR_3,
  assetPath: assetPath('diligent-warrior-3'),
  label: 'Diligent Warrior III',
  description: 'Greatly increases ATK, DEF, and HP for Officers in the battle Formation',
  levels: mapTableToResourcesAndBonuses(
    ['atk', 'def', 'hp'],
    [
      [1800, 1800, 1800, 640, 320, 48000],
      [3610, 3610, 3610, 2240, 1120, 168000],
      [5410, 5410, 5410, 5100, 2600, 384000],
      [7200, 7200, 7200, 9600, 4800, 720000],
      [9000, 9000, 9000, 16000, 8000, 1200000],
      [14400, 14400, 14400, 24600, 12300, 1848000],
      [21700, 21700, 21700, 35000, 17500, 2628000],
      [28900, 28900, 28900, 47700, 23900, 3581300],
      [39700, 39700, 39700, 63600, 31900, 4774600],
      [48700, 48700, 48700, 83400, 41800, 6261300],
    ]
  ),
  requirements: [
    {
      id: `tech--formation-expansion--level--6`,
      section: 'techs',
      type: 'level',
      techName: 'Formation Expansion',
      level: 1,
    },
  ],
};

//
//  ----- War Tiers Techs groupings -----
//

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

export const HANZHONG_WAR_TIER_3_TECHS: HanzhongTechType[] = [HANZHONG_TECH_DILIGENT_WARRIOR_1, HANZHONG_TECH_TERRITORY_EXPANSION];

export const HANZHONG_WAR_TIER_4_TECHS: HanzhongTechType[] = [
  HANZHONG_TECH_ATTACK_TRAINING_2,
  HANZHONG_TECH_DEFENSE_TRAINING_2,
  HANZHONG_TECH_TENACITY_TRAINING_2,
];

export const HANZHONG_WAR_TIER_5_TECHS: HanzhongTechType[] = [
  HANZHONG_TECH_OVERALL_DEVELOPMENT,
  HANZHONG_TECH_UNITED_STRENGTH,
  HANZHONG_TECH_FORMATION_EXPANSION,
];

export const HANZHONG_WAR_TIER_6_TECHS: HanzhongTechType[] = [
  HANZHONG_TECH_SPECIAL_TRAINING_VANGUARD_CAMP,
  HANZHONG_TECH_SPECIAL_TRAINING_VALIANT_CAVALRY,
  HANZHONG_TECH_SPECIAL_TRAINING_ROYAL_GUARDS,
  HANZHONG_TECH_REHABILITATION,
];

export const HANZHONG_WAR_TIER_7_TECHS: HanzhongTechType[] = [HANZHONG_TECH_DILIGENT_WARRIOR_3];

export const HANZHONG__WAR_TIERS__TECHS__BY_LEVEL: Record<number, HanzhongTechType[]> = {
  1: HANZHONG_WAR_TIER_1_TECHS,
  2: HANZHONG_WAR_TIER_2_TECHS,
  3: HANZHONG_WAR_TIER_3_TECHS,
  4: HANZHONG_WAR_TIER_4_TECHS,
  5: HANZHONG_WAR_TIER_5_TECHS,
  6: HANZHONG_WAR_TIER_6_TECHS,
  7: HANZHONG_WAR_TIER_7_TECHS,
};

const __ALL_TECHS: HanzhongTechType[] = [
  HANZHONG_TECH_ATTACK_TRAINING_1,
  HANZHONG_TECH_DEFENSE_TRAINING_1,
  HANZHONG_TECH_TENACITY_TRAINING_1,
  HANZHONG_TECH_FREE_PATHS,
  HANZHONG_TECH_LUMBER_MILL,
  HANZHONG_TECH_GRANARY,
  HANZHONG_TECH_IRON_FOUNDRY,
  HANZHONG_TECH_MIGHTY_GENERALS,
  HANZHONG_TECH_DILIGENT_WARRIOR_1,
  HANZHONG_TECH_TERRITORY_EXPANSION,
  HANZHONG_TECH_ATTACK_TRAINING_2,
  HANZHONG_TECH_DEFENSE_TRAINING_2,
  HANZHONG_TECH_TENACITY_TRAINING_2,
  HANZHONG_TECH_OVERALL_DEVELOPMENT,
  HANZHONG_TECH_UNITED_STRENGTH,
  HANZHONG_TECH_FORMATION_EXPANSION,
  HANZHONG_TECH_SPECIAL_TRAINING_VANGUARD_CAMP,
  HANZHONG_TECH_SPECIAL_TRAINING_VALIANT_CAVALRY,
  HANZHONG_TECH_SPECIAL_TRAINING_ROYAL_GUARDS,
  HANZHONG_TECH_REHABILITATION,
  HANZHONG_TECH_DILIGENT_WARRIOR_3,
];

const __CACHE: Record<string, HanzhongTechType> = __ALL_TECHS.reduce((cache, tech) => ({ ...cache, [tech.id]: tech }), {});

export const getTechById = (id: string): HanzhongTechType | null => __CACHE[id] ?? null;

const __CACHE_BY_NAME: Record<string, HanzhongTechType> = __ALL_TECHS.reduce(
  (cache, tech) => ({ ...cache, [tech.label]: tech }),
  {}
);

export const getTechByName = (name: string): HanzhongTechType | null => __CACHE_BY_NAME[name] ?? null;
