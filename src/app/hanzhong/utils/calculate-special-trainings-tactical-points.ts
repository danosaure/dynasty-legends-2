import { calculateSpecialTrainingBonus } from './calculate-special-training-bonus';
import type { HanzhongBonusType, HanzhongContextGetValue, HanzhongInfoDataType } from '../types';
import { calculateTacticalPoints } from './calculate-tactical-points';
import { calculateUserFormationTacticalPoints } from './calculate-user-formation-tactical-points';
import { STRUCTURED_HANZHONG_FORMATIONS } from '../data';

export const calculateSpecialTrainingsTacticalPoints = (
  getValue: HanzhongContextGetValue,
  bonuses: HanzhongBonusType
): HanzhongInfoDataType[] =>
  STRUCTURED_HANZHONG_FORMATIONS.map((formation) => {
    const formationBonuses = calculateSpecialTrainingBonus(getValue, bonuses, formation.techId);
    const specialTrainingTacticalPoints = calculateTacticalPoints(getValue, formationBonuses);
    const userFormationTacticalPoints = calculateUserFormationTacticalPoints(getValue, formation.id);
    return { label: formation.name, value: specialTrainingTacticalPoints + userFormationTacticalPoints };
  });
