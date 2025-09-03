import type { HanzhongBanditsRequirement } from '../bandits';
import type { HanzhongCitiesRequirement } from '../cities';
import type { HanzhongTechRequirement } from '../techs';
import type { HanzhongTerritoryRequirement } from '../territories';

export type HanzhongBaseRequirement = {
  id: string;
};

export type HanzhongRequirement =
  | HanzhongCitiesRequirement
  | HanzhongTechRequirement
  | HanzhongBanditsRequirement
  | HanzhongTerritoryRequirement;
