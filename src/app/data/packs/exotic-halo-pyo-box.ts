import { convertNamesToRewards } from '../convert-names-to-rewards';
import { generatePackItemData } from './utils';

export const EXOTIC_HALO_PYO_BOX = generatePackItemData(
  'Exotic Halo PYO Box',
  convertNamesToRewards('Image Halo', [
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
  ])
);
