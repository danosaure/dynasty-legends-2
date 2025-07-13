import { getDataFromIndexByKey } from './get-data-from-index-by-key';
import { getIndexFromStoreByName } from './get-index-from-store-by-name';
import { getObjectStoreFromDatabaseByName } from './get-objectstore-from-database-by-name';

export const getDataFromDatabaseObjectStoreIndexByKey = async <T>(
  db: IDBDatabase,
  objectStoreName: string,
  indexName: string,
  keyValue: string | string[]
): Promise<T> => {
  console.log(
    `getDataFromDatabaseObjectStoreIndexByKey(db, objectStoreName=${objectStoreName}, indexName=${indexName}, keyValue=${keyValue})`
  );
  return new Promise((resolve) => {
    getObjectStoreFromDatabaseByName(db, objectStoreName)
      .then((objectStore) => getIndexFromStoreByName(objectStore, indexName))
      .then((index) => getDataFromIndexByKey<T>(index, keyValue))
      .then(resolve);
  });
};
