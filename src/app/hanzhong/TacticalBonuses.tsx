import { useMemo } from 'react';
import { useNavigate } from 'react-router';

import { HANZHONG_ROUTES } from './constants';
import { useHanzhongContext } from './HanzhongContext';
import { HanzhongInfosDisplay } from './HanzhongInfosDisplay';
import type { HanzhongInfoDataType } from './types';
import { calculateSpecialTrainingsTacticalPoints } from './utils';

export const TacticalBonuses = () => {
  const { bonuses, user, formationsUserData, cache } = useHanzhongContext();
  const navigate = useNavigate();

  const configure = () => navigate(HANZHONG_ROUTES.FORMATIONS);

  const items: HanzhongInfoDataType[] = useMemo<HanzhongInfoDataType[]>(
    () => calculateSpecialTrainingsTacticalPoints(user, bonuses, formationsUserData),
    [user, bonuses, formationsUserData]
  );

  cache.tacticalPoints = items;

  return <HanzhongInfosDisplay label="Tactical Points" items={items} configure={configure} />;
};
