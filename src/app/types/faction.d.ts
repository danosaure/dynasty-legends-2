import type { BaseIDType } from './base-id-type';

export type FactionType = BaseIDType & {
  name: 'Wei' | 'Shu' | 'Wu' | 'Other';
  color: string;
};
