import { convertNamesToRewards } from '../convert-names-to-rewards';
import type { PackType } from './PackType';

export const EXOTIC_HALO_PYO_BOX: PackType = {
  type: 'Pack',
  name: 'Exotic Halo PYO Box',
  items: convertNamesToRewards('Image Halo', [
    'Nether Soulfire',
    'Dragonfly Waltz',
    "Lightning's Might",
    'Azure Waves',
    'Snowflakes',
    'Phantom Fire',
    'Affection',
    'Innocence',
    'Fireworks',
    'Melody of Joy',
    'Free Notes',
    'Crimson Lightning',
    'Snow Bells',
    'Star Spectrum',
    'Rosy Shade',
    'Brilliant Glow',
    'Star Guide',
  ]),
} as const;
