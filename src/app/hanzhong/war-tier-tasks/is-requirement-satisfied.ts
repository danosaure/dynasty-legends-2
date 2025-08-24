import { VALIDATOR_RESPONSES, type HanzhongRequirement, type HanzhongRequirementValidator } from '../requirements';

export const isWarTierTaskRequirementSatisfied: HanzhongRequirementValidator = (requirement: HanzhongRequirement) => {
  if (requirement.section === 'warTierTasks') {
    console.log(`isWarTierTaskRequirementSatisfied REACHED... requirement=`, requirement);
    return { requirement, ...VALIDATOR_RESPONSES.ASSUME_DONE };
  }
  return { requirement, ...VALIDATOR_RESPONSES.UNKNOWN_SECTION };
};
