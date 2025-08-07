const SECTION = 'hanzhong';

const LEVEL_1 = 'lv1';
const LEVEL_2 = 'lv2';
const LEVEL_3 = 'lv3';
const LEVEL_4 = 'lv4';
const LEVEL_5 = 'lv5';
const LEVEL_6 = 'lv6';
const LEVEL_7 = 'lv7';
const LEVEL_8 = 'lv8';
const LEVEL_9 = 'lv9';

const HANZHONG_TERRITORY = `${SECTION}--territory`;
export const HANZHONG_TERRITORY_LEVEL_IDS = {
  LEVEL__1: `${HANZHONG_TERRITORY}--${LEVEL_1}`,
  LEVEL__2: `${HANZHONG_TERRITORY}--${LEVEL_2}`,
  LEVEL__3: `${HANZHONG_TERRITORY}--${LEVEL_3}`,
  LEVEL__4: `${HANZHONG_TERRITORY}--${LEVEL_4}`,
  LEVEL__5: `${HANZHONG_TERRITORY}--${LEVEL_5}`,
  LEVEL__6: `${HANZHONG_TERRITORY}--${LEVEL_6}`,
  LEVEL__7: `${HANZHONG_TERRITORY}--${LEVEL_7}`,
  LEVEL__8: `${HANZHONG_TERRITORY}--${LEVEL_8}`,
  LEVEL__9: `${HANZHONG_TERRITORY}--${LEVEL_9}`,
};

const LUMBER_MILL = 'lumber-mill';
const GRANARY = 'granary';
const IRON_MINE = 'iron-mine';

export const HANZHONG_TERRITORY_IDS = {
  LUMBER_MILL__1: `${HANZHONG_TERRITORY}--${LUMBER_MILL}--${LEVEL_1}`,
  LUMBER_MILL__2: `${HANZHONG_TERRITORY}--${LUMBER_MILL}--${LEVEL_2}`,
  LUMBER_MILL__3: `${HANZHONG_TERRITORY}--${LUMBER_MILL}--${LEVEL_3}`,
  LUMBER_MILL__4: `${HANZHONG_TERRITORY}--${LUMBER_MILL}--${LEVEL_4}`,
  LUMBER_MILL__5: `${HANZHONG_TERRITORY}--${LUMBER_MILL}--${LEVEL_5}`,
  LUMBER_MILL__6: `${HANZHONG_TERRITORY}--${LUMBER_MILL}--${LEVEL_6}`,
  LUMBER_MILL__7: `${HANZHONG_TERRITORY}--${LUMBER_MILL}--${LEVEL_7}`,
  LUMBER_MILL__8: `${HANZHONG_TERRITORY}--${LUMBER_MILL}--${LEVEL_8}`,
  LUMBER_MILL__9: `${HANZHONG_TERRITORY}--${LUMBER_MILL}--${LEVEL_9}`,

  GRANARY__1: `${HANZHONG_TERRITORY}--${GRANARY}--${LEVEL_1}`,
  GRANARY__2: `${HANZHONG_TERRITORY}--${GRANARY}--${LEVEL_2}`,
  GRANARY__3: `${HANZHONG_TERRITORY}--${GRANARY}--${LEVEL_3}`,
  GRANARY__4: `${HANZHONG_TERRITORY}--${GRANARY}--${LEVEL_4}`,
  GRANARY__5: `${HANZHONG_TERRITORY}--${GRANARY}--${LEVEL_5}`,
  GRANARY__6: `${HANZHONG_TERRITORY}--${GRANARY}--${LEVEL_6}`,
  GRANARY__7: `${HANZHONG_TERRITORY}--${GRANARY}--${LEVEL_7}`,
  GRANARY__8: `${HANZHONG_TERRITORY}--${GRANARY}--${LEVEL_8}`,
  GRANARY__9: `${HANZHONG_TERRITORY}--${GRANARY}--${LEVEL_9}`,

  IRON_MINE__1: `${HANZHONG_TERRITORY}--${IRON_MINE}--${LEVEL_1}`,
  IRON_MINE__2: `${HANZHONG_TERRITORY}--${IRON_MINE}--${LEVEL_2}`,
  IRON_MINE__3: `${HANZHONG_TERRITORY}--${IRON_MINE}--${LEVEL_3}`,
  IRON_MINE__4: `${HANZHONG_TERRITORY}--${IRON_MINE}--${LEVEL_4}`,
  IRON_MINE__5: `${HANZHONG_TERRITORY}--${IRON_MINE}--${LEVEL_5}`,
  IRON_MINE__6: `${HANZHONG_TERRITORY}--${IRON_MINE}--${LEVEL_6}`,
  IRON_MINE__7: `${HANZHONG_TERRITORY}--${IRON_MINE}--${LEVEL_7}`,
  IRON_MINE__8: `${HANZHONG_TERRITORY}--${IRON_MINE}--${LEVEL_8}`,
  IRON_MINE__9: `${HANZHONG_TERRITORY}--${IRON_MINE}--${LEVEL_9}`,
};

const HANZHONG_TECH = `${SECTION}--tech`;
export const HANZHONG_TECH_IDS = {
  //  ----- War Tier 1 -----
  ATTACK_TRAINING_1: `${HANZHONG_TECH}--attack-training-1`,
  DEFENSE_TRAINING_1: 'hanzhong--tech--defense-training-1',
  TENACITY_TRAINING_1: 'hanzhong--tech--tenacity-training-1',
  FREE_PATHS: 'hanzhong--tech--free-paths',
  //  ----- War Tier 2 -----
  LUMBER_MILL: 'hanzhong--tech--lumber-mill',
  GRANARY: 'hanzhong--tech--granary',
  IRON_FOUNDRY: 'hanzhong--tech--iron-foundry',
  MIGHTY_GENERALS: 'hanzhong--tech--mighty-generals',
  //  ----- War Tier 3 -----
  DILIGENT_WARRIOR_1: 'hanzhong--tech--diligent-warrior-1',
  TERRITORY_EXPANSION: 'hanzhong--tech--territory-expansion',
  //  ----- War Tier 4 -----
  ATTACK_TRAINING_2: 'hanzhong--tech--attack-training-2',
  DEFENSE_TRAINING_2: 'hanzhong--tech--defense-training-2',
  TENACITY_TRAINING_2: 'hanzhong--tech--tenacity-training-2',
  //  ----- War Tier 5 -----
  OVERALL_DEVELOPMENT: 'hanzhong--tech--overall-development',
  UNITED_STRENGTH: 'hanzhong--tech--united-strength',
  FORMATION_EXPANSION: 'hanzhong--tech--formation-expansion',
  //  ----- War Tier 6 -----
  SPECIAL_TRAINING__VANGUARD_CAMP: 'hanzhong--tech--special-training--vanguard-camp',
  SPECIAL_TRAINING__VALIANT_CAVALRY: 'hanzhong--tech--special-training--valiant-cavalry',
  SPECIAL_TRAINING__ROYAL_GUARDS: 'hanzhong--tech--special-training-royal-guards',
  REHABILITATION: 'hanzhong--tech--rehabilitation',
  //  ----- War Tier 7 -----
  DILIGENT_WARRIOR_3: 'hanzhong--tech--diligent-warrior-3',
};

export type HanzhongFormationTeamType = [string, string];
