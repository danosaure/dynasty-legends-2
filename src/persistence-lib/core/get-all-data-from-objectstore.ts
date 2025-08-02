export const getAllDataFromObjectStore = async <T>(objectStore: IDBObjectStore): Promise<T[]> =>
  new Promise((resolve) => {
    const request = objectStore.getAll();

    request.onsuccess = () => resolve(request.result);
  });
