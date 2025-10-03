import { generateItemIdByTypeAndName, type ItemTypeType } from '../data';
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

export const generateBaseItemData = (
  type: ItemTypeType,
  name: string,
  hasAvatar?: boolean,
  aptitude?: AptitudeValueType,
  faction?: FactionNameType
): BaseItemType => ({
  id: generateItemIdByTypeAndName(type, name),
  type,
  name,
  hasAvatar,
  aptitude,
  faction,
});
