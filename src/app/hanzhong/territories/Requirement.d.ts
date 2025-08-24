//
//    Types
//

import type { HanzhongRequirementBase } from '../requirements';

export type HanzhongTerritoryLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type HanzhongTerritoryBaseRequirement = HanzhongRequirementBase & {
  section: 'territories';
};

export type HanzhongTerritoryTypeRequirement = HanzhongTerritoryBaseRequirement & {
  type: 'Lumber' | 'Grains' | 'Iron';
  value: number;
};

export type HanzhongTerritoryLevelRequirement = HanzhongTerritoryBaseRequirement & {
  type: 'level';
  level: HanzhongTerritoryLevel;
  value: number;
};

export type HanzhongTerritoryPlunderRequirement = HanzhongTerritoryBaseRequirement & {
  type: 'plunder';
  value: number;
};

export type HanzhongTerritoryRequirement =
  | HanzhongTerritoryTypeRequirement
  | HanzhongTerritoryLevelRequirement
  | HanzhongTerritoryPlunderRequirement;
