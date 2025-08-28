import type { BaseIDType } from '../../types';

import type { HanzhongTerritoryResourceType } from './hanzhong-territory-resource-type';

export type HanzhongTerritoryLevelType = BaseIDType & {
  tacticalPoints: number;
  earnings: HanzhongTerritoryResourceType[];
};
