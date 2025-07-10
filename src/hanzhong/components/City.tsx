import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import type { HanzhongCityType } from '../types';
import Checkbox from '@mui/material/Checkbox';
import { useState, type ChangeEvent } from 'react';
import { useHanzhongContext } from './HanzhongContext';

export type CityProps = {
  city: HanzhongCityType;
};

export const City = ({ city }: CityProps) => {
  const { user, onChange } = useHanzhongContext();

  const [checked, setChecked] = useState<boolean>(Boolean(user[city.id] ?? 0));

  const checkboxChanged = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(city.id, e.target.checked ? 1 : 0);
    setChecked(e.target.checked);
  };

  return (
    <Paper elevation={10} sx={{ width: '100%' }}>
      <Grid
        container
        size={{ xs: 12 }}
        style={{ padding: '10px' }}
        sx={{ alignItems: 'flex-start', justifyContent: 'flex-start' }}
        spacing={2}
      >
        <Grid size={{ xs: 6 }}>{city.name}</Grid>
        <Grid size={{ xs: 6 }}>
          <Checkbox checked={checked} onChange={checkboxChanged} />
        </Grid>
      </Grid>
    </Paper>
  );
};
