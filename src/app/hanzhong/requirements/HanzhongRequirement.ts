import type { HanzhongBanditsRequirement } from '../bandits';
import type { HanzhongCitiesRequirement } from '../cities';
import type { HanzhongTechRequirement } from '../techs';
import type { HanzhongTerritoryRequirement } from '../territories';

export type HanzhongBaseRequirement = {
  id: string;
};

export type HanzhongUnverifiableRequirement = HanzhongBaseRequirement & {
  section: 'freebie';
  type: 'freebie';
  count: number;
};

export type HanzhongRequirement =
  | HanzhongUnverifiableRequirement
  | HanzhongCitiesRequirement
  | HanzhongTechRequirement
  | HanzhongBanditsRequirement
  | HanzhongTerritoryRequirement;
