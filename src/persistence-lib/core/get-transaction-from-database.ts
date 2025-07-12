export type TransactionType = 'readonly' | 'readwrite';

export const getTransactionFromDatabase = async (
  db: IDBDatabase,
  objectStoreName: string,
  mode: TransactionType = 'readonly'
): Promise<IDBTransaction> => Promise.resolve(db.transaction([objectStoreName], mode));
