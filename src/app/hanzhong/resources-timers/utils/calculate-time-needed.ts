import type { HanzhongBonusType, HanzhongUserDataType } from '../../types';
import { findResourcesNeededByTechIdAndLevel } from '../../utils';
import { calculateTimeNeededForResource } from './calculate-time-needed-for-resource';
import { TIME_KEYS } from './constants';
import { extractResourceDataFromUser } from './extract-resource-data-from-user';
import { formatTime } from './format-time';

export const calculateTimeNeeded = (id: string, user: HanzhongUserDataType, bonuses: HanzhongBonusType): string => {
  const resourcesNeeded = findResourcesNeededByTechIdAndLevel(id, user[id] ?? 0);

  if (resourcesNeeded === null) {
    // Cannot find tech or level at max already.
    return TIME_KEYS.DONT_KNOW;
  }

  if (resourcesNeeded === -1) {
    // We are at max level.
    return TIME_KEYS.MAX_LEVEL_REACHED;
  }

  const resourceData = extractResourceDataFromUser(user, bonuses);

  const dataToProcess = [
    [resourcesNeeded.lumber, resourceData.lumber, resourceData.woodRate],
    [resourcesNeeded.grains, resourceData.grains, resourceData.grainsRate],
    [resourcesNeeded.iron, resourceData.iron, resourceData.ironRate],
  ];

  const [timeForLumber, timeForGrains, timeForIron] = dataToProcess.map(([quantityNeeded, currentInventory, productionRate]) =>
    calculateTimeNeededForResource(currentInventory, quantityNeeded, productionRate)
  );

  if (timeForLumber === null || timeForGrains === null || timeForIron === null) {
    return TIME_KEYS.DONT_KNOW;
  }

  const longestTime = Math.max(timeForLumber, timeForGrains, timeForIron);

  return formatTime(longestTime);
};
