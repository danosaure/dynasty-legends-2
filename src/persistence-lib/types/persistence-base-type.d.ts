import type { PersistenceType } from './persistence-type';

export type PersistenceBaseType = PersistenceType & {
  id: string;
};
