import type { HanzhongContextOnChangeType } from '../../types';

import { RESOURCES_TIMERS_KEYS } from './constants';

export const toggleClocks = (onChange: HanzhongContextOnChangeType, currentValue: boolean): void =>
  onChange(RESOURCES_TIMERS_KEYS.SHOW_CLOCKS, currentValue ? 0 : 1);
