import type { ItemTypeType } from './ItemTypeType';
import type { PackType } from './packs';
import type { WeaponShardType } from './weapons';

export type ItemsDB = {
  'Avatar Frame': Record<string, object>;
  'Beast': Record<string, object>;
  'Consumables': Record<string, object>;
  'Currency': Record<string, object>;
  'Event': Record<string, object>;
  'Gear Shard': Record<string, object>;
  'Image Halo': Record<string, object>;
  'Materials': Record<string, object>;
  'Mount': Record<string, object>;
  'Officer': Record<string, object>;
  'Officer Shard': Record<string, object>;
  'Pack': Record<string, PackType>;
  'Pet': Record<string, object>;
  'Showpiece': Record<string, object>;
  'Soul Bead': Record<string, object>;
  'Stratagem': Record<string, object>;
  'Trinket': Record<string, object>;
  'Universal Shard': Record<string, object>;
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

export interface ItemDB {
  type: ItemTypeType;
  name: string;
}

export const addItem = (item: ItemDB): void => {
  ITEMS_DB[item.type][item.name] = item;
};

export const addItems = (items: ItemDB[]): void => items.forEach((item) => addItem(item));

export const getItem = (type: ItemTypeType, name: string) => {
  const items = ITEMS_DB[type];
  const item = items[name];

  if (!item) {
    throw new Error(`Item[type=${type}, name="${name}"] not defined.`);
  }

  return item;
};
