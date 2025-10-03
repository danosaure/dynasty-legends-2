import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import type { BaseItemType } from '../types';
import Avatar from '@mui/material/Avatar';
import { assetPath } from '../utils';
import { sanitizeId } from '../../utils';
import { useAppContext } from '../Context';
import { getAptitudeByAptitude, getFactionByName } from '../data';
import { avatarSize, rosterOpacity } from '../profiles';

export type ItemAvatarProps = {
  item: BaseItemType;
  onClick?: () => void;
  roster?: Record<string, boolean>;
  small?: boolean;
  selectedId?: string;
  selectedColor?: string;
  disabled?: boolean;
  disabledClick?: boolean;
};

export const ItemAvatar = ({
  item,
  onClick,
  roster,
  small,
  selectedId,
  selectedColor,
  disabled,
  disabledClick,
}: ItemAvatarProps) => {
  const { showProfile } = useAppContext();

  if (!item.hasAvatar) {
    return null;
  }

  const inRoster = roster ? roster[item.id] : true;
  const size = avatarSize(small);
  const aptitudeColor = item.aptitude ? getAptitudeByAptitude(item.aptitude).palette.background.default : 'transparent';
  const factionColor = item.faction ? getFactionByName(item.faction).color : aptitudeColor;
  const src = assetPath(`data/${sanitizeId(item.type as string)}/${sanitizeId(item.name)}.png`);

  const avatar = (
    <Tooltip title={item.name}>
      <Avatar alt={item.name} src={src} sx={{ width: size, height: size, border: `3px solid ${aptitudeColor}` }} />
    </Tooltip>
  );

  const iconButton = disabledClick ? (
    avatar
  ) : (
    <IconButton
      onClick={() => (onClick ? onClick() : showProfile(item.type, item.id))}
      sx={{ width: size, height: `calc(${size} + 10px)` }}
    >
      {avatar}
    </IconButton>
  );

  return (
    <Box
      sx={{
        backgroundColor: factionColor,
        borderRadius: '6px',
        border: `3px solid ${item.id === selectedId ? selectedColor ?? 'transparent' : 'transparent'}`,
        opacity: disabled ? 0.2 : rosterOpacity(inRoster),
      }}
    >
      {iconButton}
    </Box>
  );
};
