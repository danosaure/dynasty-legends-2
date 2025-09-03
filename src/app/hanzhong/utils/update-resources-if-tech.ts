import { getNumberValue } from '../../utils';
import { RESOURCES_TIMERS_KEYS } from '../resources-timers/utils';
import { getTechById } from '../techs';
import type { HanzhongUserDataType } from '../types';

export const updateResourcesIfTech = (key: string, value: number, userData: HanzhongUserDataType) => {
  const tech = getTechById(key);
  if (tech) {
    const oldValue = getNumberValue(userData, key);
    const multiplier = value > oldValue ? -1 : 1;
    const resources = tech.levels[Math.min(value, oldValue)].resources;

    return {
      [key]: value,
      [RESOURCES_TIMERS_KEYS.INVENTORY_LUMBER]:
        getNumberValue(userData, RESOURCES_TIMERS_KEYS.INVENTORY_LUMBER) + resources.lumber * multiplier,
      [RESOURCES_TIMERS_KEYS.INVENTORY_GRAINS]:
        getNumberValue(userData, RESOURCES_TIMERS_KEYS.INVENTORY_GRAINS) + resources.grains * multiplier,
      [RESOURCES_TIMERS_KEYS.INVENTORY_IRON]:
        getNumberValue(userData, RESOURCES_TIMERS_KEYS.INVENTORY_IRON) + resources.iron * multiplier,
    };
  } else {
    return {
      [key]: value,
    };
  }
};
