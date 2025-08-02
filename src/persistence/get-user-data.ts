import { getDataFromDatabaseObjectStoreById, type PersistenceKey } from '../persistence-lib';
import { STORE_NAMES } from './constants';
import { dbOpen } from './db-open';
import type { PersistenceUserDataType } from './types/user-data-type';

export const getUserData = async (id: PersistenceKey): Promise<PersistenceUserDataType> => {
  let db: IDBDatabase | null = null;

  try {
    db = await dbOpen();

    const dbUserData = await getDataFromDatabaseObjectStoreById<PersistenceUserDataType>(db, STORE_NAMES.USER_DATA, id);

    return dbUserData;
  } finally {
    if (db) {
      db.close();
    }
  }
};
