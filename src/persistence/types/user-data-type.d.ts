import type { PersistenceBaseType } from '../../persistence-lib';
import type { PersistenceHanzhongUserDataType } from './hanzhong-user-data';

export interface PersistenceUserDataType extends PersistenceBaseType {
  username: string;
  hanzhong: PersistenceHanzhongUserDataType;
}
