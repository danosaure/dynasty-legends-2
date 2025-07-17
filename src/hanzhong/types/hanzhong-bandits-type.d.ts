import type { HanzhongBanditAttackType } from './hanzhong-bandit-attack-type';
import type { HanzhongBanditLevelsType } from './hanzhong-bandit-levels-type';

export type HanzhongBanditsType = {
  id: string;
  info: HanzhongBanditLevelsType;
  attacks: HanzhongBanditAttackType[];
};
