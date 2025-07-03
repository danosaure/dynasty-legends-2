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
  /** Display horizontally. */
  horizontal?: boolean;
}

export const ValueAdjuster = ({ value, maxValue, onChange, horizontal }: ValueAdjusterProps) => {
  const onIncrease = () => onChange(value + 1);
  const onDecrease = () => onChange(value - 1);

  const hasError = value < 0 || (maxValue ?? value) < value || value > (maxValue ?? value);

  const content = maxValue === undefined ? value : `${value} / ${maxValue}`;

  if (horizontal) {
    return (
      <Typography align="center" color={hasError ? 'error' : undefined}>
        <IconButton title="Decrease value" onClick={onDecrease} disabled={hasError || value === 0}>
          <ArrowDownwardSharpIcon />
        </IconButton>
        {content}
        <IconButton title="Increase value" onClick={onIncrease} disabled={hasError || value === maxValue}>
          <ArrowUpwardSharpIcon />
        </IconButton>
      </Typography>
    );
  }
  return (
    <Typography align="center" color={hasError ? 'error' : undefined}>
      <IconButton title="Increase value" onClick={onIncrease} disabled={hasError || value === maxValue}>
        <ArrowUpwardSharpIcon />
      </IconButton>
      <div>{content}</div>
      <IconButton title="Decrease value" onClick={onDecrease} disabled={hasError || value === 0}>
        <ArrowDownwardSharpIcon />
      </IconButton>
    </Typography>
  );
};
