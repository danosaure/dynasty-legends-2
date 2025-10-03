import { convertNamesToRewards } from '../convert-names-to-rewards';
import { generatePackItemData } from './utils';

export const CHANGAN_TAX_MYTHIC_OFFICER_PYO = generatePackItemData(
  "Chang'an Tax Mythic Officer PYO",
  convertNamesToRewards('Officer Shard', ['Zhang Jiao Shard', 'Huang Zhong Shard', 'Taishi Ci Shard', 'Zhang Chunhua Shard'])
);

export const CHANGAN_TAX_MYTHIC_WEAPON_PYO = generatePackItemData(
  "Chang'an Tax Mythic Weapon PYO",
  convertNamesToRewards('Weapon Shard', ['Thunder Cane Shard', 'Buster Boomer Shard', 'Hawk Crossbow Shard', 'Thornwhip Shard'])
);
