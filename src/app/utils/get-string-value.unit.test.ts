import { describe, expect, it } from 'vitest';

import { DEFAULT_STRING_VALUE, getStringValue } from './get-string-value';

describe('getStringValue()', () => {
  const defaultValue = 'defaultValue';
  const key = 'foo';
  const goodValue = 'good value';
  const badValue = 42;

  describe('empty data', () => {
    const data = {};

    it('returns DEFAULT_STRING_VALUE when no default', () => {
      expect(getStringValue(data, key)).toEqual(DEFAULT_STRING_VALUE);
    });

    it('returns the default value when defined', () => {
      expect(getStringValue(data, key, defaultValue)).toEqual(defaultValue);
    });
  });

  describe('data contains key', () => {
    describe('string value', () => {
      const data = { [key]: goodValue };

      it('returns the value', () => {
        expect(getStringValue(data, key)).toEqual(goodValue);
        expect(getStringValue(data, key, defaultValue)).toEqual(goodValue);
      });
    });

    describe('non-string value', () => {
      const data = { [key]: badValue };

      it('returns DEFAULT_STRING_VALUE when value is not a string and no default', () => {
        expect(getStringValue(data, key)).toEqual(DEFAULT_STRING_VALUE);
      });

      it('return the passed default value when defined', () => {
        expect(getStringValue(data, key, defaultValue)).toEqual(defaultValue);
      });
    });
  });
});
