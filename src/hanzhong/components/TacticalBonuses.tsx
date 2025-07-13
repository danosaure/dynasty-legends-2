import { HanzhongInfosDisplay } from './HanzhongInfosDisplay';
import { useHanzhongContext } from './HanzhongContext';
import type { HanzhongInfoDisplayProps } from './HanzhongInfoDisplay';
import { calculateTacticalPoints } from '../utils/calculate-tactical-points';
import { TACTICAL_POINTS_PER_ATK, TACTICAL_POINTS_PER_DEF, TACTICAL_POINTS_PER_HP } from '../constants/tactical-points-per-bonus';

export const TacticalBonuses = () => {
  const { bonuses, bonusesVanguardCamp, bonusesValiantCavalry, bonusesRoyalGuards } = useHanzhongContext();

  const items: HanzhongInfoDisplayProps[] = [
    // {
    //   label: 'ATK',
    //   value: bonuses.atk ?? 0,
    //   unit: `x${TACTICAL_POINTS_PER_ATK}`,
    // },
    // {
    //   label: 'DEF',
    //   value: bonuses.def ?? 0,
    //   unit: `x${TACTICAL_POINTS_PER_DEF}`,
    // },
    // {
    //   label: 'HP',
    //   value: bonuses.hp ?? 0,
    //   unit: `x${TACTICAL_POINTS_PER_HP}`,
    // },
    // {
    //   label: 'Tactical Points',
    //   value: calculateTacticalPoints(bonuses),
    // },
    {
      label: 'Vanguard Camp',
      value: calculateTacticalPoints(bonusesVanguardCamp),
    },
    {
      label: 'Valiant Cavalry',
      value: calculateTacticalPoints(bonusesValiantCavalry),
    },
    {
      label: 'Royal Guards',
      value: calculateTacticalPoints(bonusesRoyalGuards),
    },
  ];

  return <HanzhongInfosDisplay label="Tactical Points" items={items} />;
};
