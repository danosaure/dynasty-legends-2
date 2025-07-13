export const getObjectStoreFromDatabaseByName = async (db: IDBDatabase, objectStoreName: string): Promise<IDBObjectStore> =>
  Promise.resolve(db.transaction([objectStoreName]).objectStore(objectStoreName));
