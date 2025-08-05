import Avatar from '@mui/material/Avatar';

import { assetPath } from '../utils';
import { getAptitudeById, getFactionById, getOfficerById } from '../data';
import IconButton from '@mui/material/IconButton';
import type { OfficersRosterData } from '../officers/types';
import Box from '@mui/material/Box';

export type OfficerAvatarProps = {
  officerId: string;
  roster: OfficersRosterData;
  disabled?: boolean;
  selectedOfficerId?: string;
  selectedColor?: string;
  onClick: () => void;
};

export const OfficerAvatar = ({
  officerId,
  roster,
  onClick,
  selectedOfficerId,
  selectedColor = 'transparent',
  disabled,
}: OfficerAvatarProps) => {
  const officer = officerId ? getOfficerById(officerId) : undefined;
  const aptitudeColor = officer ? getAptitudeById(officer.aptitudeId).palette.background.default : 'transparent';
  const factionColor = officer ? getFactionById(officer.factionId).color : 'transparent';

  const inRosterOpacity = roster[officerId ?? ''] ? 1 : 0.6;

  return (
    <Box
      key={officer?.id}
      sx={{
        backgroundColor: factionColor,
        opacity: disabled ? 0.2 : inRosterOpacity,
        borderRadius: '12px',
      }}
    >
      <IconButton
        sx={{
          width: '30px',
          border: `3px solid ${officer?.id === selectedOfficerId ? selectedColor : 'transparent'}`,
        }}
        onClick={() => onClick()}
        disabled={disabled}
      >
        <Avatar
          alt={officer?.name}
          src={assetPath(officer?.avatar.path)}
          sx={{ width: '30px', height: '30px', border: `2px solid ${aptitudeColor}` }}
        />
      </IconButton>
    </Box>
  );
};
