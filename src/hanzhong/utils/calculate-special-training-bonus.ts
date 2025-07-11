import type { HanzhongUserDataType } from '../persistence/hanzhong-user-data-type';
import type { HanzhongBonusType, HanzhongType } from '../types';
import { addHanzhongBonuses } from './add-hanzhong-bonuses';
import { findTechBonus } from './find-tech-bonus';

export const calculateSpecialTrainingBonus = (
  hanzhong: HanzhongType,
  user: HanzhongUserDataType,
  bonuses: HanzhongBonusType,
  id: string
): HanzhongBonusType => {
  if (user[id]) {
    const tech = findTechBonus(hanzhong, id);
    if (tech) {
      return addHanzhongBonuses(bonuses, tech.levels[user[id] - 1].bonuses);
    }
  }
  return bonuses;
};
