import type { HanzhongBonusType, HanzhongUserDataType } from '../types';
import { addHanzhongBonuses } from './add-hanzhong-bonuses';
import { findTechBonus } from './find-tech-bonus';

export const calculateSpecialTrainingBonus = (
  user: HanzhongUserDataType,
  bonuses: HanzhongBonusType,
  id: string
): HanzhongBonusType => {
  if (user[id]) {
    const tech = findTechBonus(id);
    if (tech) {
      return addHanzhongBonuses(bonuses, tech.levels[user[id] - 1].bonuses);
    }
  }
  return bonuses;
};
