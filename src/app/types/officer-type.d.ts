import type { BaseIDType } from './base-id-type';

export type OfficerTypeType = BaseIDType & {
  name: 'Mage' | 'Marksman' | 'Support' | 'Tank' | 'Warrior';
  description: string;
};
