import { PersistenceError } from './error';

export class OpenDatabaseError extends PersistenceError {
  constructor(message?: string) {
    super(message);
    this.name = 'Persistence.OpenDatabaseError';
  }
}

export type OpenDatabaseOptions = {
  onversionchange?: () => void;
  onupgradeneeded?: (db: IDBDatabase, transaction: IDBTransaction, currentVersion: number) => Promise<void>;
};

export const openDatabase = (dbName: string, dbVersion: number, options?: OpenDatabaseOptions): Promise<IDBDatabase> =>
  new Promise((resolve, reject) => {
    const request = indexedDB.open(dbName, dbVersion);

    request.onerror = (e: Event) => {
      const target = e.target as IDBOpenDBRequest;
      if (target.error) {
        reject(target.error);
      } else {
        reject(new OpenDatabaseError('Unknown indexedDB.open() error.'));
      }
    };

    request.onsuccess = () => {
      const db = request.result;
      if (options?.onversionchange) {
        db.onversionchange = () => {
          db.close();
          if (options?.onversionchange) {
            options.onversionchange();
          }
        };
      }

      resolve(db);
    };

    request.onupgradeneeded = (e: IDBVersionChangeEvent) => {
      if (options?.onupgradeneeded) {
        options.onupgradeneeded(request.result, request.transaction as IDBTransaction, e.oldVersion);
      } else {
        reject(new OpenDatabaseError(`Missing migrations for version ${e.oldVersion} to ${dbVersion}.`));
      }
    };
  });
