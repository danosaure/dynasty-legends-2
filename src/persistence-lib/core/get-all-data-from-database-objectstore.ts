import { getAllDataFromObjectStore } from './get-all-data-from-objectstore';
import { getObjectStoreFromDatabaseByName } from './get-objectstore-from-database-by-name';

export const getAllDataFromDatabaseObjectStore = async <T>(db: IDBDatabase, objectStoreName: string): Promise<T[]> =>
  new Promise((resolve) => {
    getObjectStoreFromDatabaseByName(db, objectStoreName)
      .then((objectStore) => getAllDataFromObjectStore<T>(objectStore))
      .then(resolve);
  });
