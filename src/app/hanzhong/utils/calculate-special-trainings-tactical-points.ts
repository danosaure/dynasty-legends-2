import { calculateSpecialTrainingBonus } from './calculate-special-training-bonus';
import type { HanzhongBonusType, HanzhongInfoDataType, HanzhongUserDataType } from '../types';
import { calculateTacticalPoints } from './calculate-tactical-points';
import { calculateUserFormationTacticalPoints } from './calculate-user-formation-tactical-points';
import { STRUCTURED_FORMATIONS } from '../formations/structured-formations';
import type { HanzhongFormationsUserData } from '../formations/types';

export const calculateSpecialTrainingsTacticalPoints = (
  user: HanzhongUserDataType,
  bonuses: HanzhongBonusType,
  formationsUserData: HanzhongFormationsUserData
): HanzhongInfoDataType[] =>
  [STRUCTURED_FORMATIONS.vanguardCamp, STRUCTURED_FORMATIONS.valiantCavalry, STRUCTURED_FORMATIONS.royalGuards].map((formation) => {
    const formationBonuses = calculateSpecialTrainingBonus(user, bonuses, formation.techId);
    const specialTrainingTacticalPoints = calculateTacticalPoints(formationBonuses);
    const userFormationTacticalPoints = calculateUserFormationTacticalPoints(formationsUserData, formation);
    return { label: formation.name, value: specialTrainingTacticalPoints + userFormationTacticalPoints };
  });
