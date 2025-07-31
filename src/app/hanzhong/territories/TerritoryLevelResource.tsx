import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { CardWrapper, ValueAdjuster } from '../../shared';
import { useHanzhongContext } from '../HanzhongContext';
import { SECTION_KEYS } from '../constants';

export type TerritoryLevelResourceProps = {
  label: string;
  level: number;
  id: string;
};

export const TerritoryLevelResource = ({ label, level, id }: TerritoryLevelResourceProps) => {
  const { getValue, onChange } = useHanzhongContext();

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
          <ValueAdjuster
            value={getValue(SECTION_KEYS.TERRITORIES, id)}
            onChange={(newValue: number) => onChange(SECTION_KEYS.TERRITORIES, id, newValue)}
          />
        </Grid>
      </Grid>
    </CardWrapper>
  );
};
