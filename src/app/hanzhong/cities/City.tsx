import Grid from '@mui/material/Grid';

import { CardWrapper } from '../../shared';
import type { HanzhongCityType } from './types';
import { HanzhongContextUserCheckbox } from '../ContextCheckbox';
import { useHanzhongContext } from '../HanzhongContext';
import { areRequirementsSatisfied, type HanzhongRequirementResponse } from '../requirements';
import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { HANZHONG_REQUIREMENT_RESPONSES } from '../requirements/RequirementResponse';

export type HanzhongCityProps = {
  city: HanzhongCityType;
};

export const HanzhongCity = ({ city }: HanzhongCityProps) => {
  const theme = useTheme();
  const { user, cache } = useHanzhongContext();
  const [available, setAvailable] = useState<HanzhongRequirementResponse>(HANZHONG_REQUIREMENT_RESPONSES.INITIAL_VALUE);

  useEffect(() => {
    if (city.requirement) {
      const requirementSatisfied = areRequirementsSatisfied(user, [city.requirement], cache.requirements);
      setAvailable(requirementSatisfied);
    }
  }, [user, cache.requirements, setAvailable, city.id, city.requirement]);

  const border = `3px solid ${available.satisfied ? 'transparent' : theme.palette.error.main}`;

  return (
    <CardWrapper sx={{ border }}>
      <Grid container size={{ xs: 12 }} sx={{ alignItems: 'center', justifyContent: 'center' }}>
        <Grid size={{ xs: 12 }} sx={{ textAlign: 'center' }}>
          {city.name}
        </Grid>
        <Grid size={{ xs: 12 }} sx={{ textAlign: 'center' }}>
          <HanzhongContextUserCheckbox id={city.id} />
        </Grid>
      </Grid>
    </CardWrapper>
  );
};
