import { areCityRequirementsSatisfied } from '../cities';
import type { HanzhongUserDataType } from '../types';
import type { HanzhongRequirement } from './HanzhongRequirement';
import type { RequirementsCache } from './RequirementsCache';

export const areRequirementsSatified = (
  id: string,
  userData: HanzhongUserDataType,
  requirements: HanzhongRequirement[],
  requirementsCache: RequirementsCache
): boolean => {
  const savedValue = requirementsCache[id];

  if (savedValue === undefined) {
    const requirementsSatisfied = requirements.reduce<boolean>((stillValid, requirement) => {
      if (!stillValid) {
        return false;
      }

      if (requirement.section === 'cities') {
        return areCityRequirementsSatisfied(userData, requirement, requirementsCache);
      } else {
        console.error(`areRequirementsSatified(id="${id}"): need to handle requirement.section="${requirement.section}".`);
        return false;
      }
    }, true);

    requirementsCache[id] = requirementsSatisfied;
  }

  return requirementsCache[id];
};
