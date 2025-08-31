import { describe, expect, it } from 'vitest';
import { cityIdByName } from './utils';
import type { HanzhongUserDataType } from '../types';
import { isCityRequirementSatisfied, type HanzhongCitiesRequirement } from './requirements';
import type { RequirementsCache } from '../requirements/RequirementsCache';

describe('areCityRequirementsSatisfied()', () => {
  const requirementsCache: RequirementsCache = {};

  describe('One level check', () => {
    const requirement: HanzhongCitiesRequirement = {
      id: 'foo',
      type: 'count',
      section: 'cities',
      cityNames: ['Mianyang County', 'Maming Pavilion'],
      count: 1,
    };

    it('returns false when no cities are occupied', () => {
      const userData: HanzhongUserDataType = {};

      const result = isCityRequirementSatisfied(requirement, userData, { ...requirementsCache });
      expect(result).toEqual({ satisfied: false, value: 0, expected: 1 });
    });

    it('returns false when another city is occupied', () => {
      const userData: HanzhongUserDataType = {
        [cityIdByName('Foo Bar')]: 1,
      };

      const result = isCityRequirementSatisfied(requirement, userData, { ...requirementsCache });
      expect(result).toEqual({ satisfied: false, value: 0, expected: 1 });
    });

    it('returns true when one of the cities is occupied', () => {
      const userData: HanzhongUserDataType = {
        [cityIdByName('Mianyang County')]: 1,
      };

      const result = isCityRequirementSatisfied(requirement, userData, { ...requirementsCache });
      expect(result).toEqual({ satisfied: true, value: 1, expected: 1 });
    });

    it('returns true when both of the cities are occupied', () => {
      const userData: HanzhongUserDataType = {
        [cityIdByName('Mianyang County')]: 1,
        [cityIdByName('Maming Pavilion')]: 1,
      };

      const result = isCityRequirementSatisfied(requirement, userData, { ...requirementsCache });
      expect(result).toEqual({ satisfied: true, value: 2, expected: 1 });
    });
  });

  describe('With recursion', () => {
    const requirement: HanzhongCitiesRequirement = {
      id: 'foo',
      type: 'count',
      section: 'cities',
      cityNames: ['Mount Dingjun', 'Hanshui Trail'],
      count: 1,
    };

    it('returns false when no cities are occupied', () => {
      const userData: HanzhongUserDataType = {};

      const result = isCityRequirementSatisfied(requirement, userData, { ...requirementsCache });
      expect(result).toEqual({ satisfied: false, value: 0, expected: 1 });
    });

    it('returns false when another city is occupied', () => {
      const userData: HanzhongUserDataType = {
        [cityIdByName('Foo Bar')]: 1,
      };

      const result = isCityRequirementSatisfied(requirement, userData, { ...requirementsCache });
      expect(result).toEqual({ satisfied: false, value: 0, expected: 1 });
    });

    it('returns false when one city is occupied, but not that city requirements', () => {
      const userData: HanzhongUserDataType = {
        [cityIdByName('Mount Dingjun')]: 1,
      };

      const result = isCityRequirementSatisfied(requirement, userData, { ...requirementsCache });
      expect(result).toEqual({ satisfied: false, value: 0, expected: 1 });
    });

    it('returns true when recursive are met', () => {
      const userData: HanzhongUserDataType = {
        [cityIdByName('Mount Dingjun')]: 1,
        [cityIdByName('Mianyang County')]: 1,
      };

      const result = isCityRequirementSatisfied(requirement, userData, { ...requirementsCache });
      expect(result).toEqual({ satisfied: true, value: 1, expected: 1 });
    });
  });
});
