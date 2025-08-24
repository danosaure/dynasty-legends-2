import type { HanzhongBanditAttackType, HanzhongBanditLevelsType, HanzhongBanditsType } from '../types';

type LevelDataRowType = [number /** Level */, number /** Tactical Points */, number /** reward */, number /** marching flags */];

const LEVELS_DATA: LevelDataRowType[] = [
  [1, 200000, 200, 40],
  [2, 400000, 800, 40],
  [3, 600000, 2000, 40],
  [4, 1200000, 3000, 40],
  [5, 2100000, 5000, 40],
  [6, 3400000, 7000, 40],
  [7, 5800000, 9000, 40],
];

export const HANZHONG_BANDIT_LEVELS: HanzhongBanditLevelsType = LEVELS_DATA.reduce((cumul, levelData) => {
  const [level, tacticalPoints, resourceReward, marchingOrders] = levelData;
  return {
    ...cumul,
    [level]: {
      tacticalPoints,
      rewards: {
        lumber: resourceReward,
        grains: resourceReward,
        iron: resourceReward,
        marchingOrders,
      },
    },
  };
}, {});

type AttackDataRowType = [1 | 2 | 3 | 4 | 5 | 6 | 7 /** Day of the attack */, 1 | 2 /** Attack of the day */];

const ATTACKS_DATA: AttackDataRowType[] = [
  [1, 1],
  [1, 2],
  [2, 1],
  [2, 2],
  [3, 1],
  [3, 2],
  [4, 1],
  [4, 2],
  [5, 1],
  [5, 2],
  [6, 1],
  [6, 2],
  [7, 1],
  [7, 2],
];

const HANZHONG_BANDITS_KEY = 'hanzhong--bandits';

const HANZHONG_BANDITS_ATTACKS: HanzhongBanditAttackType[] = ATTACKS_DATA.reduce((attacks, attackData) => {
  const [day, attack] = attackData;
  return attacks.concat([
    {
      id: `${HANZHONG_BANDITS_KEY}--day-${day}--attack-${attack}`,
      day,
      attack,
    },
  ]);
}, [] as HanzhongBanditAttackType[]);

export const HANZHONG_BANDITS: HanzhongBanditsType = {
  id: HANZHONG_BANDITS_KEY,
  info: HANZHONG_BANDIT_LEVELS,
  attacks: HANZHONG_BANDITS_ATTACKS,
} as const;

export const HANZHONG_BANDITS_DEFAULT_USER_VALUES: Record<string, number> = {
  ...HANZHONG_BANDITS_ATTACKS.reduce(
    (defaults, attack) => ({
      ...defaults,
      [attack.id]: 0,
    }),
    {}
  ),
} as const;
