import Grid from '@mui/material/Grid';

import { useHanzhongContext } from './HanzhongContext';
import type { HanzhongCityType } from '../types';
import { City } from './City';

export const Cities = () => {
  const { hanzhong } = useHanzhongContext();

  return (
    <Grid container size={{ xs: 12 }} spacing={2}>
      {hanzhong.cities.map((city: HanzhongCityType) => (
        <City key={city.id} city={city} />
      ))}
    </Grid>
  );
};
