import { createContext } from 'react';

import { useSafeContext } from '../../components/utils/use-safe-context';
import type { PersistenceUserDataType } from '../../persistence/types';

export type AppContextType = {
  user?: PersistenceUserDataType;
};

export const AppContext = createContext<AppContextType>({});

AppContext.displayName = 'AppContext';

export const useHanzhongContext = (): AppContextType => useSafeContext(AppContext);
