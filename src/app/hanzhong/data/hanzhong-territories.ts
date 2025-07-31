import { sanitizeId } from '../../../utils';
import type { HanzhongTerritoriesType, HanzhongTerritoryLevelType } from '../types';

export const TERRITORY_TYPES = {
  WOODLAND: 'Woodland',
  FARMLAND: 'Farmland',
  IRON_MINE: 'Iron Mine',
} as const;

export type HanzhongTerritoryLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

type RawLevelData = [number, number, number];

type RawData = RawLevelData[];

const __RAW: RawData = [
  [1, 300000, 60],
  [2, 500000, 120],
  [3, 700000, 180],
  [4, 1500000, 240],
  [5, 2700000, 300],
  [6, 4200000, 360],
  [7, 7300000, 420],
  [8, 10800000, 480],
  [9, 10800000, 540],
];

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
  levels: __RAW.map<HanzhongTerritoryLevelType>((levelData) => {
    const [level, tacticalPoints, rate] = levelData;
    const id = sanitizeId(`territory--level-${level}`);

    return {
      id,
      tacticalPoints,
      earnings: [
        {
          id: sanitizeId(`${id}--${TERRITORY_TYPES.WOODLAND}`),
          earnings: { woodRate: rate },
        },
        {
          id: sanitizeId(`${id}--${TERRITORY_TYPES.FARMLAND}`),
          earnings: { grainsRate: rate },
        },
        {
          id: sanitizeId(`${id}--${TERRITORY_TYPES.IRON_MINE}`),
          earnings: { ironRate: rate },
        },
      ],
    };
  }),
};

export const getTerritoryByLevel = (level: HanzhongTerritoryLevel): HanzhongTerritoryLevelType =>
  HANZHONG_TERRITORIES.levels[level - 1];
