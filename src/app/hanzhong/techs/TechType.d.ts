import type { BaseIDType } from '../../types';
import type { HanzhongTechLevelType } from './TechLevelType';

export type HanzhongTechType = BaseIDType & {
  assetPath: string;
  label: string;
  description: string;
  levels: HanzhongTechLevelType[];
};
