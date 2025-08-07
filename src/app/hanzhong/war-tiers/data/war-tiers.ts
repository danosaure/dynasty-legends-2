import { baseInfo } from '../../data/base-info';
import {
  HANZHONG_WAR_TIER_1_TECHS,
  HANZHONG_WAR_TIER_2_TECHS,
  HANZHONG_WAR_TIER_3_TECHS,
  HANZHONG_WAR_TIER_4_TECHS,
  HANZHONG_WAR_TIER_5_TECHS,
  HANZHONG_WAR_TIER_6_TECHS,
  HANZHONG_WAR_TIER_7_TECHS,
} from '../../data/hanzhong-techs';
import { warTierAssetPath, warTierIdByName } from '../utils';
import type { HanzhongWarTierType } from './HanzhongWarTierType';
import { WAR_TIER_TASKS } from './war-tiers-tasks';

const HANZHONG_WAR_TIER_1: HanzhongWarTierType = {
  ...baseInfo('War Tier Lv.1', warTierIdByName),
  bg: '#B9E5E4',
  icon: {
    path: warTierAssetPath('lv1'),
  },
  tasks: WAR_TIER_TASKS[1],
  techs: HANZHONG_WAR_TIER_1_TECHS,
} as const;

const HANZHONG_WAR_TIER_2: HanzhongWarTierType = {
  ...baseInfo('War Tier Lv.2', warTierIdByName),
  bg: '#ADE7F7',
  icon: {
    path: warTierAssetPath('lv2'),
  },
  tasks: WAR_TIER_TASKS[2],
  techs: HANZHONG_WAR_TIER_2_TECHS,
} as const;

const HANZHONG_WAR_TIER_3: HanzhongWarTierType = {
  ...baseInfo('War Tier Lv.3', warTierIdByName),
  bg: '#DBC5FF',
  icon: {
    path: warTierAssetPath('lv3'),
  },
  tasks: WAR_TIER_TASKS[3],
  techs: HANZHONG_WAR_TIER_3_TECHS,
} as const;

const HANZHONG_WAR_TIER_4: HanzhongWarTierType = {
  ...baseInfo('War Tier Lv.4', warTierIdByName),
  bg: '#F5CB87',
  icon: {
    path: warTierAssetPath('lv4'),
  },
  tasks: WAR_TIER_TASKS[4],
  techs: HANZHONG_WAR_TIER_4_TECHS,
} as const;

const HANZHONG_WAR_TIER_5: HanzhongWarTierType = {
  ...baseInfo('War Tier Lv.5', warTierIdByName),
  bg: '#FFD9A8',
  icon: {
    path: warTierAssetPath('lv5'),
  },
  tasks: WAR_TIER_TASKS[5],
  techs: HANZHONG_WAR_TIER_5_TECHS,
} as const;

const HANZHONG_WAR_TIER_6: HanzhongWarTierType = {
  ...baseInfo('War Tier Lv.6', warTierIdByName),
  bg: '#F6E8A4',
  icon: {
    path: warTierAssetPath('lv6'),
  },
  tasks: WAR_TIER_TASKS[6],
  techs: HANZHONG_WAR_TIER_6_TECHS,
} as const;

const HANZHONG_WAR_TIER_7: HanzhongWarTierType = {
  ...baseInfo('War Tier Lv.7', warTierIdByName),
  bg: '#FFFCA6',
  icon: {
    path: warTierAssetPath('lv7'),
  },
  tasks: [],
  techs: HANZHONG_WAR_TIER_7_TECHS,
} as const;

export const HANZHONG_WAR_TIERS: HanzhongWarTierType[] = [
  HANZHONG_WAR_TIER_1,
  HANZHONG_WAR_TIER_2,
  HANZHONG_WAR_TIER_3,
  HANZHONG_WAR_TIER_4,
  HANZHONG_WAR_TIER_5,
  HANZHONG_WAR_TIER_6,
  HANZHONG_WAR_TIER_7,
] as const;
