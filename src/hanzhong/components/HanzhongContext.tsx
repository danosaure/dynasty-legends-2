import { createContext } from 'react';

import type { HanzhongType } from '../types';
import { HANZHONG_DATA } from '../data';
import { useSafeContext } from '../../components/utils/use-safe-context';

export type HanzhongContextType = HanzhongType;

export const HanzhongContext = createContext<HanzhongType>(HANZHONG_DATA);

HanzhongContext.displayName = 'HanzhongContext';

export const useHanzhongContext = (): HanzhongType => useSafeContext(HanzhongContext);
