import type { PotentiallyUnknownNumberType } from './potentially-unknown-number-type';

export type HanzhongBonusType = {
  atk?: number;
  def?: number;
  hp?: number;
  woodRate?: number;
  grainsRate?: number;
  ironRate?: number;
  territoryCap?: PotentiallyUnknownNumberType;
  description?: string;
};
