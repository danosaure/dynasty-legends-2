import type { HanzhongCityType, HanzhongType } from '../types';

export const findCityById = (hanzhong: HanzhongType, id: string): HanzhongCityType => {
  return hanzhong.cities.find((city: HanzhongCityType) => city.id === id);
};
