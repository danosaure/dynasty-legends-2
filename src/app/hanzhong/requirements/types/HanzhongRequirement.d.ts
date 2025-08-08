import type { HanzhongCityRequirement } from '../cities/types/CityRequirement';
import type { HanzhongTerritoryRequirement } from '../territories/TerritoryRequirement';
import type { HanzhongWarTierRequirement } from './validators';

export type HanzhongRequirement = HanzhongCityRequirement | HanzhongTerritoryRequirement | HanzhongWarTierRequirement;
