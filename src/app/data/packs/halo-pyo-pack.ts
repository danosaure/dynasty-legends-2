import { convertNamesToRewards } from '../convert-names-to-rewards';
import { generatePackItemData } from './utils';

export const HALO_PYO_PACK = generatePackItemData(
  'Halo PYO Pack',
  convertNamesToRewards('Image Halo', ['Dancing Butterfly', 'Lotus Step', 'Brume Snow', 'Dreamy Ginkgo'])
);
