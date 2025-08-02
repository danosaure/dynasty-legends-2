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
  user: PersistenceUserDataType;
  users: AppContextBaseUser[];
};

export const DEFAULT_APP_CONTEXT: AppContextType = {
  setUsername: () => {},
  setMenu: () => {},
  users: [{ id: 'foo', username: 'bar' }],
  user: { id: 'foo', username: 'bar' },
};

export const AppContext = createContext<AppContextType>(DEFAULT_APP_CONTEXT);

AppContext.displayName = 'AppContext';

export const useAppContext = (): AppContextType => useSafeContext(AppContext);
