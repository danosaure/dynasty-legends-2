import { createContext, type ReactNode } from 'react';

import type { PersistenceUserDataType } from '../persistence/types';
import { useSafeContext } from './shared/utils';

export type AppContextBaseUser = {
  id: string;
  username: string;
};

export type AppContextType = {
  setMenu: (actionMenu: ReactNode) => void;
  setUsername: (username: string) => void;
  refreshApp: () => void;
  user: PersistenceUserDataType;
  users: AppContextBaseUser[];
};

export const DEFAULT_APP_CONTEXT: AppContextType = {
  setUsername: () => {},
  setMenu: () => {},
  refreshApp: () => {},
  users: [],
  user: { id: '', username: '' },
};

export const AppContext = createContext<AppContextType>(DEFAULT_APP_CONTEXT);

AppContext.displayName = 'AppContext';

export const useAppContext = (): AppContextType => useSafeContext(AppContext);
