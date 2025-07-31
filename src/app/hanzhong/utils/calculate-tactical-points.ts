import { TACTICAL_POINTS_PER_ATK, TACTICAL_POINTS_PER_DEF, TACTICAL_POINTS_PER_HP } from '../constants/tactical-points-per-bonus';
import type { HanzhongBonusType, HanzhongContextGetValue } from '../types';

export const calculateTacticalPoints = (getValue: HanzhongContextGetValue, bonuses: HanzhongBonusType): number => {
  return Math.floor(
    (bonuses.atk ?? 0) * TACTICAL_POINTS_PER_ATK +
      (bonuses.def ?? 0) * TACTICAL_POINTS_PER_DEF +
      (bonuses.hp ?? 0) * TACTICAL_POINTS_PER_HP
  );
};
