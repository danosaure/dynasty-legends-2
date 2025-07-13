import { PersistenceError } from './error';

export class GenerateIndexNameError extends PersistenceError {
  constructor(message?: string) {
    super(message);
    this.name = 'Persistence.GenerateIndexNameError';
  }
}

export const generateIndexName = (storeName: string, columns: string[]): string => [storeName].concat(columns).join('--');
