import { calculateSpecialTrainingBonus } from './calculate-special-training-bonus';
import { HANZHONG_TECH_IDS } from '../constants/items-ids';
import type { HanzhongBonusType, HanzhongType } from '../types';
import type { HanzhongUserDataType } from '../persistence/hanzhong-user-data-type';

export type SpecialTrainingsBonusesType = {
  vanguardCamp: HanzhongBonusType;
  valiantCavalry: HanzhongBonusType;
  royalGuards: HanzhongBonusType;
};

export const calculateSpecialTrainingsBonuses = (
  hanzhong: HanzhongType,
  user: HanzhongUserDataType,
  bonuses: HanzhongBonusType
): SpecialTrainingsBonusesType => ({
  vanguardCamp: calculateSpecialTrainingBonus(hanzhong, user, bonuses, HANZHONG_TECH_IDS.SPECIAL_TRAINING__VANGUARD_CAMP),
  valiantCavalry: calculateSpecialTrainingBonus(hanzhong, user, bonuses, HANZHONG_TECH_IDS.SPECIAL_TRAINING__VALIANT_CAVALRY),
  royalGuards: calculateSpecialTrainingBonus(hanzhong, user, bonuses, HANZHONG_TECH_IDS.SPECIAL_TRAINING__ROYAL_GUARDS),
});
