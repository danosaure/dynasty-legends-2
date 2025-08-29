import { describe, expect, it } from 'vitest';
import type { HanzhongUserDataType } from '../types';
import { isCityRequirementSatisfied } from './is-city-requirement-satisfied';
import { cityIdByName } from './utils';
import type { HanzhongCityRequirement } from './types';
import type { RequirementsCache } from '../requirements';

describe('isCityRequirementSatisfied()', () => {
  const requirementsCache: RequirementsCache = {};

  describe('type:hanzhong', () => {
    const requirement: HanzhongCityRequirement = {
      section: 'cities',
      type: 'hanzhong',
    };

    it('return false when hanzhong is not occupied', () => {
      const userData: HanzhongUserDataType = {};

      const result = isCityRequirementSatisfied(requirement, userData, requirementsCache);
      expect(result).toBe(false);
    });

    it('return true when hanzhong is occupied', () => {
      const userData: HanzhongUserDataType = {
        [cityIdByName('Hanzhong City')]: 1,
      };

      const result = isCityRequirementSatisfied(requirement, userData, requirementsCache);
      expect(result).toBe(true);
    });
  });

  describe('One level check', () => {
    const requirement: HanzhongCityRequirement = {
      section: 'cities',
      type: 'non-hanzhong',
      value: 1,
    };

    it('returns false when no cities are occupied', () => {
      const userData: HanzhongUserDataType = {};

      const result = isCityRequirementSatisfied(requirement, userData, requirementsCache);
      expect(result).toBe(false);
    });

    it('returns false when another city is occupied', () => {
      const userData: HanzhongUserDataType = {
        [cityIdByName('Foo Bar')]: 1,
      };

      const result = isCityRequirementSatisfied(requirement, userData, requirementsCache);
      expect(result).toBe(false);
    });

    it('returns true when one of the cities is occupied', () => {
      const userData: HanzhongUserDataType = {
        [cityIdByName('Mianyang County')]: 1,
      };

      const result = isCityRequirementSatisfied(requirement, userData, requirementsCache);
      expect(result).toBe(true);
    });

    it('returns true when both of the cities are occupied', () => {
      const userData: HanzhongUserDataType = {
        [cityIdByName('Mianyang County')]: 1,
        [cityIdByName('Mianyang County')]: 1,
      };

      const result = isCityRequirementSatisfied(requirement, userData, requirementsCache);
      expect(result).toBe(true);
    });
  });

  describe('With recursion', () => {
    const requirement: HanzhongCityRequirement = {
      section: 'cities',
      type: 'oneOf',
      cityNames: ['Mount Dingjun', 'Hanshui Trail'],
    };

    it('returns false when no cities are occupied', () => {
      const userData: HanzhongUserDataType = {};

      const result = isCityRequirementSatisfied(requirement, userData, requirementsCache);
      expect(result).toBe(false);
    });

    it('returns false when another city is occupied', () => {
      const userData: HanzhongUserDataType = {
        [cityIdByName('Foo Bar')]: 1,
      };

      const result = isCityRequirementSatisfied(requirement, userData, requirementsCache);
      expect(result).toBe(false);
    });

    it('returns false when one city is occupied, but not that city requirements', () => {
      const userData: HanzhongUserDataType = {
        [cityIdByName('Mount Dingjun')]: 1,
      };

      const result = isCityRequirementSatisfied(requirement, userData, requirementsCache);
      expect(result).toBe(false);
    });

    it('returns true when recursive are met', () => {
      const userData: HanzhongUserDataType = {
        [cityIdByName('Mount Dingjun')]: 1,
        [cityIdByName('Mianyang County')]: 1,
      };

      const result = isCityRequirementSatisfied(requirement, userData, requirementsCache);
      expect(result).toBe(true);
    });
  });
});
