import { createContext } from 'react';

import type { HanzhongBonusType, HanzhongType } from '../types';
import { HANZHONG_DATA } from '../data';
import { useSafeContext } from '../../components/utils/use-safe-context';
import type { HanzhongUserDataType } from '../../persistence/hanzhong-user-data-type';

export type HanzhongContextType = {
  hanzhong: HanzhongType;
  user: HanzhongUserDataType;
  bonuses: HanzhongBonusType;
};

export const HanzhongContext = createContext<HanzhongContextType>({
  hanzhong: HANZHONG_DATA,
  user: {},
  bonuses: {},
});

HanzhongContext.displayName = 'HanzhongContext';

export const useHanzhongContext = (): HanzhongContextType => useSafeContext(HanzhongContext);
