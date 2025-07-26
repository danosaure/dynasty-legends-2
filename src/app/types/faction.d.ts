import type { BaseIDType } from './base-id-type';

export type FactionNameType = 'Wei' | 'Shu' | 'Wu' | 'Other';

export type FactionType = BaseIDType & {
  name: FactionNameType;
  color: string;
};
