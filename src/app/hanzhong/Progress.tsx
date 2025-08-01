import { useEffect, useState } from 'react';
import { HANZHONG_CITY_IDS, HANZHONG_TERRITORY_IDS } from './constants';
import type { HanzhongInfoDataType } from './types';
import { sumValuesFromUserByPrefix } from './utils';

import { useHanzhongContext } from './HanzhongContext';
import { HanzhongInfosDisplay } from './HanzhongInfosDisplay';
import { HANZHONG_DATA } from './data';

export const Progress = () => {
  const { bonuses, user } = useHanzhongContext();
  const [banditsCount, setBanditsCount] = useState<number>(sumValuesFromUserByPrefix(user, HANZHONG_DATA.bandits.id));

  useEffect(() => {
    setBanditsCount(sumValuesFromUserByPrefix(user, HANZHONG_DATA.bandits.id));
  }, [user]);

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
      value: banditsCount,
      maxValue: HANZHONG_DATA.bandits.attacks.length,
    },
  ];

  return <HanzhongInfosDisplay label="Progress" items={items} />;
};
