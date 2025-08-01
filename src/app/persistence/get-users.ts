import { getAllDataFromDatabaseObjectStore } from '../../persistence-lib';
import { STORE_NAMES } from '../../persistence/constants';
import { dbOpen, type PersistenceUserDataType } from '../../persistence';

export const getUsers = async (): Promise<PersistenceUserDataType[]> => {
  let db: IDBDatabase | null = null;

  try {
    db = await dbOpen();

    const dbUsersData = await getAllDataFromDatabaseObjectStore<PersistenceUserDataType>(db, STORE_NAMES.USER_DATA);

    console.log(`dbUsersData=`, dbUsersData);

    return dbUsersData;
  } finally {
    if (db) {
      db.close();
    }
  }
};
