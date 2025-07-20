import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { CardWrapper, ValueAdjuster } from '../shared';

import { useHanzhongContext } from './HanzhongContext';

export type TerritoryLevelResourceProps = {
  label: string;
  level: number;
  id: string;
};

export const TerritoryLevelResource = ({ label, level, id }: TerritoryLevelResourceProps) => {
  const { user, onChange } = useHanzhongContext();

  return (
    <CardWrapper>
      <Grid container sx={{ justifyContent: 'center', alignItems: 'center' }}>
        <Grid size={{ xs: 12 }}>
          <Typography align="center" sx={{ fontSize: { xs: 12, sm: 14 } }}>
            Lv.{level}
          </Typography>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Typography align="center" sx={{ fontSize: { xs: 13, sm: 16 } }}>
            {label}
          </Typography>
        </Grid>
        <Grid size={{ xs: 12 }} sx={{ p: 0 }}>
          <ValueAdjuster value={user[id] ?? 0} onChange={(newValue: number) => onChange(id, newValue)} />
        </Grid>
      </Grid>
    </CardWrapper>
  );
};
