import { __CACHE_BY_NAME } from '../data/cache';
import type { HanzhongCityName, HanzhongCityType } from '../types';

export const getCityByName = (name: HanzhongCityName): HanzhongCityType => __CACHE_BY_NAME[name];
