import type { PersistenceBaseType } from '../types';
import { getTransactionFromDatabase } from './get-transaction-from-database';

export const putDataIntoDatabaseObjectStore = async (
  db: IDBDatabase,
  objectStoreName: string,
  item: PersistenceBaseType
): Promise<void> =>
  new Promise((resolve) => {
    getTransactionFromDatabase(db, objectStoreName, 'readwrite')
      .then((transaction) => transaction.objectStore(objectStoreName))
      .then((objectStore) => objectStore.put(item))
      .then((request) => {
        request.onsuccess = () => resolve();
      });
  });
