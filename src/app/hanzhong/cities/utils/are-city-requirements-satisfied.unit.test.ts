import { describe, expect, it } from 'vitest';
import { cityIdByName } from './city-id-by-name';
import type { HanzhongUserDataType } from '../../types';
import type { HanzhongRequirement } from '../../requirements';
import { areCityRequirementsSatisfied } from './are-city-requirements-satisfied';
import type { RequirementsCache } from '../../requirements/RequirementsCache';

describe('areCityRequirementsSatisfied()', () => {
  const requirementsCache: RequirementsCache = {};

  const requirement: HanzhongRequirement = {
    type: 'count',
    section: 'cities',
    requirementIds: [cityIdByName('Mount Dingjun'), cityIdByName('Hanshui Trail')],
    value: 1,
  };

  it('returns false when no cities are occupied', async () => {
    const userData: HanzhongUserDataType = {};

    const result = await areCityRequirementsSatisfied(userData, requirement, requirementsCache);
    expect(result).toBe(false);
  });

  it('returns false when another city is occupied', async () => {
    const userData: HanzhongUserDataType = {
      [cityIdByName('Foo Bar')]: 1,
    };

    const result = await areCityRequirementsSatisfied(userData, requirement, requirementsCache);
    expect(result).toBe(false);
  });

  it('returns true when one of the cities is occupied', async () => {
    const userData: HanzhongUserDataType = {
      [cityIdByName('Mount Dingjun')]: 1,
    };

    const result = await areCityRequirementsSatisfied(userData, requirement, requirementsCache);
    expect(result).toBe(true);
  });

  it('returns true when both of the cities are occupied', async () => {
    const userData: HanzhongUserDataType = {
      [cityIdByName('Mount Dingjun')]: 1,
      [cityIdByName('Hanshui Trail')]: 1,
    };

    const result = await areCityRequirementsSatisfied(userData, requirement, requirementsCache);
    expect(result).toBe(true);
  });
});
