import type { HanzhongFormationsUserData } from '../../app/hanzhong/formations/types';
import type { HanzhongUserDataType } from '../../app/hanzhong/types';
import type { OfficersRosterData } from '../../app/officers/types';
import type { PersistenceBaseType } from '../../persistence-lib';

export type PersistenceUserDataType = PersistenceBaseType & {
  username: string;
  hanzhong?: HanzhongUserDataType;
  officers?: OfficersRosterData;
  formations?: HanzhongFormationsUserData;
};
