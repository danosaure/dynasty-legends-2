import type { BaseIDType } from './base-id-type';
import type { HanzhongTechLevelsType } from './hanzhong-tech-levels-type';

export type HanzhongTechType = BaseIDType & {
  label: string;
  description: string;
  levels: HanzhongTechLevelsType;
};
