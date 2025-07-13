import { migrateDatabase, openDatabase } from '../persistence-lib';

import { DATABASE_NAME } from './constants';
import { migrations } from './migrations';

export const dbOpen = async (): Promise<IDBDatabase> =>
  openDatabase(DATABASE_NAME, migrations.length, {
    onupgradeneeded: async (db, transaction, currentVersion) => migrateDatabase(db, transaction, currentVersion, migrations),
  });
