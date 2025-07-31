import type { HanzhongTimerEstimationData } from '../TimerEstimation';
import { calculateTimeNeededForResource } from './calculate-time-needed-for-resource';

export const calculateTimeNeededForResources = (
  inventory: HanzhongTimerEstimationData,
  needed: HanzhongTimerEstimationData,
  rates: HanzhongTimerEstimationData
): number | null => {
  const dataToProcess = [
    [inventory.lumber, needed.lumber, rates.lumber],
    [inventory.grains, needed.grains, rates.grains],
    [inventory.iron, needed.iron, rates.iron],
  ];

  const [timeForLumber, timeForGrains, timeForIron] = dataToProcess.map(([currentInventory, quantityNeeded, productionRate]) =>
    calculateTimeNeededForResource(currentInventory, quantityNeeded, productionRate)
  );

  if (timeForLumber === null || timeForGrains === null || timeForIron === null) {
    return null;
  }

  return Math.max(timeForLumber, timeForGrains, timeForIron);
};
