import { HANZHONG_CITIES } from './hanzhong-cities';
import { HANZHONG_TERRITORIES } from './hanzhong-territories';
import { HANZHONG_WAR_TIERS } from './hanzhong-war-tiers';
import type { HanzhongType } from '../types';
import { HANZHONG_BANDITS } from './hanzhong-bandits';
import { STRUCTURED_HANZHONG_FORMATIONS } from '../constants';

export const HANZHONG_DATA: HanzhongType = {
  cities: HANZHONG_CITIES,
  territories: HANZHONG_TERRITORIES,
  warTiers: HANZHONG_WAR_TIERS,
  bandits: HANZHONG_BANDITS,
  formations: STRUCTURED_HANZHONG_FORMATIONS,
} as const;
