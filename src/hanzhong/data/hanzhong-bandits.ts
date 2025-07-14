import type { PotentiallyUnknownNumberType } from '../../types';
import type { HanzhongBanditAttackType, HanzhongBanditLevelsType } from '../types';

type LevelDataRowType = [
  number /** Level */,
  PotentiallyUnknownNumberType /** Tactical Points */,
  PotentiallyUnknownNumberType /** lumber */,
  PotentiallyUnknownNumberType /** grains */,
  PotentiallyUnknownNumberType /** iron */,
  PotentiallyUnknownNumberType /** marching flags */
];

const LEVELS_DATA: LevelDataRowType[] = [
  [1, null, 200, 200, 200, 40],
  [2, 400000, 800, 800, 800, 40],
  [3, 600000, 2000, 2000, 2000, 40],
  [4, 1200000, 3000, 3000, 3000, 40],
  [5, null, null, null, null, 40],
  [6, null, null, null, null, 40],
  [7, 5800000, 9000, 9000, 9000, 40],
];

export const HANZHONG_BANDIT_LEVELS: HanzhongBanditLevelsType = LEVELS_DATA.reduce((cumul, levelData) => {
  const [level, tacticalPoints, lumber, grains, iron, marchingOrders] = levelData;
  return {
    ...cumul,
    [level]: {
      tacticalPoints,
      rewards: {
        lumber,
        grains,
        iron,
        marchingOrders,
      },
    },
  };
}, {});

type AttackDataRowType = [
  1 | 2 | 3 | 4 | 5 | 6 | 7 /** Day of the attack */,
  1 | 2 /** Attack of the day */,
  PotentiallyUnknownNumberType /** Level of the bandits */
];

const ATTACKS_DATA: AttackDataRowType[] = [
  [1, 1, 1],
  [1, 2, 2],
  [2, 1, 3],
  [2, 2, 3],
  [3, 1, null],
  [3, 2, null],
  [4, 1, null],
  [4, 2, null],
  [5, 1, 7],
  [5, 2, 7],
  [6, 1, 7],
  [6, 2, 7],
  [7, 1, 7],
  [7, 2, 7],
];

const HANZHONG_BANDITS_ATTACKS: HanzhongBanditAttackType[] = ATTACKS_DATA.reduce((attacks, attackData) => {
  const [day, attack, level] = attackData;
  return attacks.concat([
    {
      id: `hanzhong--bandits--day-${day}--attack-${attack}`,
      day,
      attack,
      level,
    },
  ]);
}, [] as HanzhongBanditAttackType[]);

export type HanzhongBanditsType = {
  info: HanzhongBanditLevelsType;
  attacks: HanzhongBanditAttackType[];
};

export const HANZHONG_BANDITS: HanzhongBanditsType = {
  info: HANZHONG_BANDIT_LEVELS,
  attacks: HANZHONG_BANDITS_ATTACKS,
} as const;

export const HANZHONG_BANDITS_DEFAULT_USER_VALUES = {
  ...HANZHONG_BANDITS_ATTACKS.reduce(
    (defaults, attack) => ({
      ...defaults,
      [attack.id]: 0,
    }),
    {}
  ),
} as const;
