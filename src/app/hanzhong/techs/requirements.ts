import { getNumberValue } from '../../utils';
import { getTechByName } from '../data';
// import type { RequirementsCache } from '../requirements';
import type { HanzhongUserDataType } from '../types';

const SECTION_NAME = 'techs';

export type HanzhongTechBaseRequirement = {
  section: typeof SECTION_NAME;
};

export type HanzhongTechLevelRequirement = HanzhongTechBaseRequirement & {
  type: 'level';
  techName: string;
  level: number;
};

export type HanzhongTechRequirement = HanzhongTechLevelRequirement;

export const isTechRequirementSatisfied = (
  requirement: HanzhongTechRequirement,
  userData: HanzhongUserDataType
  // requirementsCache: RequirementsCache
): boolean => {
  if (requirement.section !== SECTION_NAME) {
    throw new Error(`Invalid requirement section="${requirement.section}". Expecting "techs"`);
  }

  if (requirement.type === 'level') {
    const tech = getTechByName(requirement.techName);
    if (!tech) {
      throw new Error(`Invalid techName="${requirement.techName}" for requirement "${requirement.section}/${requirement.type}".`);
    }
    const level = getNumberValue(userData, tech.id);
    return requirement.level > 0 && level >= requirement.level;
  } else {
    throw new Error(`Invalid requirement type "${requirement.type}" for section "${requirement.section}".`);
  }
};
