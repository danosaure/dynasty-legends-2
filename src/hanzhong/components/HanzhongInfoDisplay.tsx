import TextField from '@mui/material/TextField';

import type { HanzhongInfoDataType } from '../types';

export type HanzhongInfoDisplayProps = HanzhongInfoDataType;

export const HanzhongInfoDisplay = ({ label, value, unit }: HanzhongInfoDisplayProps) => {
  return (
    <TextField
      variant="standard"
      label={label}
      value={`${value}${unit ?? ''}`}
      slotProps={{ input: { readOnly: true } }}
      sx={{ '& label': { color: 'black' }, '& input': { textAlign: 'right' } }}
    />
  );
};
