import type { HanzhongUserDataType } from '../../types';
import { HANZHONG_CITIES } from '../data';
import { isCityOccupied } from './is-city-occupied';

export const countOccupiedCities = (userData: HanzhongUserDataType): number =>
  HANZHONG_CITIES.reduce<number>((sum, city) => sum + (isCityOccupied(city.id, userData) ? 1 : 0), 0);
