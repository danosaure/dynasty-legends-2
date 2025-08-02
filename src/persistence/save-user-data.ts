import { putDataIntoDatabaseObjectStore } from '../persistence-lib/core';
import { STORE_NAMES } from './constants';
import { dbOpen } from './db-open';
import type { PersistenceUserDataType } from './types/user-data-type';

export const saveUserData = async (userData: PersistenceUserDataType): Promise<void> => {
  let db: IDBDatabase | null = null;

  try {
    db = await dbOpen();

    await putDataIntoDatabaseObjectStore(db, STORE_NAMES.USER_DATA, userData);
  } finally {
    if (db) {
      db.close();
      console.log(`  saveUserData(username=${userData.username}): db closed.`);
    }
  }
};
