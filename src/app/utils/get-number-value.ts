import type { PotentialUserDataRecord } from '../types';

export const DEFAULT_NUMBER_VALUE = 0;

export const getNumberValue = (data: PotentialUserDataRecord, key: string, defaultValue: number = DEFAULT_NUMBER_VALUE): number => {
  const value = data[key];
  return typeof value === 'number' ? value : defaultValue;
};
