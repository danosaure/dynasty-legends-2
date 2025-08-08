import type { HanzhongBaseRequirement } from '../requirements';

export type HanzhongTerritoryRequirement = Omit<HanzhongBaseRequirement, 'section' | 'type'> & {
  section: 'territories';
  type: 'sum';
};
