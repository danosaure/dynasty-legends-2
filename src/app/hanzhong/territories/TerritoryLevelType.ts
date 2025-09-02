import type { BaseIDType } from '../../types';
import type { HanzhongTerritoryResourceType } from './TerritoryResourceType';

export type HanzhongTerritoryLevelType = BaseIDType & {
  tacticalPoints: number;
  earnings: HanzhongTerritoryResourceType[];
};
