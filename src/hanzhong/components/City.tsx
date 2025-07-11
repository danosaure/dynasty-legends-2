import Grid from '@mui/material/Grid';

import type { HanzhongCityType } from '../types';
import Checkbox from '@mui/material/Checkbox';
import { useState, type ChangeEvent } from 'react';
import { useHanzhongContext } from './HanzhongContext';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

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
    <Card sx={{ width: 200 }} elevation={10}>
      <CardContent sx={{ 'p': 1, '&:last-child': { pb: 1 } }}>
        <Grid container size={{ xs: 12 }} sx={{ alignItems: 'center', justifyContent: 'center' }} spacing={2}>
          <Grid size={{ xs: 8 }}>{city.name}</Grid>
          <Grid size={{ xs: 4 }}>
            <Checkbox checked={checked} onChange={checkboxChanged} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
