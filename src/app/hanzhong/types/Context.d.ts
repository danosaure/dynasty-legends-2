import type { HanzhongFormationsUserData } from '../formations/types';
import type { HanzhongContextCache } from './ContextCache';
import type { HanzhongBonusType } from './hanzhong-bonus-type';
import type { HanzhongContextOnChangeType } from './hanzhong-context-on-change-type';
import type { HanzhongUserDataType } from './UserData';

export type HanzhongContextOnChangeFormationType = (key: string, value: number | string) => void;

export type HanzhongContextType = {
  user: HanzhongUserDataType;
  bonuses: HanzhongBonusType;
  onChange: HanzhongContextOnChangeType;
  formationsUserData: HanzhongFormationsUserData;
  onChangeFormations: HanzhongContextOnChangeFormationType;
  cache: HanzhongContextCache;
};
