import type { RequirementsCache } from '../requirements/RequirementsCache';
import type { HanzhongBonusType } from './hanzhong-bonus-type';
import type { HanzhongContextOnChangeType } from './hanzhong-context-on-change-type';
import type { HanzhongUserDataType } from './hanzhong-user-data-type';

export type HanzhongContextOnChangeFormationType = (key: string, value: number | string) => void;

export type HanzhongContextType = {
  user: HanzhongUserDataType;
  bonuses: HanzhongBonusType;
  onChange: HanzhongContextOnChangeType;
  formationsUserData: HanzhongFormationsUserData;
  onChangeFormations: HanzhongContextOnChangeFormationType;
  requirementsCache: RequirementsCache;
};
