import type { HanzhongBanditsType } from './hanzhong-bandits-type';
import type { HanzhongTerritoryType } from './hanzhong-territory-type';
import type { HanzhongWarTierType } from './hanzhong-war-tier-type';

export type HanzhongType = {
  territories: HanzhongTerritoryType;
  warTiers: HanzhongWarTierType[];
  bandits: HanzhongBanditsType;
};
