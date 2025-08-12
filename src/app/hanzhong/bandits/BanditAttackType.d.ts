import type { BaseIDType } from '../../types';

export type HanzhongBanditAttackDay = 1 | 2 | 3 | 4 | 5 | 6 | 7;
export type HanzhongBanditDayAttack = 1 | 2;

export type HanzhongBanditAttackType = BaseIDType & {
  day: HanzhongBanditAttackDay;
  attack: HanzhongBanditDayAttack;
};
