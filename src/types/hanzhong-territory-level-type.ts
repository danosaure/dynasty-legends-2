import type { HanzhongTacticalPointsType } from './hanzhong-tactical-points-type';

export type HanzhongTerritoryLevelType = {
  tacticalPoints: HanzhongTacticalPointsType;
  earnings: number;
  team: {
    green: HanzhongTacticalPointsType;
    orange: [HanzhongTacticalPointsType, HanzhongTacticalPointsType];
    red: HanzhongTacticalPointsType;
    factionBonus: HanzhongTacticalPointsType;
  };
};
