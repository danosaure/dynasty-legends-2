import { HanzhongInfosDisplay } from './HanzhongInfosDisplay';
import { useHanzhongContext } from './HanzhongContext';
import type { HanzhongInfoDisplayProps } from './HanzhongInfoDisplay';
import { HANZHONG_TERRITORY_IDS } from '../constants/items-ids';

export const OccupiedTerritories = () => {
  const { bonuses, user } = useHanzhongContext();

  const occupied: number = Object.values(HANZHONG_TERRITORY_IDS).reduce(
    (sum, territoryId): number => sum + (user[territoryId] ?? 0),
    0
  );

  const items: HanzhongInfoDisplayProps[] = [
    {
      label: 'Occupied',
      value: occupied,
      unit: `/${bonuses.territoryCap}`,
    },
  ];

  return <HanzhongInfosDisplay label="Occupied Territories" items={items} />;
};
