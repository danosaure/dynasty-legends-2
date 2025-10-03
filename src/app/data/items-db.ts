import type { BaseItemType } from '../types';
import type { ItemTypeType } from './ItemTypeType';
import type { PackType } from './packs';
import type { WeaponShardType } from './weapons';

export type ItemsDB = {
  'Avatar Frame': Record<string, BaseItemType>;
  'Beast': Record<string, BaseItemType>;
  'Consumables': Record<string, BaseItemType>;
  'Currency': Record<string, BaseItemType>;
  'Event': Record<string, BaseItemType>;
  'Gear Shard': Record<string, BaseItemType>;
  'Image Halo': Record<string, BaseItemType>;
  'Materials': Record<string, BaseItemType>;
  'Mount': Record<string, BaseItemType>;
  'Officer': Record<string, BaseItemType>;
  'Officer Shard': Record<string, BaseItemType>;
  'Pack': Record<string, PackType>;
  'Pet': Record<string, BaseItemType>;
  'Showpiece': Record<string, BaseItemType>;
  'Soul Bead': Record<string, BaseItemType>;
  'Stratagem': Record<string, BaseItemType>;
  'Trinket': Record<string, BaseItemType>;
  'Universal Shard': Record<string, BaseItemType>;
  'Weapon Shard': Record<string, WeaponShardType>;
};

const ITEMS_DB: ItemsDB = {
  'Avatar Frame': {},
  'Beast': {},
  'Consumables': {},
  'Currency': {},
  'Event': {},
  'Gear Shard': {},
  'Image Halo': {},
  'Materials': {},
  'Mount': {},
  'Officer': {},
  'Officer Shard': {},
  'Pack': {},
  'Pet': {},
  'Showpiece': {},
  'Soul Bead': {},
  'Stratagem': {},
  'Trinket': {},
  'Universal Shard': {},
  'Weapon Shard': {},
};

export const addItem = (item: BaseItemType): void => {
  ITEMS_DB[item.type][item.name] = item;
  ITEMS_DB[item.type][item.id] = item;
};

export const addItems = (items: BaseItemType[]): void => items.forEach((item) => addItem(item));

export const getItem = (type: ItemTypeType, nameOrId: string) => {
  const items = ITEMS_DB[type];
  const item = items[nameOrId];

  if (!item) {
    throw new Error(`Item[type=${type}, name="${nameOrId}"] not defined.`);
  }

  return item;
};
