import ArrowDownwardSharpIcon from '@mui/icons-material/ArrowDownwardSharp';
import ArrowUpwardSharpIcon from '@mui/icons-material/ArrowUpwardSharp';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

export type ValueAdjusterProps = {
  /** Value to display. */
  value: number;
  /** If defined, the maxValue to not go over. */
  maxValue?: number;
  /** When increased or decreased, the function to call with the new value. */
  onChange: (newValue: number) => void;
};

export const ValueAdjuster = ({ value, maxValue, onChange }: ValueAdjusterProps) => {
  const onIncrease = () => onChange(value + 1);
  const onDecrease = () => onChange(value - 1);

  const hasError = value < 0 || (maxValue ?? value) < value || value > (maxValue ?? value);

  const content = maxValue === undefined ? value : `${value} / ${maxValue}`;

  const iconSX = { fontSize: 18 };

  return (
    <Grid container size={{ xs: 12 }} sx={{ alignItems: 'center', justifyContent: 'center' }}>
      <Grid size="auto">
        <IconButton title="Decrease value" onClick={onDecrease} disabled={hasError || value === 0}>
          <ArrowDownwardSharpIcon sx={iconSX} />
        </IconButton>
      </Grid>
      <Grid size={maxValue ? 'grow' : 'auto'}>
        <Typography sx={{ fontSize: { xs: 14, md: 16 } }} align="center" color={hasError ? 'error' : undefined}>
          {content}
        </Typography>
      </Grid>
      <Grid size="auto">
        <IconButton title="Increase value" onClick={onIncrease} disabled={hasError || value === maxValue}>
          <ArrowUpwardSharpIcon sx={iconSX} />
        </IconButton>
      </Grid>
    </Grid>
  );
};
