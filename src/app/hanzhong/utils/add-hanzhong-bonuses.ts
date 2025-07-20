import type { HanzhongBonusType } from '../types/hanzhong-bonus-type';

export const addHanzhongBonuses = (a: HanzhongBonusType, b: HanzhongBonusType, times: number = 1): HanzhongBonusType => ({
  atk: (a.atk ?? 0) + (b.atk ?? 0) * times,
  def: (a.def ?? 0) + (b.def ?? 0) * times,
  hp: (a.hp ?? 0) + (b.hp ?? 0) * times,
  woodRate: (a.woodRate ?? 0) + (b.woodRate ?? 0) * times,
  grainsRate: (a.grainsRate ?? 0) + (b.grainsRate ?? 0) * times,
  ironRate: (a.ironRate ?? 0) + (b.ironRate ?? 0) * times,
  territoryCap: (a.territoryCap ?? 0) + (b.territoryCap ?? 0) * times,
});
