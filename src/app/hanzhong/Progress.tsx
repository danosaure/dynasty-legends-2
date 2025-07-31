import { useEffect, useState } from 'react';
import { SECTION_KEYS } from './constants';
import type { HanzhongInfoDataType } from './types';

import { useHanzhongContext } from './HanzhongContext';
import { HanzhongInfosDisplay } from './HanzhongInfosDisplay';
import { sumValuesFromSection } from './utils';
import { HANZHONG_DATA } from './data';

export const Progress = () => {
  const { bonuses, getSection } = useHanzhongContext();
  const [banditsCount, setBanditsCount] = useState<number>(sumValuesFromSection(getSection(SECTION_KEYS.BANDITS)));

  useEffect(() => {
    setBanditsCount(sumValuesFromSection(getSection(SECTION_KEYS.BANDITS)));
  }, [getSection]);

  const territories: number = sumValuesFromSection(getSection(SECTION_KEYS.TERRITORIES));

  const cities: number = sumValuesFromSection(getSection(SECTION_KEYS.CITIES));

  const items: HanzhongInfoDataType[] = [
    {
      label: 'Territories',
      value: territories,
      maxValue: bonuses.territoryCap,
    },
    {
      label: 'Cities',
      value: cities,
      maxValue: HANZHONG_DATA.cities.length,
    },
    {
      label: 'Bandits',
      value: banditsCount,
      maxValue: HANZHONG_DATA.bandits.attacks.length,
    },
  ];

  return <HanzhongInfosDisplay label="Progress" items={items} />;
};
