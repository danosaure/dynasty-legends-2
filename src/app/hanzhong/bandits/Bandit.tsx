import { CardWrapper } from '../../shared';
import { HanzhongContextUserCheckbox } from '../ContextCheckbox';

import type { HanzhongBanditAttackType } from './BanditAttackType';

export type HanzhongBanditProps = {
  attack: HanzhongBanditAttackType;
};

export const HanzhongBandit = ({ attack }: HanzhongBanditProps) => {
  return (
    <CardWrapper>
      {attack.attack}
      <HanzhongContextUserCheckbox id={attack.id} />
    </CardWrapper>
  );
};
