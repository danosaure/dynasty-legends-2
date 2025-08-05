import { describe, expect, it } from 'vitest';

import { DEFAULT_NUMBER_VALUE, getNumberValue } from './get-number-value';

describe('getNumberValue()', () => {
  const defaultValue = 25;
  const key = 'foo';
  const goodValue = 42;
  const badValue = 'bar';

  describe('empty data', () => {
    const data = {};

    it('returns DEFAULT_NUMBER_VALUE when no default', () => {
      expect(getNumberValue(data, key)).toEqual(DEFAULT_NUMBER_VALUE);
    });

    it('returns the default value when defined', () => {
      expect(getNumberValue(data, key, defaultValue)).toEqual(defaultValue);
    });
  });

  describe('data contains key', () => {
    describe('number value', () => {
      const data = { [key]: goodValue };

      it('returns the value', () => {
        expect(getNumberValue(data, key)).toEqual(goodValue);
        expect(getNumberValue(data, key, defaultValue)).toEqual(goodValue);
      });
    });

    describe('non-number value', () => {
      const data = { [key]: badValue };

      it('returns DEFAULT_NUMBER_VALUE when value is not a number and no default', () => {
        expect(getNumberValue(data, key)).toEqual(DEFAULT_NUMBER_VALUE);
      });

      it('return the passed default value when defined', () => {
        expect(getNumberValue(data, key, defaultValue)).toEqual(defaultValue);
      });
    });
  });
});
