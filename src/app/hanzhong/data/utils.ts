import type { HanzhongBonusType, HanzhongTechLevelType } from '../types';

type bonusKeys = keyof HanzhongBonusType;

export const mapTableToResourcesAndBonuses = (bonuses: bonusKeys[], data: number[][]) =>
  data.map(
    ([lumber, grains, iron, ...bonusData]): HanzhongTechLevelType => ({
      resources: {
        lumber,
        grains,
        iron,
      },
      bonuses: bonusData.reduce(
        (returnValue, value, idx): Record<string, number> => ({
          ...returnValue,
          [bonuses[idx]]: value,
        }),
        {}
      ),
    })
  );
