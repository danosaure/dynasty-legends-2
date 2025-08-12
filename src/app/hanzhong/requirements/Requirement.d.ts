import type { HanzhongBanditRequirement } from '../bandits';
import type { HanzhongCityRequirement } from '../cities';
import type { HanzhongTechRequirement } from '../techs';
import type { HanzhongTerritoryRequirement } from '../territories';
import type { HanzhongWarTierTaskRequirement } from '../war-tier-tasks';
import type { HanzhongWarTierRequirement } from '../war-tiers';

export type HanzhongRequirement =
  | HanzhongBanditRequirement
  | HanzhongCityRequirement
  | HanzhongTerritoryRequirement
  | HanzhongTechRequirement
  | HanzhongWarTierRequirement
  | HanzhongWarTierTaskRequirement;
