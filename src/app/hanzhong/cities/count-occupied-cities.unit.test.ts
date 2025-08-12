import { describe, expect, it } from 'vitest';

import type { HanzhongUserDataType } from '../types';
import { countOccupiedCities } from './count-occupied-cities';
import { cityIdByName } from './city-id-by-name';

describe('countOccupiedCities()', () => {
  it('Returns 0 when empty userData', () => {
    const userData: HanzhongUserDataType = {};
    const count = countOccupiedCities(userData);
    expect(count).to.equal(0);
  });

  it('returns 0 when userData contains other info', () => {
    const userData: HanzhongUserDataType = { foo: -1 };
    const count = countOccupiedCities(userData);
    expect(count).to.equal(0);
  });

  it('returns 1 when userData contains one city', () => {
    const userData: HanzhongUserDataType = {
      [cityIdByName('Mianyang County')]: 1,
    };
    const count = countOccupiedCities(userData);
    expect(count).to.equal(1);
  });

  it('counts when mix of cities and other data', () => {
    const userData: HanzhongUserDataType = {
      [cityIdByName('Mianyang County')]: 1,
      [cityIdByName('Mount Dingjun')]: 1,
      foo: -1,
    };
    const count = countOccupiedCities(userData);
    expect(count).to.equal(2);
  });
});
