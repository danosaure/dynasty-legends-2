export const getDataFromIndexByKey = async <T>(index: IDBIndex, keyValue: string | string[]): Promise<T> =>
  new Promise((resolve) => {
    const keyValues = Array.isArray(keyValue) ? keyValue : [keyValue];

    const request = index.get(keyValues);

    request.onsuccess = () => resolve(request.result);
  });
