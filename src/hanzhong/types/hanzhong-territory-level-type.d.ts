import type { HanzhongBonusType } from './hanzhong-bonus-type';
import type { PotentiallyUnknownNumberType } from './potentially-unknown-number-type';

export type HanzhongTerritoryResourceType = {
  id: string;
  earnings: HanzhongBonusType;
};

export type HanzhongTerritoryLevelType = {
  id: string;
  tacticalPoints: PotentiallyUnknownNumberType;
  earnings: HanzhongTerritoryResourceType[];
  team: {
    green: PotentiallyUnknownNumberType;
    orange: [PotentiallyUnknownNumberType, PotentiallyUnknownNumberType];
    red: PotentiallyUnknownNumberType;
    factionBonus: PotentiallyUnknownNumberType;
  };
};
