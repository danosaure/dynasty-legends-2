import type { PotentiallyUnknownNumberType } from '../../types';
import type { HanzhongBanditLevelRewardsType } from './hanzhong-bandit-level-rewards-type';

export type HanzhongBanditLevelType = {
  tacticalPoints: PotentiallyUnknownNumberType;
  rewards: HanzhongBanditLevelRewardsType;
};
