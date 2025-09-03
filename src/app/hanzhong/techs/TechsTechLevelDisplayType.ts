import type { HanzhongBonusType } from '../types';
import type { HanzhongTechResourceType } from './TechResourceType';

export type HanzhongTechsTechLevelDisplayType = {
  level: number;
  resources: HanzhongTechResourceType;
  bonuses: HanzhongBonusType;
};
