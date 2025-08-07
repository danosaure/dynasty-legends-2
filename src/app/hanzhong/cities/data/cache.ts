import type { CacheType } from '../types';
import { HANZHONG_CITIES } from './data';

export const __CACHE_BY_ID: CacheType = HANZHONG_CITIES.reduce<CacheType>(
  (citiesCache, city) =>
    ({
      ...citiesCache,
      [city.id]: city,
    } as const),
  {}
);

export const __CACHE_BY_NAME: CacheType = HANZHONG_CITIES.reduce<CacheType>(
  (citiesCache, city) =>
    ({
      ...citiesCache,
      [city.name]: city,
    } as const),
  {}
);
