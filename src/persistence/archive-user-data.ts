import type { PersistenceKey } from '../persistence-lib';
import { getDataFromDatabaseObjectStoreById, putDataIntoDatabaseObjectStore } from '../persistence-lib/core';
import { STORE_NAMES } from './constants';
import { dbOpen } from './db-open';
import type { PersistenceUserDataType } from './types/user-data-type';

export const archiveUserData = async (id: PersistenceKey): Promise<void> => {
  let db: IDBDatabase | null = null;

  try {
    db = await dbOpen();

    const dbUserData = await getDataFromDatabaseObjectStoreById<PersistenceUserDataType>(db, STORE_NAMES.USER_DATA, id);
    if (dbUserData) {
      dbUserData.__archived = true;
      await putDataIntoDatabaseObjectStore(db, STORE_NAMES.USER_DATA, dbUserData);
    }
  } finally {
    if (db) {
      db.close();
    }
  }
};
