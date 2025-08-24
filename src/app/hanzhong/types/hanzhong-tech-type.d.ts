import type { BaseIDType } from '../../types';
import type { HanzhongTechLevelType } from './hanzhong-tech-level-type';

export type HanzhongTechType = BaseIDType & {
  assetPath: string;
  label: string;
  description: string;
  levels: HanzhongTechLevelType[];
};
