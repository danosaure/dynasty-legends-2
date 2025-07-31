import { SECTION_KEYS } from '../constants';
import type { HanzhongBonusType, HanzhongContextGetValue } from '../types';
import { addHanzhongBonuses } from './add-hanzhong-bonuses';
import { findTechBonus } from './find-tech-bonus';

export const calculateSpecialTrainingBonus = (
  getValue: HanzhongContextGetValue,
  bonuses: HanzhongBonusType,
  id: string
): HanzhongBonusType => {
  const level = getValue(SECTION_KEYS.TECHS, id);
  if (level) {
    const tech = findTechBonus(id);
    if (tech) {
      return addHanzhongBonuses(bonuses, tech.levels[level - 1].bonuses);
    }
  }
  return bonuses;
};
