import type { ItemTypeType } from '../ItemTypeType';
import type { ShopItemType } from '../ShopItem';

type RawShopType = [ItemTypeType, string, number, number, number | undefined];

const RAW_DATA: RawShopType[] = [
  ['Pack', 'Halo PYO Pack', 1, 25000, 1],
  ['Officer Shard', 'Zhang Chunhua', 1, 450, 10],
  ['Weapon Shard', 'Thornwhip Shard', 1, 150, 10],
  ['Materials', 'Thornwhip - Polish Blueprint', 1, 225, 5],
  ['Consumables', 'Hero Invitation Card', 1, 600, 20],
  ['Event', 'Forage Grass', 1, 200, 20],
  ['Consumables', 'Treasure Dice', 1, 200, 20],
  ['Event', 'Essence Dew', 1, 400, 20],
  ['Materials', 'Experience Notes', 120, 200, 25],
  ['Pack', 'Legendary Aptitude - 18 Officer Shard', 3, 800, 30],
  ['Pack', 'Random Aptitude - 18 Weapon Shard', 3, 400, 30],
  ['Stratagem', 'Thunder Bluff Shard', 1, 200, 20],
  ['Stratagem', 'Venom Penalty Shard', 1, 200, 20],
  ['Stratagem', 'Ambush Array Shard', 1, 200, 20],
  ['Stratagem', 'Wooden Ox Shard', 1, 100, 20],
  ['Pack', 'Legendary Aptitude - 16 Officer Shard', 3, 600, 30],
  ['Pack', 'Random Aptitude - 16 Weapon Shard', 3, 300, 30],
  ['Pack', 'Random Legendary Mount Shard', 3, 300, 20],
  ['Pack', 'Random Legendary Trinket Shard', 3, 300, 20],
  ['Beast', 'Ancient Ginseng', 1, 60, 30],
  ['Beast', 'Ganoderma', 1, 150, 10],
  ['Beast', 'Fleeceflower Root', 1, 30, 300],
  ['Pet', 'Common Refine Pill', 1, 30, 100],
  ['Pet', 'Crystal Stone', 1, 150, 100],
  ['Materials', 'Evolution Pill', 20, 1000, 100],
  ['Pet', 'Crystal Dust', 1, 15, 500],
  ['Currency', 'Coin', 5000, 100, undefined],
];

export type ApexShowdownType = {
  shop: ShopItemType[];
};

export const APEX_SHOWDOWN: ApexShowdownType = {
  shop: RAW_DATA.map((data) => {
    const [type, name, count, value, attempts] = data;
    return { type, name, count, attempts, cost: { currency: 'Tourney Token', value } };
  }),
};
