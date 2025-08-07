import { __CACHE_BY_NAME } from './cache';
import type { HanzhongCityType } from './HanzhongCity';
import type { HanzhongCityName } from './HanzhongCityName';

export const getCityByName = (name: HanzhongCityName): HanzhongCityType => __CACHE_BY_NAME[name];
