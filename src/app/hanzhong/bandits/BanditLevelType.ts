import type { PotentiallyUnknownNumberType } from '../../types';
import type { HanzhongBanditLevelRewardsType } from './BanditLevelRewardsType';

export type HanzhongBanditLevelType = {
  tacticalPoints: PotentiallyUnknownNumberType;
  rewards: HanzhongBanditLevelRewardsType;
};
