import { sanitizeId } from '../../utils';
import type { IconType } from '../types';
import type { ItemTypeType } from './ItemTypeType';

export const itemAvatar = (type: ItemTypeType, name: string): IconType => ({
  path: `data/${sanitizeId(type as string)}/${sanitizeId(name)}.png`,
});
