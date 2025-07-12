import { createContext } from 'react';

import type { HanzhongBonusType, HanzhongType, HanzhongUserDataType } from '../types';
import { HANZHONG_DATA } from '../data';
import { useSafeContext } from '../../components/utils/use-safe-context';

export type HanzhongContextType = {
  hanzhong: HanzhongType;
  user: HanzhongUserDataType;
  bonuses: HanzhongBonusType;
  bonusesVanguardCamp: HanzhongBonusType;
  bonusesValiantCavalry: HanzhongBonusType;
  bonusesRoyalGuards: HanzhongBonusType;
  onChange: (key: string, value: number) => void;
};

export const HanzhongContext = createContext<HanzhongContextType>({
  hanzhong: HANZHONG_DATA,
  user: {},
  bonuses: {},
  bonusesVanguardCamp: {},
  bonusesValiantCavalry: {},
  bonusesRoyalGuards: {},
  onChange: () => {},
});

HanzhongContext.displayName = 'HanzhongContext';

export const useHanzhongContext = (): HanzhongContextType => useSafeContext(HanzhongContext);
