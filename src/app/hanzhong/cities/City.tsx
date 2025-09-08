import Grid from '@mui/material/Grid';

import { CardWrapper } from '../../shared';
import { HanzhongContextUserCheckbox } from '../ContextCheckbox';
import { useHanzhongContext } from '../HanzhongContext';
import { areRequirementsSatisfied, type HanzhongRequirementResponse } from '../requirements';
import { useEffect, useMemo, useState } from 'react';
import { HANZHONG_REQUIREMENT_RESPONSES } from '../requirements/RequirementResponse';
import type { HanzhongCityType } from './CityType';
import { getFactionByName } from '../../data';
import { assetPath } from '../../utils';
import Typography from '@mui/material/Typography';
import { getColorByTacticalPoints } from '../utils';

export type HanzhongCityProps = {
  city: HanzhongCityType;
};

export const HanzhongCity = ({ city }: HanzhongCityProps) => {
  const { user, cache } = useHanzhongContext();
  const [available, setAvailable] = useState<HanzhongRequirementResponse>(HANZHONG_REQUIREMENT_RESPONSES.INITIAL_VALUE);

  useEffect(() => {
    if (city.requirement) {
      const requirementSatisfied = areRequirementsSatisfied(user, [city.requirement], cache.requirements);
      setAvailable(requirementSatisfied);
    }
  }, [user, cache.requirements, setAvailable, city.id, city.requirement]);

  const color = useMemo(
    () => getColorByTacticalPoints(cache.tacticalPoints, city.tacticalPoints[0]),
    [cache.tacticalPoints, city.tacticalPoints]
  );

  const border = `1px solid ${color}`;
  const opacity = available.satisfied ? 1.0 : 0.6;

  let faction = null;
  if (city.factionBonus) {
    faction = getFactionByName(city.factionBonus);
  }

  return (
    <CardWrapper sx={{ border, opacity }}>
      <Grid container size={{ xs: 12 }} sx={{ alignItems: 'center', justifyContent: 'center' }}>
        <img src={assetPath(city.avatar.path)} alt={city.name} width="40px" />
        {faction && <img src={assetPath(faction.avatar.path)} alt={faction.name} width="24px" />}
        <Typography variant="body2" textAlign="center" sx={{ color }}>
          {city.name}
        </Typography>
        <Grid size={{ xs: 12 }} sx={{ textAlign: 'center' }}>
          <HanzhongContextUserCheckbox id={city.id} />
        </Grid>
      </Grid>
      {city.tacticalPoints.map((tacticalPoint) => (
        <Typography key={tacticalPoint} variant="body2" align="center" sx={{ color }}>
          {tacticalPoint}
        </Typography>
      ))}
    </CardWrapper>
  );
};
