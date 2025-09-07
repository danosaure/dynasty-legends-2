import type { BaseIDType, IconType } from '../../types';
import type { HanzhongBonusType } from '../types';
import type { HanzhongTerritoryResourceType } from './TerritoryResourceType';

export type HanzhongTerritoryLevelEarningsType = BaseIDType & {
  resource: HanzhongTerritoryResourceType;
  earnings: HanzhongBonusType;
  avatar: IconType;
};
