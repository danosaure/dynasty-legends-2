import Tooltip from '@mui/material/Tooltip';
import { useAppContext } from '../Context';
import Avatar from '@mui/material/Avatar';
import { assetPath } from '../utils';
import { getAptitudeById, getMountById } from '../data';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { avatarSize } from './avatar-size';
import { rosterOpacity } from './roster-opacity';
import type { MountsRosterData } from './MountsRosterData';

export type MountAvatarProps = {
  id: string;
  roster: MountsRosterData;
  small?: boolean;
};

export const MountAvatar = ({ id, roster, small }: MountAvatarProps) => {
  const { showProfile } = useAppContext();

  const mount = getMountById(id);

  const aptitudeColor = getAptitudeById(mount.aptitudeId).palette.background.default;

  const opacity = rosterOpacity(roster[id]);

  const size = avatarSize(small);

  return (
    <Box sx={{ bgcolor: aptitudeColor, borderRadius: '6px', border: '3px solid transparent', opacity }}>
      <IconButton sx={{ width: size }} onClick={() => showProfile('mount', mount.id)}>
        <Tooltip title={mount.name} placement="top-start">
          <Avatar
            alt={mount.name}
            src={assetPath(mount.avatar.path)}
            sx={{ width: size, height: size, border: `3px solid ${aptitudeColor}` }}
          />
        </Tooltip>
      </IconButton>
    </Box>
  );
};
