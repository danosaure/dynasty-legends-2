import { createIndexOnStore, type MigrationType } from '../../persistence-lib';

export const migrate: MigrationType = async (db: IDBDatabase): Promise<void> => {
  // UserData
  const userDataStore = db.createObjectStore('users_data', { keyPath: 'id' });
  createIndexOnStore(userDataStore, ['username']);
};
