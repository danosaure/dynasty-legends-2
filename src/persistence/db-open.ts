import { migrateDatabase } from '../persistence-lib/migrate-database';
import { openDatabase } from '../persistence-lib/open-database';
import { DATABASE_NAME } from './constants';
import { migrations } from './migrations';

export const dbOpen = async (): Promise<IDBDatabase> =>
  openDatabase(DATABASE_NAME, migrations.length, {
    onupgradeneeded: async (db, transaction, currentVersion) => migrateDatabase(db, transaction, currentVersion, migrations),
  });
