import { HANZHONG_TERRITORY_IDS } from '../../constants';
import { baseInfo } from '../../data/base-info';
import type { HanzhongTerritoryRequirement } from '../../territories/TerritoryRequirement';
import { warTierTaskIdByName } from '../utils';
import type { HanzhongWarTierTaskType } from './WarTierTaskType';

const LOGGING_PIONEER: HanzhongWarTierTaskType = {
  ...baseInfo('Logging Pioneer', warTierTaskIdByName),
  description: 'Occupy 2 Lumber territories',
  requirement: {
    section: 'territories',
    type: 'sum',
    value: 2,
    requirementIds: [
      HANZHONG_TERRITORY_IDS.LUMBER_MILL__1,
      HANZHONG_TERRITORY_IDS.LUMBER_MILL__2,
      HANZHONG_TERRITORY_IDS.LUMBER_MILL__3,
      HANZHONG_TERRITORY_IDS.LUMBER_MILL__4,
      HANZHONG_TERRITORY_IDS.LUMBER_MILL__5,
      HANZHONG_TERRITORY_IDS.LUMBER_MILL__6,
      HANZHONG_TERRITORY_IDS.LUMBER_MILL__7,
      HANZHONG_TERRITORY_IDS.LUMBER_MILL__8,
      HANZHONG_TERRITORY_IDS.LUMBER_MILL__9,
    ],
  } as HanzhongTerritoryRequirement,
} as const;

const FARMING_PIONEER: HanzhongWarTierTaskType = {
  ...baseInfo('Farming Pioneer', warTierTaskIdByName),
  description: 'Occupy 2 Grains territories',
  requirement: {
    section: 'territories',
    type: 'sum',
    value: 2,
    requirementIds: [
      HANZHONG_TERRITORY_IDS.GRANARY__1,
      HANZHONG_TERRITORY_IDS.GRANARY__2,
      HANZHONG_TERRITORY_IDS.GRANARY__3,
      HANZHONG_TERRITORY_IDS.GRANARY__4,
      HANZHONG_TERRITORY_IDS.GRANARY__5,
      HANZHONG_TERRITORY_IDS.GRANARY__6,
      HANZHONG_TERRITORY_IDS.GRANARY__7,
      HANZHONG_TERRITORY_IDS.GRANARY__8,
      HANZHONG_TERRITORY_IDS.GRANARY__9,
    ],
  } as HanzhongTerritoryRequirement,
} as const;

const MINING_PIONEER: HanzhongWarTierTaskType = {
  ...baseInfo('Mining Pioneer', warTierTaskIdByName),
  description: 'Occupy 2 Iron territories',
} as const;

const FREE_PATHS: HanzhongWarTierTaskType = {
  ...baseInfo('Free Paths', warTierTaskIdByName),
  description: 'Upgrade Tech Free Paths to Lv.1',
} as const;

const BANDITS_TERMINATOR_I: HanzhongWarTierTaskType = {
  ...baseInfo('Bandits Terminator I', warTierTaskIdByName),
  description: 'Defeat Bandits 1 times',
} as const;

export const WAR_TIER_1__TASKS: HanzhongWarTierTaskType[] = [
  LOGGING_PIONEER,
  FARMING_PIONEER,
  MINING_PIONEER,
  FREE_PATHS,
  BANDITS_TERMINATOR_I,
] as const;

const LOGGING_ELITE: HanzhongWarTierTaskType = {
  ...baseInfo('Logging Elite', warTierTaskIdByName),
  description: 'Occupy 3 Lumber territories',
} as const;

const FARMING_ELITE: HanzhongWarTierTaskType = {
  ...baseInfo('Farming Elite', warTierTaskIdByName),
  description: 'Occupy 3 Grains territories',
} as const;

const MINING_ELITE: HanzhongWarTierTaskType = {
  ...baseInfo('Mining Elite', warTierTaskIdByName),
  description: 'Occupy 3 Iron territories',
} as const;

const LAND_CONQUEROR_I: HanzhongWarTierTaskType = {
  ...baseInfo('Land Conqueror I', warTierTaskIdByName),
  description: 'Occupy 2 Lv.3 or above territories',
} as const;

const BANDITS_TERMINATOR_II: HanzhongWarTierTaskType = {
  ...baseInfo('Bandits Terminator II', warTierTaskIdByName),
  description: 'Defeat Bandits 2 times',
} as const;

const WAR_TIER_2__TASKS: HanzhongWarTierTaskType[] = [
  LOGGING_ELITE,
  FARMING_ELITE,
  MINING_ELITE,
  LAND_CONQUEROR_I,
  BANDITS_TERMINATOR_II,
] as const;

const TERRITORY_PLUNDERER_I: HanzhongWarTierTaskType = {
  ...baseInfo('Territory Plunderer I', warTierTaskIdByName),
  description: 'Attack territories 10 times (Individual Territory, Strategic City, and Hanzhong City will be counted)',
} as const;

const LAND_CONQUEROR_II: HanzhongWarTierTaskType = {
  ...baseInfo('Land Conqueror II', warTierTaskIdByName),
  description: 'Occupy 2 Lv.4 or above territories',
} as const;

const OVERALL_BOOST: HanzhongWarTierTaskType = {
  ...baseInfo('Overall Boost', warTierTaskIdByName),
  description: 'Upgrade Tech Diligent Warrior I to Lv.5',
} as const;

const TECH_MASTER_I: HanzhongWarTierTaskType = {
  ...baseInfo('Tech Master I', warTierTaskIdByName),
  description: 'Activate 8 Techs',
} as const;

