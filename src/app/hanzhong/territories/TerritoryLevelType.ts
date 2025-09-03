import type { BaseIDType } from '../../types';
import type { HanzhongTerritoryLevelEarningsType } from './TerritoryLevelEarningsType';

export type HanzhongTerritoryLevelType = BaseIDType & {
  tacticalPoints: number;
  earnings: HanzhongTerritoryLevelEarningsType[];
};
