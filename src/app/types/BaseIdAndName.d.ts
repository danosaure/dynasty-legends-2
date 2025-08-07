import type { BaseIDType } from './base-id-type';

export type BaseIdAndName = BaseIDType & {
  name: string;
};
