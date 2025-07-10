import { HanzhongInfosDisplay } from './HanzhongInfosDisplay';
import { useHanzhongContext } from './HanzhongContext';
import type { HanzhongInfoDisplayProps } from './HanzhongInfoDisplay';
import { HANZHONG_CITY_IDS } from '../constants/items-ids';

export const OccupiedCities = () => {
  const { user } = useHanzhongContext();

  const citiesIDs = Object.values(HANZHONG_CITY_IDS);

  const occupied: number = citiesIDs.reduce((sum, cityId): number => sum + (user[cityId] ?? 0), 0);

  const items: HanzhongInfoDisplayProps[] = [
    {
      label: 'Occupied',
      value: occupied,
      unit: `/${citiesIDs.length}`,
    },
  ];

  return <HanzhongInfosDisplay label="Occupied Cities" items={items} />;
};
