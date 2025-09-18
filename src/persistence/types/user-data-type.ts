import type { BanquetQuizUserData } from '../../app/banquet-quiz';
import type { HanzhongFormationsUserData } from '../../app/hanzhong/formations/types';
import type { HanzhongUserDataType } from '../../app/hanzhong/types';
import type { OfficersRosterData } from '../../app/officers/types';
import type { MountsRosterData } from '../../app/profiles';
import type { PersistenceBaseType } from '../../persistence-lib';

export type PersistenceUserDataType = PersistenceBaseType & {
  username: string;
  hanzhong?: HanzhongUserDataType;
  mounts?: MountsRosterData;
  officers?: OfficersRosterData;
  formations?: HanzhongFormationsUserData;
  banquetQuiz?: BanquetQuizUserData;
};
