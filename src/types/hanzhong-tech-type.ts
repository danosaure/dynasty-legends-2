import type { BaseIDType } from './base-id-type';
import type { HanzhongTechLevelType } from './hanzhong-tech-level-type';

export type HanzhongTechType = BaseIDType & {
  label: string;
  description: string;
  levels: HanzhongTechLevelType[];
};
