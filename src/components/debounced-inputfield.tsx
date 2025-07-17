import InputAdornment from '@mui/material/InputAdornment';
import { useTheme, type SxProps } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { useEffect, useState, type ChangeEvent } from 'react';

const DELAY = 1000;

export type DebouncedInputFieldProps = {
  label: string;
  value: number;
  onChange?: (newValue: number) => void;
  small?: boolean;
  unit?: string;
  maxValue?: number;
};

export const DebouncedInputField = ({ label, value, unit, onChange, small, maxValue }: DebouncedInputFieldProps) => {
  const theme = useTheme();

  const [debounced, setDebounced] = useState<number>(value);
  const [textFieldValue, setTextFieldValue] = useState<string>(String(debounced));
  const [error, setError] = useState<boolean>(value < 0 || (maxValue ? maxValue < debounced : false));

  useEffect(() => {
    setDebounced(value);
  }, [value]);

  useEffect(() => {
    setTextFieldValue(String(debounced));
  }, [debounced]);

  useEffect(() => {
    const intDebounced = parseInt(textFieldValue);
    if (isNaN(intDebounced) || intDebounced < 0 || textFieldValue !== String(intDebounced)) {
      setError(true);
    } else {
      setError(false);
      setDebounced(intDebounced);
    }
  }, [textFieldValue]);

  useEffect(() => {
    if (maxValue && debounced > maxValue) {
      setError(true);
    }

    if (onChange) {
      const handler = setTimeout(() => {
        if (!error && value !== debounced) {
          onChange(debounced);
        }
      }, DELAY);
      return () => clearTimeout(handler);
    }
  }, [value, debounced, onChange, error, maxValue]);

  const textFieldChanged = onChange ? (e: ChangeEvent<HTMLInputElement>) => setTextFieldValue(e.target.value) : undefined;
  const size = small ? 'small' : undefined;
  const inputSize = small ? { xs: 9, sm: 12, md: 14 } : { xs: 10, sm: 14, md: 16 };
  const errorColorForInputValue: SxProps = error ? { '& .MuiInputBase-input': { color: theme.palette.error.main } } : {};

  const inputSlotPropsForReadOnly = onChange ? {} : { readOnly: true };

  const errorColorForAdornment: SxProps = error ? { color: theme.palette.error.main } : {};
  const adornmentSx: SxProps = {
    '& .MuiTypography-body1': {
      fontSize: inputSize,
      color: theme.palette.info.main,
      ...errorColorForAdornment,
    },
  };

  let adornment: string = '';
  if (maxValue && unit) {
    adornment = `of ${maxValue}${unit}`;
  } else if (maxValue) {
    adornment = `/${maxValue}`;
  } else if (unit) {
    adornment = unit;
  }

  const inputSlotPropsForAdornment = adornment
    ? {
        endAdornment: (
          <InputAdornment position="end" sx={adornmentSx}>
            {adornment}
          </InputAdornment>
        ),
      }
    : {};
  const slotProps = !onChange || adornment ? { input: { ...inputSlotPropsForReadOnly, ...inputSlotPropsForAdornment } } : {};

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
