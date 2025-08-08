import Grid from '@mui/material/Grid';

import { CardWrapper } from '../../shared';
import type { HanzhongCityType } from './types';
import { HanzhongContextUserCheckbox } from '../ContextCheckbox';
import { useHanzhongContext } from '../HanzhongContext';
import { areRequirementsSatified, type HanzhongRequirementCheckResult } from '../requirements';
import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';

export type HanzhongCityProps = {
  city: HanzhongCityType;
};

export const HanzhongCity = ({ city }: HanzhongCityProps) => {
  const theme = useTheme();
  const { user, cache } = useHanzhongContext();
  const [check, setCheck] = useState<HanzhongRequirementCheckResult>({ satisfies: true, value: 0 });

  useEffect(() => {
    if (city.requirements) {
      const requirementSatisfied = areRequirementsSatified(city.id, user, city.requirements, cache.requirements);
      setCheck(requirementSatisfied);
    }
  }, [user, cache.requirements, setCheck, city.id, city.requirements]);

  const border = `3px solid ${check.satisfies ? 'transparent' : theme.palette.error.main}`;

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
