import { HANZHONG_DATA } from '../data';
import type { HanzhongTechType, HanzhongWarTierType } from '../types';

export const findTechBonus = (key: string): HanzhongTechType | null => {
  return HANZHONG_DATA.warTiers.reduce(
    (foundValue: HanzhongTechType | null, warTier: HanzhongWarTierType): HanzhongTechType | null => {
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
    },
    null
  );
};
