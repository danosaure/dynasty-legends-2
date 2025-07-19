import type { BaseIDType } from '../../types';

import type { PotentiallyUnknownNumberType } from './potentially-unknown-number-type';

export type HanzhongTerritoryLevelType = BaseIDType & {
  tacticalPoints: PotentiallyUnknownNumberType;
  earnings: HanzhongTerritoryResourceType[];
  team: {
    green: PotentiallyUnknownNumberType;
    orange: [PotentiallyUnknownNumberType, PotentiallyUnknownNumberType];
    red: PotentiallyUnknownNumberType;
    factionBonus: PotentiallyUnknownNumberType;
  };
};
