import type { HanzhongBonusType } from '../types/hanzhong-bonus-type';
import type { HanzhongTechLevelType } from '../types/hanzhong-tech-level-type';
import type { PotentiallyUnknownNumberType } from '../types/potentially-unknown-number-type';

type bonusKeys = keyof HanzhongBonusType;

export const mapTableToResourcesAndBonuses = (bonuses: bonusKeys[], data: PotentiallyUnknownNumberType[][]) =>
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
