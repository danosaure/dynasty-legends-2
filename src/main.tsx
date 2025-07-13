import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { dbOpen } from './persistence/db-open.ts';
import { App } from './App.tsx';

const theme = createTheme({
  palette: {
    primary: {
      main: '#C38900',
    },
  },
});

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

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
