import { Mount } from './Mount';
import type { AptitudeType } from '../types';
import { getAptitudeById, type MountType } from '../data';
import { CardWrapper } from '../shared';

export type MountCardProps = {
  mount: MountType;
};

export const MountCard = ({ mount }: MountCardProps) => {
  const aptitude: AptitudeType = getAptitudeById(mount.aptitudeId);

  return (
    <CardWrapper sx={{ bgcolor: aptitude.palette.background.default }}>
      <Mount id={mount.id} inCard />
    </CardWrapper>
  );
};
