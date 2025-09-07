import { useHanzhongContext } from '../HanzhongContext';
import { areRequirementsSatisfied } from '../requirements';

import { HanzhongTechsTechCard } from './HanzhongTechsTechCard';
import type { HanzhongTechType } from './TechType';

export interface HanzhongTechsTechProps {
  info: HanzhongTechType;
  value: number;
}

export const HanzhongTechsTech = ({ info, value }: HanzhongTechsTechProps) => {
  const { user, cache } = useHanzhongContext();

  let satisfiedRequirements = null;
  if (info.requirements) {
    satisfiedRequirements = info.requirements.reduce<boolean>((stillValid, requirement) => {
      if (!stillValid) {
        return false;
      }

      const check = areRequirementsSatisfied(user, [requirement], cache.requirements);
      if (requirement.section === 'wartier' && requirement.type === 'level') {
        return check.satisfied || check.value === 0;
      }
      return check.satisfied;
    }, true);
  }

  return (
    <HanzhongTechsTechCard
      id={info.id}
      assetImage={info.assetPath}
      label={info.label}
      value={value}
      maxValue={info.levels.length}
      satisfiedRequirements={satisfiedRequirements}
    />
  );
};
