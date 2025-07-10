import { BasicCard } from '../../components/BasicCard';
import type { HanzhongTechType } from '../types';
import { useHanzhongContext } from './HanzhongContext';

export interface HanzhongTechProps {
  info: HanzhongTechType;
  value: number;
}

export const HanzhongTech = ({ info, value }: HanzhongTechProps) => {
  const { onChange } = useHanzhongContext();

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
