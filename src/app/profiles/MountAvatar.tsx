import Tooltip from '@mui/material/Tooltip';
import { useAppContext } from '../Context';
import Avatar from '@mui/material/Avatar';
import { assetPath } from '../utils';
import { getAptitudeById, getMountById } from '../data';
import IconButton from '@mui/material/IconButton';

export type MountAvatarProps = {
  id: string;
  small?: boolean;
};

export const MountAvatar = ({ id, small }: MountAvatarProps) => {
  const { showProfile } = useAppContext();

  const mount = getMountById(id);

  const aptitudeColor = getAptitudeById(mount.aptitudeId).palette.background.default;

  const size = small ? '27px' : '32px';

  return (
    <IconButton sx={{ width: size }} onClick={() => showProfile('mount', mount.id)}>
      <Tooltip title={mount.name} placement="top-start">
        <Avatar
          alt={mount.name}
          src={assetPath(mount.avatar.path)}
          sx={{ width: size, height: size, border: `3px solid ${aptitudeColor}` }}
        />
      </Tooltip>
    </IconButton>
  );
};
