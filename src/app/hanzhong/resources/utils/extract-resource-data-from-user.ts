import { SECTION_KEYS } from '../../constants';
import type { HanzhongBonusType, HanzhongContextGetValue } from '../../types';
import { RESOURCES_TIMERS_KEYS } from './constants';

export type ResourceDataType = {
  woodRate: number;
  grainsRate: number;
  ironRate: number;
  lumber: number;
  grains: number;
  iron: number;
};

export const extractResourceDataFromUser = (getValue: HanzhongContextGetValue, bonuses: HanzhongBonusType): ResourceDataType =>
  ({
    woodRate: bonuses.woodRate ?? 0,
    grainsRate: bonuses.grainsRate ?? 0,
    ironRate: bonuses.ironRate ?? 0,
    lumber: getValue(SECTION_KEYS.RESOURCES, RESOURCES_TIMERS_KEYS.INVENTORY_LUMBER),
    grains: getValue(SECTION_KEYS.RESOURCES, RESOURCES_TIMERS_KEYS.INVENTORY_GRAINS),
    iron: getValue(SECTION_KEYS.RESOURCES, RESOURCES_TIMERS_KEYS.INVENTORY_IRON),
  } as const);
