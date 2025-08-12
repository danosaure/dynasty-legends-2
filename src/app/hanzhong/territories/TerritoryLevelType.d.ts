import type { BaseIDType, PotentiallyUnknownNumberType } from '../../types';
import type { HanzhongTerritoryResourceType } from './TerritoryResourceType';

export type HanzhongTerritoryLevelType = BaseIDType & {
  tacticalPoints: PotentiallyUnknownNumberType;
  earnings: HanzhongTerritoryResourceType[];
};
