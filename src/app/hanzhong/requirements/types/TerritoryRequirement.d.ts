import type { HanzhongBaseRequirement } from './HanzhongBaseRequirement';

export type HanzhongTerritoryRequirement = Omit<HanzhongBaseRequirement, 'section' | 'type'> & {
  section: 'territories';
  type: 'sum';
};
