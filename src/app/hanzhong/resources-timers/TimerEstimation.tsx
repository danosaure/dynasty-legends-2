import { HanzhongTimerDisplay } from './TimerDisplay';
import { calculateTimeNeededForResources } from './utils/calculate-time-needed-for-resources';

export interface HanzhongTimerEstimationData {
  lumber: number;
  grains: number;
  iron: number;
}

export type HanzhongTimerEstimationProps = {
  inventory: HanzhongTimerEstimationData;
  resources: HanzhongTimerEstimationData;
  rates: HanzhongTimerEstimationData;
};

export const HanzhongTimerEstimation = ({ inventory, resources, rates }: HanzhongTimerEstimationProps) => {
  const longestTime = calculateTimeNeededForResources(inventory, resources, rates);

  return <HanzhongTimerDisplay minutes={longestTime} />;
};
