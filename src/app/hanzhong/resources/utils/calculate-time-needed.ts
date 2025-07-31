import { SECTION_KEYS } from '../../constants';
import type { HanzhongBonusType, HanzhongContextGetValue } from '../../types';
import { findResourcesNeededByTechIdAndLevel } from '../../utils';
import { calculateTimeNeededForResources } from './calculate-time-needed-for-resources';
import { extractResourceDataFromUser } from './extract-resource-data-from-user';

export const calculateTimeNeeded = (getValue: HanzhongContextGetValue, id: string, bonuses: HanzhongBonusType): number | null => {
  const resourcesNeeded = findResourcesNeededByTechIdAndLevel(id, getValue(SECTION_KEYS.TECHS, id));

  if (resourcesNeeded === null) {
    // Cannot find tech or level at max already.
    return null;
  }

  if (resourcesNeeded === -1) {
    // We are at max level.
    return -1;
  }

  const resourceData = extractResourceDataFromUser(getValue, bonuses);

  return calculateTimeNeededForResources(resourceData, resourcesNeeded, {
    lumber: resourceData.woodRate,
    grains: resourceData.grainsRate,
    iron: resourceData.ironRate,
  });
};
