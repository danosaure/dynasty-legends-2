import type { RewardType } from './RewardType';

export type ShopItemCostType = {
  currency: string;
  value: number;
};

export type ShopItemType = RewardType & {
  cost: ShopItemCostType;
  attempts?: number;
};
