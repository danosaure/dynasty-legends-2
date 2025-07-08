import { createContext } from 'react';

import type { HanzhongType } from '../../types/hanzhong/hanzhong-type';
import type { HanzhongDataType } from '../../persistence/hanzhong-data-type';
import { HANZHONG_DATA } from '../../data/hanzhong';
import { useSafeContext } from '../utils/use-safe-context';

export type HanzhongContextType = {
  hanzhongData: HanzhongType;
  usersData: Record<string, HanzhongDataType>;
};

export const HanzhongContext = createContext<HanzhongContextType>({
  hanzhongData: HANZHONG_DATA,
  usersData: {
    DEFAULT: {},
  },
});

HanzhongContext.displayName = 'HanzhongContext';

export const useHanzhongContext = (): HanzhongContextType => useSafeContext(HanzhongContext);
