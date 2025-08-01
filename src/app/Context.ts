import { createContext, type ReactNode } from 'react';
import { useSafeContext } from './shared/utils';

export type AppContextType = {
  setMenu: (actionMenu: ReactNode) => void;
};

export const DEFAULT_APP_CONTEXT: AppContextType = {
  setMenu: () => {},
};

export const AppContext = createContext<AppContextType>(DEFAULT_APP_CONTEXT);

AppContext.displayName = 'AppContext';

export const useAppContext = (): AppContextType => useSafeContext(AppContext);
