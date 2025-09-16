import Avatar from '@mui/material/Avatar';

import { assetPath } from '../utils';
import { getAptitudeById, getFactionById, getOfficerById } from '../data';
import IconButton from '@mui/material/IconButton';
import type { OfficersRosterData } from '../officers/types';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';

export type OfficerAvatarProps = {
  officerId: string;
  roster: OfficersRosterData;
  disabled?: boolean;
  selectedOfficerId?: string;
  selectedColor?: string;
  onClick?: () => void;
  small?: boolean;
};

export const OfficerAvatar = ({
  officerId,
  roster,
  onClick,
  selectedOfficerId,
  selectedColor = 'transparent',
  disabled,
  small,
}: OfficerAvatarProps) => {
  const officer = officerId ? getOfficerById(officerId) : undefined;
  const aptitudeColor = officer ? getAptitudeById(officer.aptitudeId).palette.background.default : 'transparent';
  const factionColor = officer ? getFactionById(officer.factionId).color : 'transparent';

  const inRosterOpacity = roster[officerId] ? 1 : 0.6;

  const size = small ? '27px' : '32px';

  const avatar = (
    <Tooltip title={officer?.name} placement="top-start">
      <Avatar
        alt={officer?.name}
        src={assetPath(officer?.avatar.path)}
        sx={{ width: size, height: size, border: `3px solid ${aptitudeColor}` }}
      />
    </Tooltip>
  );

  const iconButton = onClick ? (
    <IconButton sx={{ width: size }} onClick={() => onClick()} disabled={disabled}>
      {avatar}
    </IconButton>
  ) : (
    avatar
  );

  return (
    <Box
      sx={{
        backgroundColor: factionColor,
        opacity: disabled ? 0.2 : inRosterOpacity,
        borderRadius: 'calc(12px / 2)',
        border: `2px solid ${officerId === selectedOfficerId ? selectedColor : 'transparent'}`,
        // height: '50px',
      }}
    >
      {iconButton}
    </Box>
  );
};
