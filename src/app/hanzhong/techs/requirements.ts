import { getNumberValue } from '../../utils';
import { getTechByName } from '../data';
import {
  errorRequirementResponse,
  type HanzhongRequirementResponse,
  //  type RequirementsCache
} from '../requirements';
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
): HanzhongRequirementResponse => {
  if (requirement.section !== SECTION_NAME) {
    return errorRequirementResponse(`Invalid requirement section="${requirement.section}". Expecting "techs"`);
  }

  if (requirement.type === 'level') {
    const tech = getTechByName(requirement.techName);
    if (!tech) {
      return errorRequirementResponse(
        `Invalid techName="${requirement.techName}" for requirement "${requirement.section}/${requirement.type}".`
      );
    }

    const level = getNumberValue(userData, tech.id);
    return {
      satisfied: requirement.level > 0 && level >= requirement.level,
      value: level,
      expected: requirement.level,
    };
  } else {
    return errorRequirementResponse(`Invalid requirement type "${requirement.type}" for section "${requirement.section}".`);
  }
};
