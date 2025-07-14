import type { ReactNode } from 'react';
import Paper from '@mui/material/Paper';
import type { SxProps } from '@mui/material/styles';

export type PaperWrapperProps = {
  children: ReactNode;
  sx?: SxProps;
};

export const PaperWrapper = ({ children, sx }: PaperWrapperProps) => {
  return (
    <Paper sx={sx} elevation={10}>
      {children}
    </Paper>
  );
};
