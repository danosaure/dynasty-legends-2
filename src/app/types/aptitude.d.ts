import type { BaseIDType } from './base-id-type';

export type AptitudeType = BaseIDType & {
  name: string;
  aptitude: 16 | 18 | 20 | 22;
};
