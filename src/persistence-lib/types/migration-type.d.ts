export type MigrationType = (db: IDBDatabase, transaction: IDBTransaction) => Promise<void>;
