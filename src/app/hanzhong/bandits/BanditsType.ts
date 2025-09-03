import type { BaseIDType } from '../../types';
import type { HanzhongBanditAttackType } from './BanditAttackType';
import type { HanzhongBanditLevelsType } from './BanditLevelsType';

export type HanzhongBanditsType = BaseIDType & {
  info: HanzhongBanditLevelsType;
  attacks: HanzhongBanditAttackType[];
};
