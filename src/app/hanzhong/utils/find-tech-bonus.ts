import type { HanzhongTechType } from '../types';
import { HANZHONG_WAR_TIERS } from '../war-tiers';

export const findTechBonus = (key: string): HanzhongTechType | null => {
  return HANZHONG_WAR_TIERS.reduce<HanzhongTechType | null>((foundValue, warTier): HanzhongTechType | null => {
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
