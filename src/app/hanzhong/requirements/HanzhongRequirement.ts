import type { HanzhongBanditsRequirement } from '../bandits';
import type { HanzhongCitiesRequirement } from '../cities';
import type { HanzhongTechRequirement } from '../techs';

export type HanzhongBaseRequirement = {
  id: string;
};

export type HanzhongRequirement = HanzhongCitiesRequirement | HanzhongTechRequirement | HanzhongBanditsRequirement;
