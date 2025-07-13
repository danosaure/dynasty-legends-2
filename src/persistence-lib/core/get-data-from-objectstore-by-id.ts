export const getDataFromObjectStoreById = async <T>(objectStore: IDBObjectStore, idValue: string): Promise<T> =>
  new Promise((resolve) => {
    const request = objectStore.get(idValue);

    request.onsuccess = () => resolve(request.result);
  });
