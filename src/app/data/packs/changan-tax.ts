import { convertNamesToRewards } from '../convert-names-to-rewards';
import type { PackType } from './PackType';

export const CHANGAN_TAX_MYTHIC_OFFICER_PYO: PackType = {
  type: 'Pack',
  name: "Chang'an Tax Mythic Officer PYO",
  items: convertNamesToRewards('Officer Shard', [
    'Zhang Jiao Shard',
    'Huang Zhong Shard',
    'Taishi Ci Shard',
    'Zhang Chunhua Shard',
  ]),
};

export const CHANGAN_TAX_MYTHIC_WEAPON_PYO: PackType = {
  type: 'Pack',
  name: "Chang'an Tax Mythic Weapon PYO",
  items: convertNamesToRewards('Weapon Shard', [
    'Thunder Cane Shard',
    'Buster Boomer Shard',
    'Hawk Crossbow Shard',
    'Thornwhip Shard',
  ]),
};
