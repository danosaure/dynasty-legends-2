import { HANZHONG_TERRITORIES } from './hanzhong-territories';
import type { HanzhongType } from '../types';
import { HANZHONG_BANDITS } from './hanzhong-bandits';

export const HANZHONG_DATA: HanzhongType = {
  territories: HANZHONG_TERRITORIES,
  bandits: HANZHONG_BANDITS,
} as const;
