import { CardWrapper } from '../../components';
import type { HanzhongBanditAttackType } from '../types';

import { HanzhongContextUserCheckbox } from './ContextCheckbox';

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
