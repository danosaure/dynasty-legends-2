import type { HanzhongInfoDataType } from '../types';

import { useHanzhongContext } from './HanzhongContext';
import { HanzhongInfosDisplay } from './HanzhongInfosDisplay';

export const ResourceIncomes = () => {
  const { bonuses } = useHanzhongContext();

  const items: HanzhongInfoDataType[] = [
    {
      label: 'Lumber',
      value: bonuses.woodRate ?? 0,
      unit: '/h',
    },
    {
      label: 'Grains',
      value: bonuses.grainsRate ?? 0,
      unit: '/h',
    },
    {
      label: 'Iron',
      value: bonuses.ironRate ?? 0,
      unit: '/h',
    },
  ];

  return <HanzhongInfosDisplay label="Resource Income" items={items} />;
};
