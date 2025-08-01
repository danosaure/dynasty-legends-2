import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import { HANZHONG_ROUTES } from './constants';
import { useHanzhongContext } from './HanzhongContext';
import { HanzhongInfosDisplay } from './HanzhongInfosDisplay';
import type { HanzhongInfoDataType } from './types';
import { calculateSpecialTrainingsTacticalPoints } from './utils';

export const TacticalBonuses = () => {
  const { bonuses, user } = useHanzhongContext();
  const navigate = useNavigate();
  const [items, setItems] = useState<HanzhongInfoDataType[]>(calculateSpecialTrainingsTacticalPoints(user, bonuses));

  const configure = () => navigate(HANZHONG_ROUTES.FORMATIONS);

  useEffect(() => {
    setItems(calculateSpecialTrainingsTacticalPoints(user, bonuses));
  }, [user, bonuses]);

  return <HanzhongInfosDisplay label="Tactical Points" items={items} configure={configure} />;
};
