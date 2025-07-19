import PersonIcon from '@mui/icons-material/Person';

import { WrappedIconButton } from '../../../components';

export type HanzhongUserSelectionIconProps = {
  label: string;
  onClick?: () => void;
  withTooltip?: boolean;
};

export const HanzhongUserSelectionIcon = ({ label, onClick, withTooltip }: HanzhongUserSelectionIconProps) => (
  <WrappedIconButton label={label} onClick={onClick} Icon={PersonIcon} withTooltip={withTooltip} />
);
