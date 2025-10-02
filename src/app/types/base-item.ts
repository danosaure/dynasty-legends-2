import type { ItemTypeType } from '../data';
import type { AptitudeValueType } from './aptitude';
import type { BaseIDType } from './base-id-type';
import type { FactionNameType } from './faction';

export type BaseItemType = BaseIDType & {
  type: ItemTypeType;
  name: string;
  hasAvatar?: boolean;
  aptitude?: AptitudeValueType;
  faction?: FactionNameType;
};
