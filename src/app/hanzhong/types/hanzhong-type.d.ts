import type { HanzhongBanditsType } from './hanzhong-bandits-type';
import type { HanzhongCityType } from './hanzhong-city-type';
import type { HanzhongTerritoryType } from './hanzhong-territory-type';
import type { HanzhongWarTierType } from './hanzhong-war-tier-type';

export type HanzhongType = {
  cities: HanzhongCityType[];
  territories: HanzhongTerritoryType;
  warTiers: HanzhongWarTierType[];
  bandits: HanzhongBanditsType;
};
