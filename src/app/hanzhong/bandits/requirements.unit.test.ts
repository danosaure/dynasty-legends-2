import { describe, expect, it } from 'vitest';
import {
  isBanditCountRequirementSatisfied,
  isBanditRequirementSatisfied,
  type HanzhongBanditsCountRequirement,
} from './requirements';
import type { HanzhongUserDataType } from '../types';
import { HANZHONG_BANDITS } from './bandits--data';
import type { HanzhongRequirementResponse, RequirementsCache } from '../requirements';

const COUNT_REQUIREMENT: HanzhongBanditsCountRequirement = {
  id: 'foo-test-id',
  section: 'bandits',
  type: 'count',
  value: 3,
};

describe('isBanditCountRequirementSatisfied', () => {
  it('returns negative check when no bandits defeated', () => {
    const userData: HanzhongUserDataType = {};

    const check = isBanditCountRequirementSatisfied(COUNT_REQUIREMENT, userData);
    expect(check).to.deep.equal({ satisfied: false, value: 0, expected: COUNT_REQUIREMENT.value });
  });

  it('returns negative check when not enough bandits defeated', () => {
    const userData: HanzhongUserDataType = HANZHONG_BANDITS.attacks
      .slice(0, COUNT_REQUIREMENT.value - 1)
      .reduce<HanzhongUserDataType>((cumul, attack) => ({ ...cumul, [attack.id]: 1 }), {});
    const check = isBanditCountRequirementSatisfied(COUNT_REQUIREMENT, userData);
    expect(check).to.deep.equal({ satisfied: false, value: COUNT_REQUIREMENT.value - 1, expected: COUNT_REQUIREMENT.value });
  });

  it('returns positive check when exact number bandits defeated', () => {
    const userData: HanzhongUserDataType = HANZHONG_BANDITS.attacks
      .slice(0, COUNT_REQUIREMENT.value)
      .reduce<HanzhongUserDataType>((cumul, attack) => ({ ...cumul, [attack.id]: 1 }), {});
    const check = isBanditCountRequirementSatisfied(COUNT_REQUIREMENT, userData);
    expect(check).to.deep.equal({ satisfied: true, value: COUNT_REQUIREMENT.value, expected: COUNT_REQUIREMENT.value });
  });

  it('returns positive check when more bandits defeated', () => {
    const userData: HanzhongUserDataType = HANZHONG_BANDITS.attacks
      .slice(0, COUNT_REQUIREMENT.value + 1)
      .reduce<HanzhongUserDataType>((cumul, attack) => ({ ...cumul, [attack.id]: 1 }), {});
    const check = isBanditCountRequirementSatisfied(COUNT_REQUIREMENT, userData);
    expect(check).to.deep.equal({ satisfied: true, value: COUNT_REQUIREMENT.value + 1, expected: COUNT_REQUIREMENT.value });
  });
});

describe('isBanditRequirementSatisfied()', () => {
  describe('type="count"', () => {
    it('returns the cached value', () => {
      const cachedCheck: HanzhongRequirementResponse = { satisfied: true, value: 500, expected: 500 };
      const cache: RequirementsCache = { [COUNT_REQUIREMENT.id]: cachedCheck };
      const userData: HanzhongUserDataType = {};
      const check = isBanditRequirementSatisfied(COUNT_REQUIREMENT, userData, cache);
      expect(check).to.deep.equal(cachedCheck);
    });
  });
});
