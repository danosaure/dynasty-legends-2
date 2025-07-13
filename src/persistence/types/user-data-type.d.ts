import type { PersistenceBaseType } from '../../persistence-lib';

export interface PersistenceUserDataType extends PersistenceBaseType {
  username: string;
  hanzhong: HanzhongUserDataType;
}
