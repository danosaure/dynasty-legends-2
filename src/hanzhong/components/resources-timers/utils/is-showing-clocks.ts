import type { HanzhongUserDataType } from '../../../types';
import { RESOURCES_TIMERS_KEYS } from './constants';

export const isShowingClocks = (user: HanzhongUserDataType): boolean => Boolean(user[RESOURCES_TIMERS_KEYS.SHOW_CLOCKS] ?? false);
