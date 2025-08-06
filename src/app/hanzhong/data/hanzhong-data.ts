import { HANZHONG_TERRITORIES } from './hanzhong-territories';
import { HANZHONG_WAR_TIERS } from './hanzhong-war-tiers';
import type { HanzhongType } from '../types';
import { HANZHONG_BANDITS } from './hanzhong-bandits';

export const HANZHONG_DATA: HanzhongType = {
  territories: HANZHONG_TERRITORIES,
  warTiers: HANZHONG_WAR_TIERS,
  bandits: HANZHONG_BANDITS,
} as const;
