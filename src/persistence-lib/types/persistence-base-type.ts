import type { PersistenceType } from './persistence-type';

export interface PersistenceBaseType extends PersistenceType {
  id: string;
  __archived?: boolean;
}
