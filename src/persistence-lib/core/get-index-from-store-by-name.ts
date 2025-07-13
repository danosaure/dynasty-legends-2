export const getIndexFromStoreByName = async (objectStore: IDBObjectStore, indexName: string): Promise<IDBIndex> =>
  new Promise((resolve, reject) => {
    try {
      resolve(objectStore.index(indexName));
    } catch {
      reject(new Error(`Invalid indexName="${indexName}".`));
    }
  });
