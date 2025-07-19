import { useEffect } from 'react';
import { HashRouter, Route, Routes } from 'react-router';

import { AppThemeProvider } from './app/components/app-theme-provider';
import { MainRoutes } from './app/routes';
import { dbOpen } from './persistence/db-open';

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
      <AppThemeProvider>
        <Routes>
          <Route path="/">{MainRoutes}</Route>
        </Routes>
      </AppThemeProvider>
    </HashRouter>
  );
};
