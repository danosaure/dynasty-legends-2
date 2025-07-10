import ArrowDownwardSharpIcon from '@mui/icons-material/ArrowDownwardSharp';
import ArrowUpwardSharpIcon from '@mui/icons-material/ArrowUpwardSharp';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

export interface ValueAdjusterProps {
  /** Value to display. */
  value: number;
  /** If defined, the maxValue to not go over. */
  maxValue?: number;
  /** When increased or decreased, the function to call with the new value. */
  onChange: (newValue: number) => void;
}

export const ValueAdjuster = ({ value, maxValue, onChange }: ValueAdjusterProps) => {
  const onIncrease = () => onChange(value + 1);
  const onDecrease = () => onChange(value - 1);

  const hasError = value < 0 || (maxValue ?? value) < value || value > (maxValue ?? value);

  const content = maxValue === undefined ? value : `${value} / ${maxValue}`;

  const iconSX = { fontSize: 20 };
  const typographySX = {
    mt: -3,
    bgcolor: 'rgba(255, 255, 255, 0.9)',
  };

  return (
    <Typography align="center" color={hasError ? 'error' : undefined} variant="body1" sx={typographySX}>
      <IconButton title="Decrease value" onClick={onDecrease} disabled={hasError || value === 0}>
        <ArrowDownwardSharpIcon sx={iconSX} />
      </IconButton>
      {content}
      <IconButton title="Increase value" onClick={onIncrease} disabled={hasError || value === maxValue}>
        <ArrowUpwardSharpIcon sx={iconSX} />
      </IconButton>
    </Typography>
  );
};
