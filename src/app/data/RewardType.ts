import type { ItemTypeType } from './ItemTypeType';

export type RewardType = {
  type: ItemTypeType;
  name: string;
  count: number;
};

export type __Data__RewardType = [ItemTypeType, string, number];

export const convertRewardType = (items: __Data__RewardType[]): RewardType[] =>
  items.map<RewardType>((item) => {
    const [type, name, count] = item;
    return { type, name, count };
  });
