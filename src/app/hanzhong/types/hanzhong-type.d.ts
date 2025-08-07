import type { HanzhongBanditsType } from './hanzhong-bandits-type';
import type { HanzhongTerritoryType } from './hanzhong-territory-type';

export type HanzhongType = {
  territories: HanzhongTerritoryType;
  bandits: HanzhongBanditsType;
};