const WAR_TIER_3__TASKS: HanzhongWarTierTaskType[] = [
  TERRITORY_PLUNDERER_I,
  LAND_CONQUEROR_II,
  OVERALL_BOOST,
  TECH_MASTER_I,
] as const;

const TERRITORY_PLUNDERER_II: HanzhongWarTierTaskType = {
  ...baseInfo('Territory Plunderer II', warTierTaskIdByName),
  description: 'Attack territories 15 times (Individual Territory, Strategic City, and Hanzhong City will be counted)',
} as const;

const LAND_CONQUEROR_III: HanzhongWarTierTaskType = {
  ...baseInfo('Land Conqueror III', warTierTaskIdByName),
  description: 'Occupy 2 Lv.5 or above territories',
} as const;

const SIEGE_I: HanzhongWarTierTaskType = {
  ...baseInfo('Siege I', warTierTaskIdByName),
  description: 'Guild occupies 1 Strategic Cities (Hanzhong City excluded)',
} as const;

const BANDITS_TERMINATOR_III: HanzhongWarTierTaskType = {
  ...baseInfo('Bandits Terminator III', warTierTaskIdByName),
  description: 'Defeat Bandits 4 times',
} as const;

const WAR_TIER_4__TASKS: HanzhongWarTierTaskType[] = [
  TERRITORY_PLUNDERER_II,
  LAND_CONQUEROR_III,
  SIEGE_I,
  BANDITS_TERMINATOR_III,
] as const;

const LAND_CONQUEROR_IV: HanzhongWarTierTaskType = {
  ...baseInfo('Land Conqueror IV', warTierTaskIdByName),
  description: 'Occupy 2 Lv.6 or above territories',
} as const;

const SIEGE_II: HanzhongWarTierTaskType = {
  ...baseInfo('Siege II', warTierTaskIdByName),
  description: 'Guild occupies 2 Strategic Cities (Hanzhong City excluded)',
} as const;

const DRAGONS_ATTENDANT: HanzhongWarTierTaskType = {
  ...baseInfo("Dragon's Attendant", warTierTaskIdByName),
  description: 'Upgrade Tech Formation Expansion to Lv.1',
} as const;

const TECH_MASTER_II: HanzhongWarTierTaskType = {
  ...baseInfo('Tech Master II', warTierTaskIdByName),
  description: 'Activate 14 Techs',
} as const;

const WAR_TIER_5__TASKS: HanzhongWarTierTaskType[] = [LAND_CONQUEROR_IV, SIEGE_II, DRAGONS_ATTENDANT, TECH_MASTER_II] as const;

const TERRITORY_PLUNDERER_III: HanzhongWarTierTaskType = {
  ...baseInfo('Territory Plunderer III', warTierTaskIdByName),
  description: 'Attack territories 25 times (Individual Territory, Strategic City, and Hanzhong City will be counted)',
} as const;

const LAND_CONQUEROR_V: HanzhongWarTierTaskType = {
  ...baseInfo('Land Conqueror V', warTierTaskIdByName),
  description: 'Occupy 5 Lv.6 or above territories',
} as const;

const SIEGE_III: HanzhongWarTierTaskType = {
  ...baseInfo('Siege III', warTierTaskIdByName),
  description: 'Guild occupies 3 Strategic Cities (Hazhong City excluded)',
} as const;

const BANDITS_TERMINATOR_IV: HanzhongWarTierTaskType = {
  ...baseInfo('Bandits Terminator IV', warTierTaskIdByName),
  description: 'Defeat Bandits 6 times',
} as const;

const TECH_MASTER_III: HanzhongWarTierTaskType = {
  ...baseInfo('Tech Master III', warTierTaskIdByName),
  description: 'Activate 18 Techs',
} as const;

const WAR_TIER_6__TASKS: HanzhongWarTierTaskType[] = [
  TERRITORY_PLUNDERER_III,
  LAND_CONQUEROR_V,
  SIEGE_III,
  BANDITS_TERMINATOR_IV,
  TECH_MASTER_III,
] as const;

const TERRITORY_PLUNDERER_IV: HanzhongWarTierTaskType = {
  ...baseInfo('Territory Plunderer IV', warTierTaskIdByName),
  description: 'Attack territories 40 times (Individual Territory, Strategic City, and Hanzhong City will be counted)',
} as const;

const LAND_CONQUEROR_VI: HanzhongWarTierTaskType = {
  ...baseInfo('Land Conqueror VI', warTierTaskIdByName),
  description: 'Occupy 10 Lv.6 or above territories',
} as const;

const SIEGE_IV: HanzhongWarTierTaskType = {
  ...baseInfo('Siege IV', warTierTaskIdByName),
  description: 'Guild occupies 5 Strategic Cities (Hanzhong City excluded)',
} as const;

const PACIFICATOR: HanzhongWarTierTaskType = {
  ...baseInfo('Pacificator', warTierTaskIdByName),
  description: 'Guild occupies Hanzhong City 1 times',
} as const;

const WAR_TIER_7__TASKS: HanzhongWarTierTaskType[] = [TERRITORY_PLUNDERER_IV, LAND_CONQUEROR_VI, SIEGE_IV, PACIFICATOR];

export const WAR_TIER_TASKS: Record<number, HanzhongWarTierTaskType[]> = {
  [1]: WAR_TIER_1__TASKS,
  [2]: WAR_TIER_2__TASKS,
  [3]: WAR_TIER_3__TASKS,
  [4]: WAR_TIER_4__TASKS,
  [5]: WAR_TIER_5__TASKS,
  [6]: WAR_TIER_6__TASKS,
  [7]: WAR_TIER_7__TASKS,
} as const;
