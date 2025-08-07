import { HANZHONG_DATA } from './hanzhong-data';
import type { HanzhongBanditAttackType, HanzhongTechType, HanzhongTerritoryLevelType, HanzhongWarTierType } from '../types';
import type { BaseIDType } from '../../types';

type CacheBanditsType = Record<string, HanzhongBanditAttackType>;
type CacheTechsType = Record<string, HanzhongTechType>;
type CacheTerritoriesType = Record<string, HanzhongTerritoryLevelType>;
type CacheWarTiersType = Record<string, HanzhongWarTierType>;

type CacheType = {
  bandits: CacheBanditsType;
  techs: CacheTechsType;
  territories: CacheTerritoriesType;
  warTiers: CacheWarTiersType;
};

const CACHE: CacheType = {
  bandits: HANZHONG_DATA.bandits.attacks.reduce<CacheBanditsType>(
    (bandits: CacheBanditsType, attack: HanzhongBanditAttackType) =>
      ({
        ...bandits,
        [attack.id]: attack,
      } as const),
    {} as CacheBanditsType
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

  territories: HANZHONG_DATA.territories.levels.reduce<CacheTerritoriesType>(
    (territories: CacheTerritoriesType, level: HanzhongTerritoryLevelType) =>
      ({
        ...territories,
        [level.id]: level,
      } as const),
    {} as CacheTerritoriesType
  ),

  warTiers: HANZHONG_DATA.warTiers.reduce<CacheWarTiersType>(
    (warTiers, warTier: HanzhongWarTierType) =>
      ({
        ...warTiers,
        [warTier.id]: warTier,
      } as const),
    {} as CacheWarTiersType
  ),
};

const getKeysFromObject = (obj: Record<string, BaseIDType>): string[] => Object.keys(obj);
const getObjectById = <T>(obj: Record<string, BaseIDType>, id: string): T | null => (obj[id] as T) ?? null;

export const getBanditById = (id: string): HanzhongBanditAttackType | null =>
  getObjectById<HanzhongBanditAttackType>(CACHE.bandits, id);
export const getBanditKeys = (): string[] => getKeysFromObject(CACHE.bandits);

export const getTechById = (id: string): HanzhongTechType | null => getObjectById<HanzhongTechType>(CACHE.techs, id);
export const getTechKeys = (): string[] => getKeysFromObject(CACHE.techs);

export const getWarTierById = (id: string): HanzhongWarTierType | null => getObjectById<HanzhongWarTierType>(CACHE.warTiers, id);
export const getWarTierKeys = (): string[] => getKeysFromObject(CACHE.techs);
