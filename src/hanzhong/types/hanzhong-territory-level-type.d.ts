import type { PotentiallyUnknownNumberType } from './potentially-unknown-number-type';

export type HanzhongTerritoryLevelType = {
  tacticalPoints: PotentiallyUnknownNumberType;
  earnings: number;
  team: {
    green: PotentiallyUnknownNumberType;
    orange: [PotentiallyUnknownNumberType, PotentiallyUnknownNumberType];
    red: PotentiallyUnknownNumberType;
    factionBonus: PotentiallyUnknownNumberType;
  };
};
