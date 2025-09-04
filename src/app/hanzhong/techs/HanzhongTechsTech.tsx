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
    const check = areRequirementsSatisfied(user, info.requirements, cache.requirements);
    satisfiedRequirements = check.satisfied;
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
