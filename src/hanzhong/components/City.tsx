import { useState, type ChangeEvent } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';

import { useHanzhongContext } from './HanzhongContext';
import type { HanzhongCityType } from '../types';

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
    <Card elevation={10}>
      <CardContent sx={{ 'p': 2, '&:last-child': { pb: 2 } }}>
        <Grid container size={{ xs: 12 }} sx={{ alignItems: 'center', justifyContent: 'center' }}>
          <Grid size={{ xs: 12 }} sx={{ textAlign: 'center' }}>
            {city.name}
          </Grid>
          <Grid size={{ xs: 12 }} sx={{ textAlign: 'center' }}>
            <Checkbox checked={checked} onChange={checkboxChanged} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
