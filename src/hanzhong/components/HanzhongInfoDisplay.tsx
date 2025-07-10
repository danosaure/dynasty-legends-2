import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';

import type { HanzhongInfoDataType } from '../types';
import Input from '@mui/material/Input';

export type HanzhongInfoDisplayProps = HanzhongInfoDataType;

export const HanzhongInfoDisplay = ({ label, value, unit }: HanzhongInfoDisplayProps) => {
  const endAdornment = unit ? <InputAdornment position="end">{unit}</InputAdornment> : null;

  return (
    <Grid container direction="row" sx={{ justifyContent: 'flex-start', alignItems: 'center' }} spacing={1}>
      <Grid size={{ xs: 6 }}>
        <Typography>{label}</Typography>
      </Grid>
      <Grid size={{ xs: 6 }}>
        <Input
          error={value < 0}
          value={value}
          endAdornment={endAdornment}
          inputProps={{ 'aria-label': label, 'style': { textAlign: 'right' } }}
          size="small"
        />
      </Grid>
    </Grid>
  );
};
