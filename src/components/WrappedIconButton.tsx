import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import type { MaterialUiIconColorType, MaterialUiIconType } from '../types';

export type WrappedIconButtonProps = {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  Icon: MaterialUiIconType;
};

export const WrappedIconButton = ({ label, disabled, onClick, Icon }: WrappedIconButtonProps) => {
  let iconColor: MaterialUiIconColorType = 'action';
  if (disabled) {
    iconColor = 'disabled';
  } else if (onClick) {
    iconColor = 'primary';
  }

  return (
    <Tooltip title={label}>
      <IconButton aria-label={label} disabled={disabled} onClick={onClick}>
        <Icon color={iconColor} />
      </IconButton>
    </Tooltip>
  );
};
