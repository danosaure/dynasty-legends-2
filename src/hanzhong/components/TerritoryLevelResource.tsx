import { ValueAdjuster } from '../../components/ValueAdjuster';
import { useHanzhongContext } from './HanzhongContext';
import { TerritoryCell } from './TerritoryCell';

export type TerritoryLevelResourceProps = {
  id: string;
};

export const TerritoryLevelResource = ({ id }: TerritoryLevelResourceProps) => {
  const { user, onChange } = useHanzhongContext();

  return (
    <TerritoryCell>
      <ValueAdjuster value={user[id] ?? 0} onChange={(newValue: number) => onChange(id, newValue)} />
    </TerritoryCell>
  );
};
