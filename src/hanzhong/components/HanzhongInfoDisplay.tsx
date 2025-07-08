import FilledInput from '@mui/material/FilledInput';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';

import type { HanzhongInfoDataUpdaterType } from '../../types/hanzhong/hanzhong-info-data-updater-type';
import type { HanzhongInfoDataType } from '../../types/hanzhong/hanzhong-info-data-type';

export type HanzhongInfoDisplayProps = HanzhongInfoDataType & {
  /** When the user modifies the value, it will call this function. */
  onChange: HanzhongInfoDataUpdaterType;
};

export const HanzhongInfoDisplay = ({ label, currentValue, projectedValue, unit, onChange }: HanzhongInfoDisplayProps) => {
  const valueChanged = (event: React.ChangeEvent<HTMLInputElement>) => onChange(parseInt(event.target.value) || 0);

  return (
    <Grid container>
      <Grid size={{ xs: 12, md: 4 }}>
        <Typography>{label}</Typography>
      </Grid>
      <Grid size={{ xs: 6, md: 4 }}>
        <FilledInput
          error={currentValue < 0}
          value={currentValue}
          onChange={valueChanged}
          endAdornment={unit ? <InputAdornment position="end">{unit}</InputAdornment> : null}
          inputProps={{ 'aria-label': label, 'style': { textAlign: 'right' } }}
        />
      </Grid>
      <Grid size={{ xs: 6, md: 4 }}>
        {projectedValue}
        {unit}
      </Grid>
    </Grid>
  );
};
