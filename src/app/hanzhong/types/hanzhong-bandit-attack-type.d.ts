import type { BaseIDType, PotentiallyUnknownNumberType } from '../../types';

export type HanzhongBanditAttackType = BaseIDType & {
  day: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  attack: 1 | 2;
};
