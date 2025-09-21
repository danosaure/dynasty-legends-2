import type { ItemTypeType } from './ItemTypeType';
import { convertRewardType, type RewardType } from './RewardType';

export const convertNamesToRewards = (itemType: ItemTypeType, names: string[], count: number = 1): RewardType[] =>
  convertRewardType(names.map((name) => [itemType, name, count]));
