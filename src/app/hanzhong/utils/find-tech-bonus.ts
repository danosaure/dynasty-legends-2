import type { HanzhongTechType, HanzhongType, HanzhongWarTierType } from '../types';

export const findTechBonus = (hanzhong: HanzhongType, key: string): HanzhongTechType | null => {
  return hanzhong.warTiers.reduce((foundValue: HanzhongTechType | null, warTier: HanzhongWarTierType): HanzhongTechType | null => {
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
