import Grid from '@mui/material/Grid';

import { CardWrapper } from '../../shared';
import type { HanzhongCityType } from './types';
import { HanzhongContextUserCheckbox } from '../ContextCheckbox';
import { useHanzhongContext } from '../HanzhongContext';
import { areRequirementsSatified } from '../requirements';
import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';

export type HanzhongCityProps = {
  city: HanzhongCityType;
};

export const HanzhongCity = ({ city }: HanzhongCityProps) => {
  const theme = useTheme();
  const { user, cache } = useHanzhongContext();
  const [available, setAvailable] = useState<boolean>(true);

  useEffect(() => {
    if (city.requirement) {
      const requirementSatisfied = areRequirementsSatified(city.id, user, [city.requirement], cache.requirements);
      setAvailable(requirementSatisfied);
    }
  }, [user, cache.requirements, setAvailable, city.id, city.requirement]);

  const border = `3px solid ${available ? 'transparent' : theme.palette.error.main}`;

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
