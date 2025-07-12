export * from './core';
export type * from './types';

export { countFromIndex, CountFromIndexError } from './count-from-index';
export { createIndexOnStore, CreateIndexOnStoreError } from './create-index-on-store';
export { PersistenceError } from './error';
export { generateIndexName, GenerateIndexNameError } from './generate-index-name';
export { migrateDatabase, MigrateDatabaseError } from './migrate-database';
export { openDatabase, type OpenDatabaseOptions, OpenDatabaseError } from './open-database';
