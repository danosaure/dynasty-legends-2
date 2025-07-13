import { v4 as uuidv4 } from 'uuid';

import { getDataFromDatabaseObjectStoreIndexByKey } from '../persistence-lib';
import { INDICES_NAMES, STORE_NAMES } from './constants';
import { dbOpen } from './db-open';
import type { PersistenceUserDataType } from './types/user-data-type';

export const getUserDataByUsername = async (username: string): Promise<PersistenceUserDataType> => {
  let db: IDBDatabase | null = null;

  try {
    db = await dbOpen();

    const dbUserData = await getDataFromDatabaseObjectStoreIndexByKey<PersistenceUserDataType>(
      db,
      STORE_NAMES.USER_DATA,
      INDICES_NAMES[STORE_NAMES.USER_DATA].USERNAME,
      username
    );

    return (
      dbUserData ?? {
        id: uuidv4(),
        username,
        hanzhong: {},
      }
    );
  } finally {
    if (db) {
      db.close();
    }
  }
};
