import type { HanzhongBonusType, HanzhongUserDataType } from '../../types';
import { findResourcesNeededByTechIdAndLevel } from '../../utils';
import { calculateTimeNeededForResources } from './calculate-time-needed-for-resources';
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

  const longestTime = calculateTimeNeededForResources(resourceData, resourcesNeeded, {
    lumber: resourceData.woodRate,
    grains: resourceData.grainsRate,
    iron: resourceData.ironRate,
  });

  if (longestTime === null) {
    return TIME_KEYS.DONT_KNOW;
  }

  return formatTime(longestTime);
};
