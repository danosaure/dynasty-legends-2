import { generateBaseItemData, type AptitudeValueType, type BaseItemType } from '../types';
import { getFactionById } from './factions';
import { addItems } from './items-db';
import { getOfficerByName } from './officers';

type DataType = [string, AptitudeValueType, string];

const _DATA: DataType[] = [
  ['Arcane Flute', 20, 'Guo Jia'],
  ['Azure Dragon Blade', 20, 'Guan Yu'],
  ['Blaze Wielder', 22, 'Zhou Yu'],
  ['Blazegrasp', 22, 'Lu Xun'],
  ['Bone Smasher', 16, 'Zhang He'],
  ['Buster Boomer', 20, 'Huang Zhong'],
  ['Conflagration Ruler', 14, 'Xu You'],
  ["Conqueror's Edge", 22, 'Sun Ce'],
  ['Cosmic Diviner', 22, 'Zuo Ci'],
  ['Crescent Blade', 20, 'Zhenji'],
  ['Divine Musket', 20, 'Pang Tong'],
  ['Draconic Rapier', 16, 'Yuan Shu'],
  ['Exorcism Staff', 14, 'Xue Zong'],
  ['Flanged Mace', 14, 'Wen Chou'],
  ['Gallantry Howler', 22, 'Dian Wei'],
  ['Golden Hammer', 14, 'Mi Fang'],
  ['Gluttony Devourer', 18, 'Dong Zhuo'],
  ['Hawk Crossbow', 20, 'Taishi Ci'],
  ['Heaven Piercer', 22, 'Lu Bu'],
  ['Heavenly Sword', 20, 'Cao Cao'],
  ['Ice Blade', 20, 'Xiahou Dun'],
  ['Ingenuity Stormer', 20, 'Huang Yueying'],
  ['Lightbringer', 16, 'Sun Quan'],
  ['Lucky Grace', 18, 'Xiao Qiao'],
  ['Jagged Scimitar', 20, 'Sun Jian'],
  ['Magus Brush', 16, 'Xu Shu'],
  ['Maneuver Scroll', 20, 'Lu Meng'],
  ['Melody Stormer', 18, 'Cai Wenji'],
  ['Mighty Heroine Bow', 20, 'Sun Shangxiang'],
  ['Occult Gust', 22, 'Zhuge Liang'],
  ['Ornate Dual Axe', 16, 'Hua Xiong'],
  ['Ornate Sash', 20, 'Diaochan'],
  ['Phantom Billhook', 20, 'Zhang Liao'],
  ['Rock Smasher', 14, 'Xu Huang'],
  ['Schemes Whisper', 22, 'Sima Yi'],
  ['Shadowy Spike', 20, 'Jia Xu'],
  ['Silver Dragon Spear', 22, 'Zhao Yun'],
  ['Skywarden', 22, 'Jiang Wei'],
  ['Snake Lance', 16, 'Zhang Fei'],
  ['Strength & Virtue', 14, 'Liu Bei'],
  ['Surge Breakers', 20, 'Gan Ning'],
  ['Tasseled Metal Pike', 14, 'Yan Liang'],
  ['Thornwhip', 20, 'Zhang Chunhua'],
  ['Thunder Cane', 18, 'Zhang Jiao'],
  ['Thunderbolt-Gale', 16, 'Zhou Cang'],
  ['Tortoise Sword-Shield', 16, 'Cao Ren'],
  ['Tyrant Dragon Mace', 16, 'Yuan Shao'],
  ['Umbrella of Glamour', 16, 'Da Qiao'],
  ['Untamed Howler', 22, 'Ma Chao'],
  ['Vitality Weaver', 20, 'Hua Tuo'],
  ['Wave Surfer', 14, 'Huang Gai'],
];

export type WeaponShardType = BaseItemType & {
  officerId: string;
};

export const WEAPON_SHARDS: WeaponShardType[] = [
  ..._DATA.map<WeaponShardType>((info) => {
    const [name, aptitude, officerName] = info;
    const officer = getOfficerByName(officerName);
    return {
      ...generateBaseItemData('Weapon Shard', `${name} Shard`, true, aptitude, getFactionById(officer.factionId).name),
      officerId: officer.id,
    } as const;
  }),
] as const;

addItems(WEAPON_SHARDS);

export const getWeaponShardByName = (name: string): WeaponShardType => {
  const weaponShard = WEAPON_SHARDS.find((item) => item.name === name);
  if (!weaponShard) {
    throw new Error(`Invalid weapon shard name="${name}".`);
  }
  return weaponShard;
};

export const getWeaponShardByOfficerId = (officerId: string): WeaponShardType => {
  const weaponShard = WEAPON_SHARDS.find((item) => item.officerId === officerId);
  if (!weaponShard) {
    throw new Error(`Invalid weapon shard by officer id="${officerId}".`);
  }
  return weaponShard;
};

export type WeaponPolishType = BaseItemType & {
  weaponShardId: string;
};

export const WEAPON_POLISHES: WeaponPolishType[] = [
  ..._DATA.map<WeaponPolishType>((info) => {
    const [baseName, aptitude, officerName] = info;

    const name = `${baseName} - Polish Blueprint`;
    const officer = getOfficerByName(officerName);

    return {
      ...generateBaseItemData('Materials', name, true, aptitude, getFactionById(officer.factionId).name),
      weaponShardId: getWeaponShardByName(`${baseName} Shard`).id,
    } as const;
  }),
] as const;

addItems(WEAPON_POLISHES);

export const getWeaponPolishByWeaponShardId = (id: string): WeaponPolishType => {
  const weaponPolish = WEAPON_POLISHES.find((item) => item.weaponShardId === id);
  if (!weaponPolish) {
    throw new Error(`Invalid weapon polish by weapon shard id="${id}".`);
  }
  return weaponPolish;
};
