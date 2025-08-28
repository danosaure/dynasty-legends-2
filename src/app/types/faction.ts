import type { BaseIDType } from './base-id-type';
import type { IconType } from './icon-type';

export type FactionNameType = 'Wei' | 'Shu' | 'Wu' | 'Other';

export type FactionType = BaseIDType & {
  name: FactionNameType;
  color: string;
  avatar: IconType;
};
