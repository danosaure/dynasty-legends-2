import type { ReactNode } from 'react';
import Paper from '@mui/material/Paper';
import type { SxProps } from '@mui/material/styles';

export type PaperWrapperProps = {
  children: ReactNode;
  sx?: SxProps;
  elevation?: number;
};

export const PaperWrapper = ({ children, sx, elevation = 10 }: PaperWrapperProps) => {
  return (
    <Paper sx={sx} elevation={elevation}>
      {children}
    </Paper>
  );
};
