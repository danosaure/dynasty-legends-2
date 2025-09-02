import { createContext } from 'react';

import { useSafeContext } from '../shared/utils/use-safe-context';

import type { HanzhongFormationsUserData } from './formations/types';
import type { HanzhongBonusType, HanzhongContextCache, HanzhongContextOnChangeType, HanzhongUserDataType } from './types';

export type HanzhongContextOnChangeFormationType = (key: string, value: number | string) => void;

export type HanzhongContextType = {
  user: HanzhongUserDataType;
  bonuses: HanzhongBonusType;
  onChange: HanzhongContextOnChangeType;
  formationsUserData: HanzhongFormationsUserData;
  onChangeFormations: HanzhongContextOnChangeFormationType;
  cache: HanzhongContextCache;
};

export const DEFAULT_HANZHONG_CONTEXT_DATA: HanzhongContextType = {
  user: {},
  bonuses: {},
  onChange: () => {},
  formationsUserData: {},
  onChangeFormations: () => {},
  cache: { requirements: {} },
};

export const HanzhongContext = createContext<HanzhongContextType>({ ...DEFAULT_HANZHONG_CONTEXT_DATA });
HanzhongContext.displayName = 'HanzhongContext';

export const useHanzhongContext = (): HanzhongContextType => useSafeContext(HanzhongContext);
