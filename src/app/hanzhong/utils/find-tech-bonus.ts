import type { HanzhongTechType } from '../types';
import { HANZHONG_WAR_TIERS, type HanzhongWarTierType } from '../war-tiers';

export const findTechBonus = (key: string): HanzhongTechType | null => {
  return HANZHONG_WAR_TIERS.reduce((foundValue: HanzhongTechType | null, warTier: HanzhongWarTierType): HanzhongTechType | null => {
    if (foundValue) {
      return foundValue;
    }

    return warTier.techs.reduce((foundTech: HanzhongTechType | null, tech: HanzhongTechType): HanzhongTechType | null => {
      if (foundTech) {
        return foundTech;
      }

      if (tech.id === key) {
        return tech;
      }
      return null;
    }, foundValue);
  }, null);
};
