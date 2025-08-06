import { __CACHE_BY_NAME } from './cache';
import type { HanzhongCity } from './HanzhongCity';
import type { HanzhongCityName } from './HanzhongCityName';

export const getCityByName = (name: HanzhongCityName): HanzhongCity => __CACHE_BY_NAME[name];
