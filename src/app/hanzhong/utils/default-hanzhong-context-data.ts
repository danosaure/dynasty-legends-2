import type { HanzhongContextType } from '../types';

export const DEFAULT_HANZHONG_CONTEXT_DATA: HanzhongContextType = {
  user: {},
  bonuses: {},
  onChange: () => {},
  formationsUserData: {},
  onChangeFormations: () => {},
  cache: { requirements: {} },
};
