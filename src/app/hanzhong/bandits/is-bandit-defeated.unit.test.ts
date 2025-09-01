import { describe, expect, it } from 'vitest';
import { isBanditDefeated } from './is-bandit-defeated';
import type { HanzhongUserDataType } from '../types';

describe('isBanditDefeated()', () => {
  const TEST_ID = 'some-key';

  it('returns false when empty user data', () => {
    const userData: HanzhongUserDataType = {};

    const defeated = isBanditDefeated(TEST_ID, userData);
    expect(defeated).to.be.false; // eslint-disable-line @typescript-eslint/no-unused-expressions
  });

  it('returns false when id is not in user data', () => {
    const userData: HanzhongUserDataType = {
      [`not-${TEST_ID}`]: 1,
    };
    const defeated = isBanditDefeated(TEST_ID, userData);
    expect(defeated).to.be.false; // eslint-disable-line @typescript-eslint/no-unused-expressions
  });

  it('returns false when user data contains invalid value', () => {
    const userData: HanzhongUserDataType = {
      [TEST_ID]: 2,
    };
    const defeated = isBanditDefeated(TEST_ID, userData);
    expect(defeated).to.be.false; // eslint-disable-line @typescript-eslint/no-unused-expressions
  });

  it('returns true when user data contains valid value', () => {
    const userData: HanzhongUserDataType = {
      [TEST_ID]: 1,
    };
    const defeated = isBanditDefeated(TEST_ID, userData);
    expect(defeated).to.be.true; // eslint-disable-line @typescript-eslint/no-unused-expressions
  });
});
