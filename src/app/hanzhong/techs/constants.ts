export const NO_TECH_ID = '';

export const LABEL_BY_RESOURCE_ATTRIBUTE: Record<string, string> = {
  lumber: 'Lumber',
  grains: 'Grains',
  iron: 'Iron',
} as const;

export const LABEL_BY_BONUS_ATTRIBUTE: Record<string, string> = {
  atk: 'ATK',
  def: 'DEF',
  hp: 'HP',
  woodRate: 'Wood Rate',
  grainsRate: 'Grains Rate',
  ironRate: 'Iron Rate',
  territoryCap: 'Territory Cap',
  description: 'Description',
};
