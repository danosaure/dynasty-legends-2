import { HanzhongInfosDisplay } from './HanzhongInfosDisplay';
import type { HanzhongInfoDataType } from '../types';
import { useUserDataContext } from '../../components/UserDataContext';
import { getUserDataValuesByKeys } from './utils';
import { useState } from 'react';

export interface ResourceIncomesProps {
  /**
   * When the user modifies the value.
   *
   * @param resourceIncomeKey Key to be used within `currentSelections`.
   * @param newValue Value entered by the user.
   * @returns
   */
  onChange: (resourceIncomeKey: string, newValue: number) => void;
}

const LUMBER_KEY = 'resource-income--lumber';
const GRAINS_KEY = 'resource-income--grains';
const IRON_KEY = 'resource-income--iron';

export const ResourceIncomes = ({ onChange }: ResourceIncomesProps) => {
  const { hanzhong: userData } = useUserDataContext();

  const [lumber, grains, iron] = getUserDataValuesByKeys(userData, [LUMBER_KEY, GRAINS_KEY, IRON_KEY]);

  const [projectedLumber] = useState(lumber);
  const [projectedGrains] = useState(grains);
  const [projectedIron] = useState(iron);

  const items: HanzhongInfoDataType[] = [
    [LUMBER_KEY, 'lumber', lumber, projectedLumber],
    [GRAINS_KEY, 'Grains', grains, projectedGrains],
    [IRON_KEY, 'Iron', iron, projectedIron],
  ].map(
    ([id, label, currentValue, projectedValue]): HanzhongInfoDataType => ({
      id: id as string,
      label: label as string,
      currentValue: currentValue as number,
      projectedValue: projectedValue as number,
      unit: '/h',
    })
  );

  return <HanzhongInfosDisplay label="Resource Income" items={items} onChange={onChange} />;
};
