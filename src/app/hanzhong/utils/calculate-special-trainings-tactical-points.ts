import { calculateSpecialTrainingBonus } from './calculate-special-training-bonus';
import type { HanzhongBonusType, HanzhongInfoDataType, HanzhongUserDataType } from '../types';
import { calculateTacticalPoints } from './calculate-tactical-points';
import { calculateUserFormationTacticalPoints } from './calculate-user-formation-tactical-points';
import { HANZHONG_DATA } from '../data';

export const calculateSpecialTrainingsTacticalPoints = (
  user: HanzhongUserDataType,
  bonuses: HanzhongBonusType
): HanzhongInfoDataType[] =>
  HANZHONG_DATA.formations.map((formation) => {
    const formationBonuses = calculateSpecialTrainingBonus(user, bonuses, formation.techId);
    const specialTrainingTacticalPoints = calculateTacticalPoints(formationBonuses);
    const userFormationTacticalPoints = calculateUserFormationTacticalPoints(user, formation.id);
    return { label: formation.name, value: specialTrainingTacticalPoints + userFormationTacticalPoints };
  });
