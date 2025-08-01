import { HANZHONG_DATA } from '../data';
import type { HanzhongCityType } from '../types';

export const findCityById = (id: string): HanzhongCityType => {
  return HANZHONG_DATA.cities.find((city: HanzhongCityType) => city.id === id);
};
