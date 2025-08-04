import type { PotentialUserDataRecord } from '../types';

export const DEFAULT_STRING_VALUE = '';

export const getStringValue = (data: PotentialUserDataRecord, key: string, defaultValue: string = DEFAULT_STRING_VALUE): string => {
  const value = data[key];
  return typeof value === 'string' ? value : defaultValue;
};
