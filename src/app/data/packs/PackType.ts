import type { BaseItemType } from '../../types';
import type { RewardType } from '../RewardType';

export type PackType = BaseItemType & {
  items: RewardType[];
};
