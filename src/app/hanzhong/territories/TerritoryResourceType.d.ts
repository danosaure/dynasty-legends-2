import type { BaseIDType } from '../../types';
import type { HanzhongBonusType } from '../types';

export type HanzhongTerritoryResourceType = BaseIDType & {
  earnings: HanzhongBonusType;
};
