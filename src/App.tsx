import { useEffect } from 'react';
import { HashRouter, Route, Routes } from 'react-router';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { dbOpen } from './persistence/db-open';
import { MainRoutes } from './app/routes';

const theme = createTheme({
  palette: {
    primary: {
      main: '#C38900',
    },
  },
});

export const App = () => {
  useEffect(() => {
    (async () => {
      // Make sure the database is initialized.
      let db: IDBDatabase | null = null;
      try {
        db = await dbOpen();
      } finally {
        if (db) {
          db.close();
        }
      }
    })();
  }, []);

  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/">{MainRoutes}</Route>
        </Routes>
      </ThemeProvider>
    </HashRouter>
  );
};
