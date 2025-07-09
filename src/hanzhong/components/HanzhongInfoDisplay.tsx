import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';

import type { HanzhongInfoDataType, HanzhongInfoDataUpdaterType } from '../types';
import Input from '@mui/material/Input';

export type HanzhongInfoDisplayProps = HanzhongInfoDataType & {
  /** When the user modifies the value, it will call this function. */
  onChange: HanzhongInfoDataUpdaterType;
};

export const HanzhongInfoDisplay = ({ label, currentValue, projectedValue, unit, onChange }: HanzhongInfoDisplayProps) => {
  const valueChanged = (event: React.ChangeEvent<HTMLInputElement>) => onChange(parseInt(event.target.value) || 0);
  const endAdornment = unit ? <InputAdornment position="end">{unit}</InputAdornment> : null;

  return (
    <Grid container direction="row" sx={{ justifyContent: 'flex-start', alignItems: 'center' }} spacing={1}>
      <Grid size={{ xs: 12, md: 4 }}>
        <Typography>{label}</Typography>
      </Grid>
      <Grid size={{ xs: 6, md: 4 }}>
        <Input
          error={currentValue < 0}
          value={currentValue}
          onChange={valueChanged}
          endAdornment={endAdornment}
          inputProps={{ 'aria-label': label, 'style': { textAlign: 'right' } }}
          size="small"
          type="number"
        />
      </Grid>
      <Grid size={{ xs: 6, md: 4 }}>
        <Input
          error={projectedValue < 0}
          value={projectedValue}
          endAdornment={endAdornment}
          inputProps={{ 'aria-label': label, 'style': { textAlign: 'right' } }}
          size="small"
          type="number"
          readOnly
        />
      </Grid>
    </Grid>
  );
};
