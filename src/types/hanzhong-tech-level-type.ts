import type { HanzhongBonusType } from './hanzhong-bonus-type';
import type { HanzhongTechResourceType } from './hanzhong-tech-resource-type';

export type HanzhongTechLevelType = {
  resources: HanzhongTechResourceType;
  bonuses: HanzhongBonusType;
};
