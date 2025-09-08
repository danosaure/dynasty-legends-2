import type { RequirementsCache } from '../requirements/RequirementsCache';
import type { HanzhongInfoDataType } from './hanzhong-info-data-type';

export type HanzhongContextCache = {
  requirements: RequirementsCache;
  tacticalPoints: HanzhongInfoDataType[];
};
