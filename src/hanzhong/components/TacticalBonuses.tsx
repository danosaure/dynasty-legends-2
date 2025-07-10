import { HanzhongInfosDisplay } from './HanzhongInfosDisplay';
import { useHanzhongContext } from './HanzhongContext';
import type { HanzhongInfoDisplayProps } from './HanzhongInfoDisplay';

export const TacticalBonuses = () => {
  const { bonuses } = useHanzhongContext();

  const items: HanzhongInfoDisplayProps[] = [
    {
      label: 'ATK',
      value: bonuses.atk ?? 0,
    },
    {
      label: 'DEF',
      value: bonuses.def ?? 0,
    },
    {
      label: 'HP',
      value: bonuses.hp ?? 0,
    },
    {
      label: 'Tactical Points',
      value: Math.floor((bonuses.atk ?? 0) * 45 + (bonuses.def ?? 0) * 45 + (bonuses.hp ?? 0) + 0.6),
    },
  ];

  return <HanzhongInfosDisplay label="Tactical Points" items={items} />;
};
