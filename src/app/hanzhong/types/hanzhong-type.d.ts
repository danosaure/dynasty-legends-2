import type { HanzhongBanditsType } from './hanzhong-bandits-type';
import type { HanzhongWarTierType } from './hanzhong-war-tier-type';

export type HanzhongType = {
  warTiers: HanzhongWarTierType[];
  bandits: HanzhongBanditsType;
};
