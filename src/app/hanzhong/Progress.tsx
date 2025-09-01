import { useEffect, useMemo, useState } from 'react';

import { HANZHONG_TERRITORY_IDS } from './constants';
import { useHanzhongContext } from './HanzhongContext';
import { HanzhongInfosDisplay } from './HanzhongInfosDisplay';
import type { HanzhongInfoDataType } from './types';
import { sumValuesFromUserByPrefix } from './utils';
import { countOccupiedCities } from './cities';
import { numberOfCities } from './cities';
import { HANZHONG_BANDITS } from './bandits';

export const Progress = () => {
  const { bonuses, user } = useHanzhongContext();
  const [banditsCount, setBanditsCount] = useState<number>(sumValuesFromUserByPrefix(user, HANZHONG_BANDITS.id));

  useEffect(() => {
    setBanditsCount(sumValuesFromUserByPrefix(user, HANZHONG_BANDITS.id));
  }, [user]);

  const territories: number = Object.values(HANZHONG_TERRITORY_IDS).reduce(
    (sum, territoryId): number => sum + (user[territoryId] ?? 0),
    0
  );

  const cities: number = useMemo(() => countOccupiedCities(user), [user]);

  const items: HanzhongInfoDataType[] = [
    {
      label: 'Territories',
      value: territories,
      maxValue: bonuses.territoryCap,
    },
    {
      label: 'Cities',
      value: cities,
      maxValue: numberOfCities(),
    },
    {
      label: 'Bandits',
      value: banditsCount,
      maxValue: HANZHONG_BANDITS.attacks.length,
    },
  ];

  return <HanzhongInfosDisplay label="Progress" items={items} />;
};
