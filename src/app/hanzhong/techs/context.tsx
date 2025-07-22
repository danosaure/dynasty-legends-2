import { createContext } from 'react';

import { useSafeContext } from '../../shared/utils/use-safe-context';
import { NO_TECH_ID } from './constants';

export type HanzhongTechsContextType = {
  techId: string;
  displayTechId: (techId: string) => void;
  hideTechId: () => void;
};

export const HanzhongTechsContext = createContext<HanzhongTechsContextType>({
  techId: NO_TECH_ID,
  displayTechId: () => {},
  hideTechId: () => {},
});

HanzhongTechsContext.displayName = 'HanzhongTechsContext';

export const useHanzhongTechsContext = (): HanzhongTechsContextType => useSafeContext(HanzhongTechsContext);
