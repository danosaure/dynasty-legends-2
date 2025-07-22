import { HanzhongTechCard } from '../tech-card';
import type { HanzhongTechType } from '../types';

export interface HanzhongTechsTechProps {
  info: HanzhongTechType;
  value: number;
}

export const HanzhongTechsTech = ({ info, value }: HanzhongTechsTechProps) => {
  return (
    <HanzhongTechCard id={info.id} assetImage={info.assetPath} label={info.label} value={value} maxValue={info.levels.length} />
  );
};
