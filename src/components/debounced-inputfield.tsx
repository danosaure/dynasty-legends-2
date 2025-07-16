import InputAdornment from '@mui/material/InputAdornment';
import { useTheme, type SxProps } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { useEffect, useState, type ChangeEvent } from 'react';

const DELAY = 1000;

export type DebouncedInputFieldProps = {
  label: string;
  value: number;
  unit?: string;
  onChange?: (newValue: number) => void;
  small?: boolean;
};

export const DebouncedInputField = ({ label, value, unit, onChange, small }: DebouncedInputFieldProps) => {
  const theme = useTheme();

  const [debounced, setDebounced] = useState<number>(value);
  const [textFieldValue, setTextFieldValue] = useState<string>(String(debounced));
  const [error, setError] = useState<boolean>(value < 0);

  useEffect(() => {
    if (onChange) {
      const handler = setTimeout(() => {
        if (!error && value !== debounced) {
          onChange(debounced);
        }
      }, DELAY);
      return () => clearTimeout(handler);
    }
  }, [value, debounced, onChange, error]);

  useEffect(() => {
    const intDebounced = parseInt(textFieldValue);
    if (isNaN(intDebounced) || intDebounced < 0 || textFieldValue !== String(intDebounced)) {
      setError(true);
    } else {
      setError(false);
      setDebounced(intDebounced);
    }
  }, [textFieldValue]);

  const textFieldChanged = onChange ? (e: ChangeEvent<HTMLInputElement>) => setTextFieldValue(e.target.value) : undefined;
  const size = small ? 'small' : undefined;
  const inputSize = small ? { xs: 9, sm: 12, md: 14 } : { xs: 10, sm: 14, md: 16 };
  const errorColorForInputValue: SxProps = error ? { '& .MuiInputBase-input': { color: theme.palette.error.main } } : {};
  const errorColorForAdornment: SxProps = error ? { '& .MuiTypography-body1': { color: theme.palette.error.main } } : {};

  const inputSlotPropsForReadOnly = onChange ? {} : { readOnly: true };
  const inputSlotPropsForAdornment = unit
    ? {
        endAdornment: (
          <InputAdornment position="end" sx={errorColorForAdornment}>
            {unit}
          </InputAdornment>
        ),
      }
    : {};
  const slotProps = !onChange || unit ? { input: { ...inputSlotPropsForReadOnly, ...inputSlotPropsForAdornment } } : {};

  return (
    <TextField
      variant="standard"
      label={label}
      value={textFieldValue}
      error={error}
      slotProps={slotProps}
      size={size}
      onChange={textFieldChanged}
      sx={{
        '& label': { color: 'black' },
        '& input': { textAlign: 'right', fontSize: inputSize },
        ...errorColorForInputValue,
      }}
    />
  );
};
