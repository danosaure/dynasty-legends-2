import { PersistenceError } from './error';
import { generateIndexName } from './generate-index-name';

export class CreateIndexOnStoreError extends PersistenceError {
  constructor(message?: string) {
    super(message);
    this.name = 'Persistence.CreateIndexOnStoreError';
  }
}

export const createIndexOnStore = (store: IDBObjectStore, columns: string[], unique: boolean = false): void => {
  const indexName = generateIndexName(store.name, columns);
  store.createIndex(indexName, columns, { unique });
};
