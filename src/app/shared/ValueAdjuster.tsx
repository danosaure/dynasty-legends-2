import ArrowDownwardSharpIcon from '@mui/icons-material/ArrowDownwardSharp';
import ArrowUpwardSharpIcon from '@mui/icons-material/ArrowUpwardSharp';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { WrappedIconButton } from './WrappedIconButton';

export type ValueAdjusterProps = {
  /** Value to display. */
  value: number;
  /** If defined, the maxValue to not go over. */
  maxValue?: number;
  /** When increased or decreased, the function to call with the new value. */
  onChange: (newValue: number) => void;
};

export const ValueAdjuster = ({ value, maxValue, onChange }: ValueAdjusterProps) => {
  const increaseValue = () => onChange(value + 1);
  const decreaseValue = () => onChange(value - 1);

  const hasError = value < 0 || (maxValue ?? value) < value || value > (maxValue ?? value);

  const content = maxValue === undefined ? value : `${value} / ${maxValue}`;

  return (
    <Grid container size={{ xs: 12 }} sx={{ alignItems: 'center', justifyContent: 'center' }}>
      <Grid size="auto">
        <WrappedIconButton
          label="Decrease value"
          onClick={decreaseValue}
          Icon={ArrowDownwardSharpIcon}
          disabled={hasError || value === 0}
          small
        />
      </Grid>
      <Grid size={maxValue ? 'grow' : 'auto'}>
        <Typography sx={{ fontSize: { xs: 14, md: 16 } }} align="center" color={hasError ? 'error' : undefined}>
          {content}
        </Typography>
      </Grid>
      <Grid size="auto">
        <WrappedIconButton
          label="Increase value"
          onClick={increaseValue}
          Icon={ArrowUpwardSharpIcon}
          disabled={hasError || value === maxValue}
          small
        />
      </Grid>
    </Grid>
  );
};
