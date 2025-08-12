import type { HanzhongBanditAttackDay, HanzhongBanditAttackType, HanzhongBanditDayAttack } from './BanditAttackType';
import type { HanzhongBanditLevelsType } from './BanditLevelsType';

const MARCHING_ORDERS_REWARD = 40;

type LevelDataRowType = [HanzhongBanditAttackDay /** Level */, number /** Tactical Points */, number /** rewards */];

const LEVELS_DATA: LevelDataRowType[] = [
  [1, 200000, 200],
  [2, 400000, 800],
  [3, 600000, 2000],
  [4, 1200000, 3000],
  [5, 2100000, 5000],
  [6, 3400000, 7000],
  [7, 5800000, 9000],
];

export const HANZHONG_BANDIT_LEVELS: HanzhongBanditLevelsType = LEVELS_DATA.reduce((cumul, levelData) => {
  const [level, tacticalPoints, rewards] = levelData;
  return {
    ...cumul,
    [level]: {
      tacticalPoints,
      rewards: {
        lumber: rewards,
        grains: rewards,
        iron: rewards,
        marchingOrders: MARCHING_ORDERS_REWARD,
      },
    },
  };
}, {});

const ATTACK_DAYS: HanzhongBanditAttackDay[] = [1, 2, 3, 4, 5, 6, 7];
const DAY_ATTACKS: HanzhongBanditDayAttack[] = [1, 2];

const HANZHONG_BANDITS_KEY = 'hanzhong--bandits';

const HANZHONG_BANDITS_ATTACKS: HanzhongBanditAttackType[] = ATTACK_DAYS.reduce<HanzhongBanditAttackType[]>(
  (attacksCumul, attackDay) =>
    DAY_ATTACKS.reduce<HanzhongBanditAttackType[]>(
      (dayAttackCumul, dayAttack) =>
        dayAttackCumul.concat([
          {
            id: `${HANZHONG_BANDITS_KEY}--${attackDay}--${dayAttack}`,
            day: attackDay,
            attack: dayAttack,
          },
        ]),
      attacksCumul
    ),
  [] as HanzhongBanditAttackType[]
);

export type HanzhongBanditsType = {
  id: string;
  info: HanzhongBanditLevelsType;
  attacks: HanzhongBanditAttackType[];
};

export const HANZHONG_BANDITS: HanzhongBanditsType = {
  id: HANZHONG_BANDITS_KEY,
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
