import type { PersistenceBaseType } from '../../persistence-lib';

export type PersistenceUserDataType = PersistenceBaseType & {
  username: string;
  hanzhong?: HanzhongUserDataType;
};
