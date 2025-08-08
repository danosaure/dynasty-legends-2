import type { HanzhongCityRequirement } from '../cities/types/CityRequirement';
import type { HanzhongTerritoryRequirement } from '../territories/TerritoryRequirement';

export type HanzhongRequirement = HanzhongCityRequirement | HanzhongTerritoryRequirement;
