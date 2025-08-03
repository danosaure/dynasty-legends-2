import IconButton from '@mui/material/IconButton';
import type { SxProps, Theme } from '@mui/material/styles';
import Tooltip, { type TooltipProps } from '@mui/material/Tooltip';

import type { MaterialUiIconColorType, MaterialUiIconType } from '../types';

export type WrappedIconButtonProps = {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  Icon: MaterialUiIconType;
  withTooltip?: TooltipProps['placement'];
  small?: boolean;
  sx?: SxProps;
  selected?: boolean;
  palette?: Theme['palette'];
};

export const WrappedIconButton = ({
  label,
  disabled,
  onClick,
  Icon,
  withTooltip,
  small,
  sx,
  selected,
  palette,
}: WrappedIconButtonProps) => {
  let iconColor: MaterialUiIconColorType = 'action';
  if (disabled) {
    iconColor = palette ? palette.text.disabled : 'disabled';
  } else if (selected) {
    iconColor = palette ? palette.success.main : 'success';
  } else if (onClick) {
    iconColor = palette ? palette.primary.main : 'primary';
  }

  const button = (
    <IconButton aria-label={label} disabled={disabled} onClick={onClick} sx={sx}>
      <Icon color={iconColor} sx={{ fontSize: small ? { xs: 12, md: 20 } : { xs: 20 } }} />
    </IconButton>
  );

  return !disabled && withTooltip ? (
    <Tooltip title={label} placement={withTooltip}>
      {button}
    </Tooltip>
  ) : (
    button
  );
};
