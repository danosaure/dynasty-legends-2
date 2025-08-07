import { createContext } from 'react';

import { useSafeContext } from '../shared/utils/use-safe-context';

import type { HanzhongContextType } from './types';
import { DEFAULT_HANZHONG_CONTEXT_DATA } from './utils';

export const HanzhongContext = createContext<HanzhongContextType>({ ...DEFAULT_HANZHONG_CONTEXT_DATA });
HanzhongContext.displayName = 'HanzhongContext';

export const useHanzhongContext = (): HanzhongContextType => useSafeContext(HanzhongContext);
