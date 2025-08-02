import type { PersistenceKey } from '../types';

export const getDataFromObjectStoreById = async <T>(objectStore: IDBObjectStore, idValue: PersistenceKey): Promise<T> =>
  new Promise((resolve) => {
    const request = objectStore.get(idValue);

    request.onsuccess = () => resolve(request.result as T);
  });
