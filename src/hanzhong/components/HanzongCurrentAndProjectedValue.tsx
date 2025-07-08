import FilledInput from '@mui/material/FilledInput';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';

import { useEffect, useState } from 'react';
import { getValue } from '../../persistence/memory';

export type HanzhongCurrentAndProjectedValueProps = {
  label: string;
  key: string;
  unit?: string;
  onChange: (newValue: number) => void;
};

export const HanzhongInfoDisplay = ({ label, key, unit, onChange }: HanzhongCurrentAndProjectedValueProps) => {
  const [currentValue, setCurrentValue] = useState(-1);
  const [projectedValue, setProjectedValue] = useState(-1);

  const valueChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(parseInt(event.target.value));
  };

  useEffect(() => {
    (async () => {
      setCurrentValue(await getValue(key));
      setProjectedValue(await getValue(`${key}--projected`));
    })();
  }, []);

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
