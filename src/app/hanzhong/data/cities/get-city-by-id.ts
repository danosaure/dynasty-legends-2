import { __CACHE_BY_ID } from './cache';
import type { HanzhongCity } from './HanzhongCity';
import type { HanzhongCityId } from './HanzhongCityId';

export const getCityById = (id: HanzhongCityId): HanzhongCity => __CACHE_BY_ID[id];
