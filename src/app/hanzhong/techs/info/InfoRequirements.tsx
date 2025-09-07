import { areRequirementsSatisfied, type HanzhongRequirement, type RequirementsCache } from '../../requirements';
import { useHanzhongContext } from '../../HanzhongContext';
import { HanzhongTechInfoRequirementWrapper } from './InfoRequirementWrapper';
import { infoRequirementTextColor } from './info-requirement-text-color';
import { HanzhongTechInfoRequirementTechLevel } from './InfoRequirementTechLevel';
import { HanzhongTechInfoRequirementWarTierLevel } from './InfoRequirementWarTierLevel';
import type { HanzhongUserDataType } from '../../types';

const requirementInfo = (
  requirement: HanzhongRequirement,
  userData: HanzhongUserDataType,
  requirementsCache: RequirementsCache
) => {
  const check = areRequirementsSatisfied(userData, [requirement], requirementsCache);
  let info;

  const color = infoRequirementTextColor(check);

  if (requirement.section === 'techs') {
    if (requirement.type === 'level') {
      info = <HanzhongTechInfoRequirementTechLevel requirement={requirement} check={check} color={color} />;
    }
  } else if (requirement.section === 'wartier') {
    if (requirement.type === 'level') {
      info = <HanzhongTechInfoRequirementWarTierLevel requirement={requirement} color={color} />;
    }
  }

  return <HanzhongTechInfoRequirementWrapper requirement={requirement}>{info}</HanzhongTechInfoRequirementWrapper>;
};

export type HanzhongTechsTechInfoRequirementsProps = {
  requirements: HanzhongRequirement[] | undefined;
};

export const HanzhongTechsTechInfoRequirements = ({ requirements }: HanzhongTechsTechInfoRequirementsProps) => {
  const { user, cache } = useHanzhongContext();

  if (!requirements?.length) {
    return null;
  }
  return requirements.map((requirement) => requirementInfo(requirement, user, cache.requirements));
};
