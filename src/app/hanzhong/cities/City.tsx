import Grid from '@mui/material/Grid';

import { CardWrapper } from '../../shared';
import type { HanzhongCityType } from './types';
import { HanzhongContextUserCheckbox } from '../ContextCheckbox';
// import { useHanzhongContext } from './HanzhongContext';

export type HanzhongCityProps = {
  city: HanzhongCityType;
};

export const HanzhongCity = ({ city }: HanzhongCityProps) => {
  // const { user, requirementsCache } = useHanzhongContext();

  // if (city.requirements) {
  //   Promise.resolve(requirementsCache[city.id])
  //     .then((value) => {
  //       if (value !== undefined) {
  //         return value;
  //       }
  //     })
  //     .then((value) => {});
  // }

  return (
    <CardWrapper>
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
