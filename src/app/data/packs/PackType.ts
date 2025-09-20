import type { RewardType } from '../RewardType';

export type PackType = {
  type: 'Pack';
  name: string;
  items: RewardType[];
};
