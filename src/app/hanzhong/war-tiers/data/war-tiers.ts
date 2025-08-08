import { baseInfo } from '../../data/base-info';
import type { HanzhongWarTierRequirement } from '../../requirements/validators';
import { HANZHONG_WAR_TIER_TECHS } from '../../techs';

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
  techs: HANZHONG_WAR_TIER_TECHS[1],
} as const;

const HANZHONG_WAR_TIER_2: HanzhongWarTierType = {
  ...baseInfo('War Tier Lv.2', warTierIdByName),
  bg: '#ADE7F7',
  icon: {
    path: warTierAssetPath('lv2'),
  },
  tasks: WAR_TIER_TASKS[2],
  techs: HANZHONG_WAR_TIER_TECHS[2],
  requirement: {
    section: 'warTiers',
    type: 'completed',
    value: 1,
    requirementIds: [warTierIdByName('War Tier Lv.1')],
  } as HanzhongWarTierRequirement,
} as const;

const HANZHONG_WAR_TIER_3: HanzhongWarTierType = {
  ...baseInfo('War Tier Lv.3', warTierIdByName),
  bg: '#DBC5FF',
  icon: {
    path: warTierAssetPath('lv3'),
  },
  tasks: WAR_TIER_TASKS[3],
  techs: HANZHONG_WAR_TIER_TECHS[3],
  requirement: {
    section: 'warTiers',
    type: 'completed',
    value: 1,
    requirementIds: [warTierIdByName('War Tier Lv.2')],
  } as HanzhongWarTierRequirement,
} as const;

const HANZHONG_WAR_TIER_4: HanzhongWarTierType = {
  ...baseInfo('War Tier Lv.4', warTierIdByName),
  bg: '#F5CB87',
  icon: {
    path: warTierAssetPath('lv4'),
  },
  tasks: WAR_TIER_TASKS[4],
  techs: HANZHONG_WAR_TIER_TECHS[4],
  requirement: {
    section: 'warTiers',
    type: 'completed',
    value: 1,
    requirementIds: [warTierIdByName('War Tier Lv.3')],
  } as HanzhongWarTierRequirement,
} as const;

const HANZHONG_WAR_TIER_5: HanzhongWarTierType = {
  ...baseInfo('War Tier Lv.5', warTierIdByName),
  bg: '#FFD9A8',
  icon: {
    path: warTierAssetPath('lv5'),
  },
  tasks: WAR_TIER_TASKS[5],
  techs: HANZHONG_WAR_TIER_TECHS[5],
  requirement: {
    section: 'warTiers',
    type: 'completed',
    value: 1,
    requirementIds: [warTierIdByName('War Tier Lv.4')],
  } as HanzhongWarTierRequirement,
} as const;

const HANZHONG_WAR_TIER_6: HanzhongWarTierType = {
  ...baseInfo('War Tier Lv.6', warTierIdByName),
  bg: '#F6E8A4',
  icon: {
    path: warTierAssetPath('lv6'),
  },
  tasks: WAR_TIER_TASKS[6],
  techs: HANZHONG_WAR_TIER_TECHS[6],
  requirement: {
    section: 'warTiers',
    type: 'completed',
    value: 1,
    requirementIds: [warTierIdByName('War Tier Lv.5')],
  } as HanzhongWarTierRequirement,
} as const;

const HANZHONG_WAR_TIER_7: HanzhongWarTierType = {
  ...baseInfo('War Tier Lv.7', warTierIdByName),
  bg: '#FFFCA6',
  icon: {
    path: warTierAssetPath('lv7'),
  },
  tasks: WAR_TIER_TASKS[7],
  techs: HANZHONG_WAR_TIER_TECHS[7],
  requirement: {
    section: 'warTiers',
    type: 'completed',
    value: 1,
    requirementIds: [warTierIdByName('War Tier Lv.6')],
  } as HanzhongWarTierRequirement,
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
