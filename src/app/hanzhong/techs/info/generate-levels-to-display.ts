import type { HanzhongTechLevelType } from '../../types';

import { calculateDeltaBonuses } from './calculate-delta-bonuses';
import { sumTechResources } from './sum-tech-resources';
import type { HanzhongTechsTechLevelDisplayType } from './types';

export const generateLevelsToDisplay = (
  levels: HanzhongTechLevelType[],
  userLevel: number
): HanzhongTechsTechLevelDisplayType[] => {
  const currentBonuses = userLevel !== 0 ? levels[userLevel - 1].bonuses : {};

  return levels.reduce<HanzhongTechsTechLevelDisplayType[]>(
    (cumul: HanzhongTechsTechLevelDisplayType[], level: HanzhongTechLevelType, index: number) => {
      if (userLevel > index) {
        return cumul;
      }

      if (cumul.length === 0) {
        return cumul.concat({
          level: index + 1,
          resources: {
            ...level.resources,
          },
          bonuses: calculateDeltaBonuses(currentBonuses, level.bonuses),
        } as const);
      }

      return cumul.concat({
        level: index + 1,
        resources: sumTechResources(cumul[cumul.length - 1].resources, level.resources),
        bonuses: calculateDeltaBonuses(currentBonuses, level.bonuses),
      });
    },
    [] as HanzhongTechsTechLevelDisplayType[]
  );
};
