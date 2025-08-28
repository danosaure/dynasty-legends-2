import type { BaseIDType } from './base-id-type';
import type { IconType } from './icon-type';

export type OfficerTypeNameType = 'Assassin' | 'Mage' | 'Marksman' | 'Support' | 'Tank' | 'Warrior';

export type OfficerTypeType = BaseIDType & {
  name: OfficerTypeNameType;
  color: string;
  avatar: IconType;
};
