import type { ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { DEFAULT_THEME } from './constants';

export type AppThemeProviderProps = {
  children: ReactNode;
};

export const AppThemeProvider = ({ children }: AppThemeProviderProps) => {
  return <ThemeProvider theme={DEFAULT_THEME}>{children}</ThemeProvider>;
};
