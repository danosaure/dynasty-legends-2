import { createContext } from 'react';

import { useSafeContext } from '../shared/utils/use-safe-context';
import type { HanzhongContextType } from './types';

export const DEFAULT_HANZHONG_CONTEXT: HanzhongContextType = {
  getValue: () => 0,
  getSection: () => ({}),
  getStringValue: () => '',
  bonuses: {},
  onChange: () => {},
};

export const HanzhongContext = createContext<HanzhongContextType>(DEFAULT_HANZHONG_CONTEXT);

HanzhongContext.displayName = 'HanzhongContext';

export const useHanzhongContext = (): HanzhongContextType => useSafeContext(HanzhongContext);
