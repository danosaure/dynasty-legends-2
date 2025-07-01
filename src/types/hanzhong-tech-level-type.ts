import { HanzhongTechBonusType } from './hanzhong-tech-bonus-type';
import { HanzhongTechResourceType } from './hanzhong-tech-resource-type';

export type HanzhongTechLevelType = {
  resources: HanzhongTechResourceType;
  bonuses: HanzhongTechBonusType;
};
