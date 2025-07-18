import type { HanzhongTechType } from '../types';

import { HanzhongTechCard } from './tech-card';

export interface HanzhongTechProps {
  info: HanzhongTechType;
  value: number;
}

export const HanzhongTech = ({ info, value }: HanzhongTechProps) => {
  return (
    <HanzhongTechCard id={info.id} assetImage={info.assetPath} label={info.label} value={value} maxValue={info.levels.length} />
  );
};
