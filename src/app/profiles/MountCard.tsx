import { Mount } from './Mount';
import type { AptitudeType } from '../types';
import { getAptitudeByAptitude, type MountType } from '../data';
import { CardWrapper } from '../shared';

export type MountCardProps = {
  mount: MountType;
};

export const MountCard = ({ mount }: MountCardProps) => {
  if (!mount.aptitude) {
    return null;
  }
  const aptitude: AptitudeType = getAptitudeByAptitude(mount.aptitude);

  return (
    <CardWrapper sx={{ bgcolor: aptitude.palette.background.default }}>
      <Mount id={mount.id} inCard />
    </CardWrapper>
  );
};
