import { describe, expect, it } from 'vitest';
import { cityIdByName } from './city-id-by-name';
import type { HanzhongUserDataType } from '../../types';
import type { HanzhongRequirement } from '../../requirements';
import { areCityRequirementsSatisfied } from './are-city-requirements-satisfied';
import type { RequirementsCache } from '../../requirements/RequirementsCache';

describe('areCityRequirementsSatisfied()', () => {
  const requirementsCache: RequirementsCache = {};

  describe('One level check', () => {
    const requirement: HanzhongRequirement = {
      type: 'count',
      section: 'cities',
      requirementIds: [cityIdByName('Mianyang County'), cityIdByName('Maming Pavilion')],
      value: 1,
    };

    it('returns false when no cities are occupied', () => {
      const userData: HanzhongUserDataType = {};

      const result = areCityRequirementsSatisfied(userData, requirement, { ...requirementsCache });
      expect(result).toBe(false);
    });

    it('returns false when another city is occupied', () => {
      const userData: HanzhongUserDataType = {
        [cityIdByName('Foo Bar')]: 1,
      };

      const result = areCityRequirementsSatisfied(userData, requirement, { ...requirementsCache });
      expect(result).toBe(false);
    });

    it('returns true when one of the cities is occupied', () => {
      const userData: HanzhongUserDataType = {
        [cityIdByName('Mianyang County')]: 1,
      };

      const result = areCityRequirementsSatisfied(userData, requirement, { ...requirementsCache });
      expect(result).toBe(true);
    });

    it('returns true when both of the cities are occupied', () => {
      const userData: HanzhongUserDataType = {
        [cityIdByName('Mianyang County')]: 1,
        [cityIdByName('Mianyang County')]: 1,
      };

      const result = areCityRequirementsSatisfied(userData, requirement, { ...requirementsCache });
      expect(result).toBe(true);
    });
  });

  describe('With recursion', () => {
    const requirement: HanzhongRequirement = {
      type: 'count',
      section: 'cities',
      requirementIds: [cityIdByName('Mount Dingjun'), cityIdByName('Hanshui Trail')],
      value: 1,
    };

    it('returns false when no cities are occupied', () => {
      const userData: HanzhongUserDataType = {};

      const result = areCityRequirementsSatisfied(userData, requirement, { ...requirementsCache });
      expect(result).toBe(false);
    });

    it('returns false when another city is occupied', () => {
      const userData: HanzhongUserDataType = {
        [cityIdByName('Foo Bar')]: 1,
      };

      const result = areCityRequirementsSatisfied(userData, requirement, { ...requirementsCache });
      expect(result).toBe(false);
    });

    it('returns false when one city is occupied, but not that city requirements', () => {
      const userData: HanzhongUserDataType = {
        [cityIdByName('Mount Dingjun')]: 1,
      };

      const result = areCityRequirementsSatisfied(userData, requirement, { ...requirementsCache });
      expect(result).toBe(false);
    });

    it('returns true when recursive are met', () => {
      const userData: HanzhongUserDataType = {
        [cityIdByName('Mount Dingjun')]: 1,
        [cityIdByName('Mianyang County')]: 1,
      };

      const result = areCityRequirementsSatisfied(userData, requirement, { ...requirementsCache });
      expect(result).toBe(true);
    });
  });
});
