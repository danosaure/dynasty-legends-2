import { HanzhongInfosDisplay } from './HanzhongInfosDisplay';
import { useHanzhongContext } from './HanzhongContext';
import type { HanzhongInfoDisplayProps } from './HanzhongInfoDisplay';
import { HANZHONG_CITY_IDS, HANZHONG_TERRITORY_IDS } from '../constants/items-ids';

export const OccupiedTerritories = () => {
  const { bonuses, user } = useHanzhongContext();

  const territories: number = Object.values(HANZHONG_TERRITORY_IDS).reduce(
    (sum, territoryId): number => sum + (user[territoryId] ?? 0),
    0
  );
  const citiesIDs = Object.values(HANZHONG_CITY_IDS);

  const cities: number = citiesIDs.reduce((sum, cityId): number => sum + (user[cityId] ?? 0), 0);

  const items: HanzhongInfoDisplayProps[] = [
    {
      label: 'Territories',
      value: territories,
      unit: `/${bonuses.territoryCap}`,
    },
    {
      label: 'Cities',
      value: cities,
      unit: `/${citiesIDs.length}`,
    },
    {
      label: 'Bandits',
      value: 0,
    },
  ];

  return <HanzhongInfosDisplay label="Progress" items={items} />;
};
