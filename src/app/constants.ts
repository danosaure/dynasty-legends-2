import { createTheme } from '@mui/material/styles';

export const DEFAULT_THEME = createTheme({
  palette: {
    primary: {
      main: '#C38900',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});
