import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import type { MaterialUiIconColorType, MaterialUiIconType } from '../types';

export type WrappedIconButtonProps = {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  Icon: MaterialUiIconType;
  withTooltip?: boolean;
  small?: boolean;
};

export const WrappedIconButton = ({ label, disabled, onClick, Icon, withTooltip, small }: WrappedIconButtonProps) => {
  let iconColor: MaterialUiIconColorType = 'action';
  if (disabled) {
    iconColor = 'disabled';
  } else if (onClick) {
    iconColor = 'primary';
  }

  const button = (
    <IconButton aria-label={label} disabled={disabled} onClick={onClick}>
      <Icon color={iconColor} sx={{ fontSize: small ? { xs: 12, sm: 20 } : { xs: 20 } }} />
    </IconButton>
  );

  return withTooltip ? <Tooltip title={label}>{button}</Tooltip> : button;
};
