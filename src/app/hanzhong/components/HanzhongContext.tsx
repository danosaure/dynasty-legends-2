import { createContext } from 'react';

import type { HanzhongBonusType, HanzhongContextOnChangeType, HanzhongType, HanzhongUserDataType } from '../types';
import { HANZHONG_DATA } from '../data';
import { useSafeContext } from '../../shared/utils/use-safe-context';

export type HanzhongContextType = {
  hanzhong: HanzhongType;
  user: HanzhongUserDataType;
  bonuses: HanzhongBonusType;
  onChange: HanzhongContextOnChangeType;
};

export const HanzhongContext = createContext<HanzhongContextType>({
  hanzhong: HANZHONG_DATA,
  user: {},
  bonuses: {},
  onChange: () => {},
});

HanzhongContext.displayName = 'HanzhongContext';

export const useHanzhongContext = (): HanzhongContextType => useSafeContext(HanzhongContext);
