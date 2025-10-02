import type { ItemTypeType } from '../data';
import type { BaseIDType } from './base-id-type';

export type BaseItemType = BaseIDType & {
  type: ItemTypeType;
  name: string;
};
