import { createContext } from 'react';

import { useSafeContext } from './utils/use-safe-context';
import type { UserDataType } from '../persistence/user-data-type';

// TODO: Fetch data from memory.
export const UserDataContext = createContext<UserDataType>({ hanzhong: {} });

UserDataContext.displayName = 'UserDataContext';

export const useUserDataContext = (): UserDataType => useSafeContext(UserDataContext);
