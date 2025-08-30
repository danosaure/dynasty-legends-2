import { describe, expect, it } from 'vitest';
import type { HanzhongUserDataType } from '../types';
import { isTechRequirementSatisfied, type HanzhongTechRequirement } from './requirements';
import { getTechByName } from '../data';

describe('isTechRequirementSatisfied()', () => {
  const OTHER_TECH_NAME = 'Diligent Warrior I';
  const TECH_NAME = 'Free Paths';
  const USER_DATA_TECH = getTechByName(TECH_NAME);
  if (!USER_DATA_TECH) {
    throw new Error(`Invalid tech name "${TECH_NAME}" in test.`);
  }
  const userData: HanzhongUserDataType = {
    [USER_DATA_TECH.id]: 3,
  };

  describe('type="level"', () => {
    it('returns false when tech is not in userData even if level=0', () => {
      const requirement: HanzhongTechRequirement = {
        section: 'techs',
        type: 'level',
        techName: OTHER_TECH_NAME,
        level: 0,
      };
      const satisfied = isTechRequirementSatisfied(requirement, userData);
      expect(satisfied).toEqual({ satisfied: false, value: 0 });
    });

    it('returns false when tech is not in userData', () => {
      const requirement: HanzhongTechRequirement = {
        section: 'techs',
        type: 'level',
        techName: OTHER_TECH_NAME,
        level: 5,
      };
      const satisfied = isTechRequirementSatisfied(requirement, userData);
      expect(satisfied).toEqual({ satisfied: false, value: 0 });
    });

    it('returns false when current level is below required', () => {
      const requirement: HanzhongTechRequirement = {
        section: 'techs',
        type: 'level',
        techName: TECH_NAME,
        level: userData[USER_DATA_TECH.id] + 1,
      };
      const satisfied = isTechRequirementSatisfied(requirement, userData);
      expect(satisfied).toEqual({ satisfied: false, value: 3 });
    });

    it('returns true when current level is equal required', () => {
      const requirement: HanzhongTechRequirement = {
        section: 'techs',
        type: 'level',
        techName: TECH_NAME,
        level: userData[USER_DATA_TECH.id],
      };
      const satisfied = isTechRequirementSatisfied(requirement, userData);
      expect(satisfied).toEqual({ satisfied: true, value: 3 });
    });

    it('returns true when current level is below required', () => {
      const requirement: HanzhongTechRequirement = {
        section: 'techs',
        type: 'level',
        techName: TECH_NAME,
        level: userData[USER_DATA_TECH.id] - 1,
      };
      const satisfied = isTechRequirementSatisfied(requirement, userData);
      expect(satisfied).toEqual({ satisfied: true, value: 3 });
    });
  });
});
