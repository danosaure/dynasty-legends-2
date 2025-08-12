import { describe, expect, it } from 'vitest';

import type { HanzhongUserDataType } from '../types';
import type { HanzhongRequirementsCache } from '../requirements';

import { cityIdByName } from './city-id-by-name';
import { isCityRequirementSatisfied } from './is-requirement-satisfied';
import type { HanzhongCityRequirement } from './Requirement';

describe('areCityRequirementsSatisfied()', () => {
  const requirementsCache: HanzhongRequirementsCache = {};

  describe('section="hanzhong"', () => {
    const requirement: HanzhongCityRequirement = {
      section: 'cities',
      type: 'hanzhong',
    };

    it('returns false when no cities are occupied', () => {
      const userData: HanzhongUserDataType = {};
      const result = isCityRequirementSatisfied(requirement, userData, { ...requirementsCache });
      expect(result.satisfies).toBe(false);
    });

    it('returns true when hanzhong city is occupied', () => {
      const userData: HanzhongUserDataType = {
        [cityIdByName('Hanzhong City')]: 1,
      };
      const result = isCityRequirementSatisfied(requirement, userData, { ...requirementsCache });
      expect(result.satisfies).toBe(true);
    });
  });
});
