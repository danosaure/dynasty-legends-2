import { useHanzhongContext } from '../HanzhongContext';
import { areRequirementsSatified } from '../requirements';
import type { HanzhongTechType } from '../types';

import { HanzhongTechsTechCard } from './HanzhongTechsTechCard';

export interface HanzhongTechsTechProps {
  info: HanzhongTechType;
  value: number;
}

export const HanzhongTechsTech = ({ info, value }: HanzhongTechsTechProps) => {
  const { user, cache } = useHanzhongContext();

  let satisfiedRequirements = null;
  if (info.requirements) {
    const check = areRequirementsSatified(user, info.requirements, cache.requirements);
    satisfiedRequirements = check.satisfied;
  }
  const disabled = false;

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
