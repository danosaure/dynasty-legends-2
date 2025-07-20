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

  const [textFieldValue, setTextFieldValue] = useState<string>(String(value));
  const [error, setError] = useState<boolean>(value < 0 || (maxValue ? maxValue < value : false));

  useEffect(() => {
    setTextFieldValue(String(value));
  }, [value]);

  useEffect(() => {
    const intDebounced = parseInt(textFieldValue);

    if (
      // Invalid number.
      isNaN(intDebounced) ||
      // Negative number.
      intDebounced < 0 ||
      // String starts with number but has more.
      textFieldValue !== String(intDebounced) ||
      // defined maxValue and number is higher
      (maxValue && intDebounced > maxValue)
    ) {
      setError(true);
    } else {
      setError(false);

      if (onChange) {
        if (String(value) !== textFieldValue) {
          const handler = setTimeout(() => onChange(intDebounced), DELAY);
          return () => clearTimeout(handler);
        }
      }
    }
  }, [value, onChange, textFieldValue, maxValue]);

  const textFieldChanged = onChange ? (e: ChangeEvent<HTMLInputElement>) => setTextFieldValue(e.target.value) : undefined;
  const size = small ? 'small' : undefined;
  const inputSize = small ? { xs: 11, sm: 13, md: 15 } : { xs: 13, sm: 15, md: 17 };
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
        '& label': { color: 'black', fontSize: inputSize },
        '& input': { textAlign: 'right', fontSize: inputSize },
        ...errorColorForInputValue,
      }}
    />
  );
};
