import type { HanzhongTechType } from '../../types/hanzhong/hanzhong-tech-type';
import { BasicCard } from '../BasicCard';

export interface HanzhongTechProps {
  info: HanzhongTechType;
  value: number;
  onChange: (id: string, newValue: number) => void;
}

export const HanzhongTech = ({ info, value, onChange }: HanzhongTechProps) => {
  const onChangeValue = (newValue: number) => onChange(info.id, newValue);

  return (
    <BasicCard
      assetImage={info.assetPath}
      label={info.label}
      value={value}
      maxValue={info.levels.length}
      onChange={onChangeValue}
    />
  );
};
