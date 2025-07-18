import type { HanzhongContextOnChangeType, HanzhongUserDataType } from '../../types';

import { RESOURCES_TIMERS_KEYS } from './constants';

export const isShowingClock = (user: HanzhongUserDataType): boolean => Boolean(user[RESOURCES_TIMERS_KEYS.SHOW_CLOCKS] ?? false);

export const toggleClock = (onChange: HanzhongContextOnChangeType, currentValue: boolean): void =>
  onChange(RESOURCES_TIMERS_KEYS.SHOW_CLOCKS, currentValue ? 0 : 1);
