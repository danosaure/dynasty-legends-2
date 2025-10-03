import { sanitizeId } from '../../utils';
import type { ItemTypeType } from './ItemTypeType';

export const generateItemIdByTypeAndName = (type: ItemTypeType, name: string): string => `${sanitizeId(type)}--${sanitizeId(name)}`;
