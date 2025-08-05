import { createTheme, type Theme } from '@mui/material/styles';
import { DEFAULT_THEME } from '../constants';

export const createThemeFromBackground = (color: string): Theme => {
  return createTheme({
    palette: {
      primary: {
        main: DEFAULT_THEME.palette.primary.main,
      },
      background: {
        default: color,
      },
    },
  });
};
