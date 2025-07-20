import type { HanzhongBonusType, HanzhongUserDataType } from '../../types';
import { RESOURCES_TIMERS_KEYS } from './constants';

export type ResourceDataType = {
  woodRate: number;
  grainsRate: number;
  ironRate: number;
  lumber: number;
  grains: number;
  iron: number;
};

export const extractResourceDataFromUser = (user: HanzhongUserDataType, bonuses: HanzhongBonusType): ResourceDataType =>
  ({
    woodRate: bonuses.woodRate ?? 0,
    grainsRate: bonuses.grainsRate ?? 0,
    ironRate: bonuses.ironRate ?? 0,
    lumber: user[RESOURCES_TIMERS_KEYS.INVENTORY_LUMBER] ?? 0,
    grains: user[RESOURCES_TIMERS_KEYS.INVENTORY_GRAINS] ?? 0,
    iron: user[RESOURCES_TIMERS_KEYS.INVENTORY_IRON] ?? 0,
  } as const);
