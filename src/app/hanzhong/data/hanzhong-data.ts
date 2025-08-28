import type { HanzhongType } from '../types';
import { HANZHONG_BANDITS } from './hanzhong-bandits';

export const HANZHONG_DATA: HanzhongType = {
  bandits: HANZHONG_BANDITS,
} as const;
