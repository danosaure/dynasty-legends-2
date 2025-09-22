import type { ItemDB } from '../items-db';
import type { RewardType } from '../RewardType';

export type PackType = ItemDB & {
  type: 'Pack';
  items: RewardType[];
};
