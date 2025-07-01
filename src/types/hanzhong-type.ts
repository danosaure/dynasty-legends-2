import { HanzhongCityType } from './hanzhong-city-type';
import { HanzhongTerritoryType } from './hanzhong-territory-type';
import { HanzhongWarTierType } from './hanzhong-war-tier-type';

export type HanzhongType = {
  cities: HanzhongCityType[];
  territories: HanzhongTerritoryType;
  warTiers: HanzhongWarTierType[];
};
