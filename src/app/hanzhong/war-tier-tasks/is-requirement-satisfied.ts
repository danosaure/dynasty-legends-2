import { VALIDATOR_RESPONSES, type HanzhongRequirement, type HanzhongRequirementValidator } from '../requirements';

export const isWarTierTaskRequirementSatisfied: HanzhongRequirementValidator = (requirement: HanzhongRequirement) => {
  if (requirement.section === 'warTierTasks') {
    console.log(`isWarTierTaskRequirementSatisfied REACHED... requirement=`, requirement);
    return VALIDATOR_RESPONSES.ASSUME_DONE;
  }
  return VALIDATOR_RESPONSES.UNKNOWN_SECTION;
};
