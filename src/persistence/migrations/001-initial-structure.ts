import { createIndexOnStore } from '../../persistence-lib/create-index-on-store';
import type { MigrationType } from '../../persistence-lib/types';

export const migrate: MigrationType = async (db: IDBDatabase): Promise<void> => {
  // UserData
  const userDataStore = db.createObjectStore('userData', { keyPath: 'id' });
  createIndexOnStore(userDataStore, ['name']);
};
