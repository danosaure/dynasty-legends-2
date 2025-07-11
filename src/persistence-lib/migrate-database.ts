import { PersistenceError } from './error';
import type { MigrationType } from './types';

export class MigrateDatabaseError extends PersistenceError {
  constructor(message?: string) {
    super(message);
    this.name = 'Persistence.MigrateDatabaseError';
  }
}

export const migrateDatabase = async (
  db: IDBDatabase,
  transaction: IDBTransaction,
  currentVersion: number,
  migrations: MigrationType[]
): Promise<void> => {
  for (let version = currentVersion + 1; version <= db.version; version++) {
    await migrations[version - 1](db, transaction);
  }
};
