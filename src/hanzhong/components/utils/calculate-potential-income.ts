import { HANZHONG_DATA } from '../../../data/hanzhong';
import type { HanzhongCityType } from '../../../types/hanzhong/hanzhong-city-type';
import type { HanzhongType } from '../../../types/hanzhong/hanzhong-type';

export type PotentialIncomeType = {
  woodRate: number;
  grainsRate: number;
  ironRate: number;
};

export const calculatePotentialIncome = (hanzhongData: HanzhongType): PotentialIncomeType =>
  HANZHONG_DATA.cities.reduce<PotentialIncomeType>(
    (cumul: PotentialIncomeType, city: HanzhongCityType) => {
      const cityLevel = hanzhongData.cities[city.id] ?? 0;

      if (cityLevel === 0) {
        return cumul;
      }

      return {
        woodRate: cumul.woodRate + (city.earnings.woodRate ?? 0),
        grainsRate: cumul.grainsRate + (city.earnings.grainsRate ?? 0),
        ironRate: cumul.ironRate + (city.earnings.ironRate ?? 0),
      };
    },
    { woodRate: 0, grainsRate: 0, ironRate: 0 }
  );
