import type { BaseIDType } from '../../types';
import type { HanzhongBanditAttackType } from './hanzhong-bandit-attack-type';
import type { HanzhongBanditLevelsType } from './hanzhong-bandit-levels-type';

export type HanzhongBanditsType = BaseIDType & {
  info: HanzhongBanditLevelsType;
  attacks: HanzhongBanditAttackType[];
};
