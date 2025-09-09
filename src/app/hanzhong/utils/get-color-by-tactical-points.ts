import { COLORS } from '../../constants';
import type { HanzhongInfoDataType } from '../types';

const THRESHOLD = 0.7;

export const getColorByTacticalPoints = (formationsTacticalPoints: HanzhongInfoDataType[], targetTacticalPoint: number): string => {
  const minTacticalPoints = Math.min(...formationsTacticalPoints.map<number>((info) => info.value));
  if (minTacticalPoints >= targetTacticalPoint) {
    return COLORS.OK;
  } else if (minTacticalPoints / THRESHOLD >= targetTacticalPoint) {
    return COLORS.WARNING;
  } else {
    return COLORS.ERROR;
  }
};
