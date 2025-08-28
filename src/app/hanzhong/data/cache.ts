import { HANZHONG_DATA } from './hanzhong-data';
import type { HanzhongBanditAttackType, HanzhongTerritoryLevelType } from '../types';
import type { BaseIDType } from '../../types';
import { HANZHONG_TERRITORIES } from './hanzhong-territories';

type CacheBanditsType = Record<string, HanzhongBanditAttackType>;
type CacheTerritoriesType = Record<string, HanzhongTerritoryLevelType>;

type CacheType = {
  bandits: CacheBanditsType;
  territories: CacheTerritoriesType;
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

  territories: HANZHONG_TERRITORIES.levels.reduce<CacheTerritoriesType>(
    (territories: CacheTerritoriesType, level: HanzhongTerritoryLevelType) =>
      ({
        ...territories,
        [level.id]: level,
      } as const),
    {} as CacheTerritoriesType
  ),
};

const getObjectById = <T>(obj: Record<string, BaseIDType>, id: string): T | null => (obj[id] as T) ?? null;

export const getBanditById = (id: string): HanzhongBanditAttackType | null =>
  getObjectById<HanzhongBanditAttackType>(CACHE.bandits, id);
