import type { HanzhongContextType } from '../components/HanzhongContext';
import { HANZHONG_DATA } from '../data';

export const DEFAULT_HANZHONG_CONTEXT_DATA: HanzhongContextType = {
  hanzhong: HANZHONG_DATA,
  user: {},
  bonuses: {},
  bonusesVanguardCamp: {},
  bonusesValiantCavalry: {},
  bonusesRoyalGuards: {},
  onChange: () => {},
};
