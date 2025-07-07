import InputAdornment from '@mui/material/InputAdornment';
import FilledInput from '@mui/material/FilledInput';

export interface ResourceIncomeProps {
  /** Resource label. */
  label: string;
  /** Current value. */
  value: number;
  /** When the user edits the value. */
  onChange: (newValue: number) => void;
}

export const ResourceIncome = ({ label, value, onChange }: ResourceIncomeProps) => {
  const valueChanged = (event: React.ChangeEvent<HTMLInputElement>) => onChange(parseInt(event.target.value));

  return (
    <FilledInput
      error={value < 0}
      value={value}
      onChange={valueChanged}
      startAdornment={<InputAdornment position="start">{label}</InputAdornment>}
      endAdornment={<InputAdornment position="end">/h</InputAdornment>}
      inputProps={{ 'aria-label': label, 'style': { textAlign: 'right' } }}
    />
  );
};
