import { HANZHONG_DATA } from './hanzhong-data';
import type { HanzhongCityType, HanzhongTechType, HanzhongTerritoryLevelType, HanzhongWarTierType } from '../types';
import type { BaseIDType } from '../../types';

type CacheCitiesType = Record<string, HanzhongCityType>;
type CacheTechsType = Record<string, HanzhongTechType>;
type CacheTerritoriesType = Record<string, HanzhongTerritoryLevelType>;
type CacheWarTiersType = Record<string, HanzhongWarTierType>;

type CacheType = {
  cities: CacheCitiesType;
  techs: CacheTechsType;
  territories: CacheTerritoriesType;
  warTiers: CacheWarTiersType;
};

const CACHE: CacheType = {
  cities: HANZHONG_DATA.cities.reduce<CacheCitiesType>(
    (cities, city: HanzhongCityType) =>
      ({
        ...cities,
        [city.id]: city,
      } as const),
    {} as CacheCitiesType
  ),

  techs: HANZHONG_DATA.warTiers.reduce<CacheTechsType>(
    (warTiersTechs, warTier: HanzhongWarTierType) =>
      warTier.techs.reduce<CacheTechsType>(
        (techs: CacheTechsType, tech: HanzhongTechType) =>
          ({
            ...techs,
            [tech.id]: tech,
          } as const),
        warTiersTechs
      ),
    {} as CacheTechsType
  ),

  territories: HANZHONG_DATA.territories.reduce<CacheTerritoriesType>(
    (territories, territory) => (
      {
        ...territories,
        [territory.id]: territory;
      } as const
    ),
    {} as CacheTerritoriesType),

  warTiers: HANZHONG_DATA.warTiers.reduce<CacheWarTiersType>(
    (warTiers, warTier: HanzhongWarTierType) =>
      ({
        ...warTiers,
        [warTier.id]: warTier,
      } as const),
    {} as CacheWarTiersType
  ),
};

// territories: HanzhongTerritoryType;
// bandits: HanzhongBanditsType;

const getKeysFromObject = (obj: Record<string, BaseIDType>): string[] => Object.keys(obj);
const getObjectById = <T>(obj: Record<string, BaseIDType>, id: string): T | null => (obj[id] as T) ?? null;

export const getCityById = (id: string): CacheCitiesType | null => getObjectById<CacheCitiesType>(CACHE.cities, id);
export const getCityKeys = (): string[] => getKeysFromObject(CACHE.cities);

export const getTechById = (id: string): HanzhongTechType | null => getObjectById<HanzhongTechType>(CACHE.techs, id);
export const getTechKeys = (): string[] => getKeysFromObject(CACHE.techs);

export const getWarTierById = (id: string): HanzhongWarTierType | null => getObjectById<HanzhongWarTierType>(CACHE.warTiers, id);
export const getWarTierKeys = (): string[] => getKeysFromObject(CACHE.techs);
