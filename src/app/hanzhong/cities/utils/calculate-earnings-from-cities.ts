import type { HanzhongBonusType, HanzhongUserDataType } from '../../types';
import { addHanzhongBonuses } from '../../utils';
import { HANZHONG_CITIES } from '../cities--data';
import { isCityOccupied } from './is-city-occupied';

export const calculateEarningsFromCities = (userData: HanzhongUserDataType): HanzhongBonusType =>
  HANZHONG_CITIES.reduce<HanzhongBonusType>((bonuses, city) => {
    if (isCityOccupied(city.id, userData)) {
      return addHanzhongBonuses(bonuses, city.earnings);
    }
    return bonuses;
  }, {} as HanzhongBonusType);
