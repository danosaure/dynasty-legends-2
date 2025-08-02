import type { PersistenceKey } from '../types';
import { getDataFromObjectStoreById } from './get-data-from-objectstore-by-id';
import { getObjectStoreFromDatabaseByName } from './get-objectstore-from-database-by-name';

export const getDataFromDatabaseObjectStoreById = async <T>(
  db: IDBDatabase,
  objectStoreName: string,
  id: PersistenceKey
): Promise<T> =>
  new Promise((resolve) => {
    getObjectStoreFromDatabaseByName(db, objectStoreName)
      .then((objectStore) => getDataFromObjectStoreById<T>(objectStore, id))
      .then(resolve);
  });
