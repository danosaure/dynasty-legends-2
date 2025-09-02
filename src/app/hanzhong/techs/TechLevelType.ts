import type { HanzhongBonusType } from '../types';
import type { HanzhongTechResourceType } from './TechResourceType';

export type HanzhongTechLevelType = {
  resources: HanzhongTechResourceType;
  bonuses: HanzhongBonusType;
};
