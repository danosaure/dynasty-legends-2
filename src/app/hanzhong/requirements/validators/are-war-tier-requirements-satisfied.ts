import { areRequirementsSatified, type HanzhongRequirementCheckResult, type RequirementsCache } from '../../requirements';
import type { HanzhongUserDataType } from '../../types';
import { getWarTierById, type HanzhongWarTierTaskType, type HanzhongWarTierType } from '../../war-tiers';
import type { HanzhongWarTierRequirement } from './HanzhongWarTierRequirement';

export const areWarTierRequirementsSatisfied = (
  userData: HanzhongUserDataType,
  requirement: HanzhongWarTierRequirement,
  cache: RequirementsCache
): HanzhongRequirementCheckResult => {
  if (requirement.type === 'completed') {
    const tasksChecks = requirement.requirementIds.map((warTierId: string) => {
      const warTier: HanzhongWarTierType = getWarTierById(warTierId);
      const tasksRequirements = warTier.tasks.map<HanzhongWarTierTaskType>((task: HanzhongWarTierTaskType) => task.requirement);

      const requirements = (warTier.requirement ? [warTier.requirement] : []).concat(tasksRequirements);

      return areRequirementsSatified(warTier.id, userData, requirements, cache);
    });

    return { satisfies: tasksChecks.find((taskCheck) => !taskCheck.satisfies) === undefined, value: 1 };
  }
  return { satisfies: false, value: -1 };
};
