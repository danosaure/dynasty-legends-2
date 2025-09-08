import type { HanzhongInfoDataType } from '../types';

const THRESHOLD = 0.7;

export const getColorByTacticalPoints = (formationsTacticalPoints: HanzhongInfoDataType[], targetTacticalPoint: number): string => {
  const minTacticalPoints = Math.min(...formationsTacticalPoints.map<number>((info) => info.value));
  if (minTacticalPoints >= targetTacticalPoint) {
    return 'DarkGreen';
  } else if (minTacticalPoints / THRESHOLD >= targetTacticalPoint) {
    return 'DarkOrange';
  } else {
    return 'Red';
  }
};
