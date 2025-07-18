import { HANZHONG_DATA } from './hanzhong-data';
import type { HanzhongTechType, HanzhongWarTierType } from '../types';

export type CacheTechsType = Record<string, HanzhongTechType>;

type CacheType = {
  techs: CacheTechsType;
};

const CACHE: CacheType = {
  techs: HANZHONG_DATA.warTiers.reduce<CacheTechsType>(
    (warTiersTechs, warTier: HanzhongWarTierType) =>
      warTier.techs.reduce<CacheTechsType>(
        (techs: CacheTechsType, tech: HanzhongTechType) => ({
          ...techs,
          [tech.id]: tech,
        }),
        warTiersTechs
      ),
    {} as Record<string, HanzhongTechType>
  ),
};

export const getTechById = (id: string): HanzhongTechType | null => CACHE.techs[id] ?? null;
