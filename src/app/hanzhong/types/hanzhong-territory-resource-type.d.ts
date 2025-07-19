import type { BaseIDType } from '../../types';

import type { HanzhongBonusType } from './hanzhong-bonus-type';

export type HanzhongTerritoryResourceType = BaseIDType & {
  earnings: HanzhongBonusType;
};
