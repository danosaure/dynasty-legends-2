import { useNavigate } from 'react-router';

import { HANZHONG_ROUTES } from '../constants';
import type { HanzhongInfoDataType } from '../types';
import { calculateTacticalPoints } from '../utils/calculate-tactical-points';

import { useHanzhongContext } from './HanzhongContext';
import { HanzhongInfosDisplay } from './HanzhongInfosDisplay';

export const TacticalBonuses = () => {
  const { bonusesVanguardCamp, bonusesValiantCavalry, bonusesRoyalGuards } = useHanzhongContext();
  const navigate = useNavigate();

  const configure = () => navigate(HANZHONG_ROUTES.FORMATIONS);

  const items: HanzhongInfoDataType[] = [
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

  return <HanzhongInfosDisplay label="Tactical Points" items={items} configure={configure} />;
};
