import Grid from '@mui/material/Grid';

import { CardWrapper } from '../../shared';
import { HanzhongContextUserCheckbox } from '../ContextCheckbox';
import { useHanzhongContext } from '../HanzhongContext';
import { areRequirementsSatified } from '../requirements';
import { useMemo } from 'react';
import { useTheme } from '@mui/material/styles';
import type { HanzhongCityType } from './HanzhongCity';

export type HanzhongCityProps = {
  city: HanzhongCityType;
};

export const HanzhongCity = ({ city }: HanzhongCityProps) => {
  const theme = useTheme();
  const { user, cache } = useHanzhongContext();

  const requirementSatisfied = useMemo(() => {
    if (city.requirements) {
      return areRequirementsSatified(city.id, city.requirements, user, cache.requirements);
    }
  }, [cache.requirements, city.id, city.requirements, user]);

  const border = `3px solid ${requirementSatisfied?.satisfies ? 'transparent' : theme.palette.error.main}`;

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
