import type { HanzhongBaseRequirement } from '../requirements';

export type HanzhongTerritoryRequirement = HanzhongBaseRequirement & {
  section: 'territories';
  type: 'sum';
};
