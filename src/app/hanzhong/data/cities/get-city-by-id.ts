import { __CACHE_BY_ID } from './cache';
import type { HanzhongCityType } from './HanzhongCity';
import type { HanzhongCityId } from './HanzhongCityId';

export const getCityById = (id: HanzhongCityId): HanzhongCityType => __CACHE_BY_ID[id];
