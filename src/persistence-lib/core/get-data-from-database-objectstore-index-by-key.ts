import type { PersistenceKey } from '../types';
import { getDataFromIndexByKey } from './get-data-from-index-by-key';
import { getIndexFromStoreByName } from './get-index-from-store-by-name';
import { getObjectStoreFromDatabaseByName } from './get-objectstore-from-database-by-name';

export const getDataFromDatabaseObjectStoreIndexByKey = async <T>(
  db: IDBDatabase,
  objectStoreName: string,
  indexName: string,
  keyValue: PersistenceKey
): Promise<T> =>
  new Promise((resolve) => {
    getObjectStoreFromDatabaseByName(db, objectStoreName)
      .then((objectStore) => getIndexFromStoreByName(objectStore, indexName))
      .then((index) => getDataFromIndexByKey<T>(index, keyValue))
      .then(resolve);
  });
