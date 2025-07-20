import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import { HANZHONG_ROUTES } from '../constants';
import type { HanzhongInfoDataType } from '../types';
import { calculateSpecialTrainingsTacticalPoints } from '../utils';

import { useHanzhongContext } from './HanzhongContext';
import { HanzhongInfosDisplay } from './HanzhongInfosDisplay';

export const TacticalBonuses = () => {
  const { bonuses, user, hanzhong } = useHanzhongContext();
  const navigate = useNavigate();
  const [items, setItems] = useState<HanzhongInfoDataType[]>(calculateSpecialTrainingsTacticalPoints(hanzhong, user, bonuses));

  const configure = () => navigate(HANZHONG_ROUTES.FORMATIONS);

  useEffect(() => {
    setItems(calculateSpecialTrainingsTacticalPoints(hanzhong, user, bonuses));
  }, [hanzhong, user, bonuses]);

  return <HanzhongInfosDisplay label="Tactical Points" items={items} configure={configure} />;
};
