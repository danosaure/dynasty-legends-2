import type { HanzhongTechType } from '../types';

import { HanzhongTechsTechCard } from './HanzhongTechsTechCard';

export interface HanzhongTechsTechProps {
  info: HanzhongTechType;
  value: number;
}

export const HanzhongTechsTech = ({ info, value }: HanzhongTechsTechProps) => {
  return (
    <HanzhongTechsTechCard
      id={info.id}
      assetImage={info.assetPath}
      label={info.label}
      value={value}
      maxValue={info.levels.length}
    />
  );
};
