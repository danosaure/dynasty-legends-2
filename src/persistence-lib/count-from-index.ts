import { PersistenceError } from './error';

export class CountFromIndexError extends PersistenceError {
  constructor(message?: string) {
    super(message);
    this.name = 'Persistence.CountFromIndexError';
  }
}

export const countFromIndex = async (index: IDBIndex): Promise<number> =>
  new Promise((resolve, reject) => {
    try {
      const request = index.count();

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(new CountFromIndexError());
    } catch (e) {
      if (e instanceof Error) {
        reject(new CountFromIndexError(e.message));
      } else {
        reject(new CountFromIndexError(String(e)));
      }
    }
  });
