import { HANZHONG_CITY_IDS, HANZHONG_TERRITORY_IDS } from '../constants/items-ids';
import type { HanzhongInfoDataType } from '../types';

import { useHanzhongContext } from './HanzhongContext';
import { HanzhongInfosDisplay } from './HanzhongInfosDisplay';

export const Progress = () => {
  const { bonuses, user, hanzhong } = useHanzhongContext();

  const territories: number = Object.values(HANZHONG_TERRITORY_IDS).reduce(
    (sum, territoryId): number => sum + (user[territoryId] ?? 0),
    0
  );
  const citiesIDs = Object.values(HANZHONG_CITY_IDS);

  const cities: number = citiesIDs.reduce((sum, cityId): number => sum + (user[cityId] ?? 0), 0);

  const items: HanzhongInfoDataType[] = [
    {
      label: 'Territories',
      value: territories,
      maxValue: bonuses.territoryCap,
    },
    {
      label: 'Cities',
      value: cities,
      maxValue: citiesIDs.length,
    },
    {
      label: 'Bandits',
      value: 0,
      maxValue: hanzhong.bandits.attacks.length,
    },
  ];

  return <HanzhongInfosDisplay label="Progress" items={items} />;
};
