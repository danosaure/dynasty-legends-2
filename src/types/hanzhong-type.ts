import { HanzhongCityType } from './hanzhong-city-type';
import { HanzhongWarTierType } from './hanzhong-war-tier-type';

export type HanzhongType = {
  cities: HanzhongCityType[];
  warTiers: HanzhongWarTierType[];
};
