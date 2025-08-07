import { __CACHE_BY_ID } from '../data/cache';
import type { HanzhongCityId, HanzhongCityType } from '../types';

export const getCityById = (id: HanzhongCityId): HanzhongCityType => __CACHE_BY_ID[id];
