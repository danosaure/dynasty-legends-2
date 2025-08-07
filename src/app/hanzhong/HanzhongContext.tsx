import { createContext } from 'react';

import { useSafeContext } from '../shared/utils/use-safe-context';

import type { HanzhongContextType } from './types';

export const HanzhongContext = createContext<HanzhongContextType>({
  user: {},
  bonuses: {},
  onChange: () => {},
  formationsUserData: {},
  onChangeFormations: () => {},
  requirementsCache: {},
});

HanzhongContext.displayName = 'HanzhongContext';

export const useHanzhongContext = (): HanzhongContextType => useSafeContext(HanzhongContext);
