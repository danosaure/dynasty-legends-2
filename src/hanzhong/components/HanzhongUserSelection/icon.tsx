import PersonIcon from '@mui/icons-material/Person';

import { WrappedIconButton } from '../../../components';

export type HanzhongUserSelectionIconProps = {
  label: string;
  onClick?: () => void;
};

export const HanzhongUserSelectionIcon = ({ label, onClick }: HanzhongUserSelectionIconProps) => (
  <WrappedIconButton label={label} onClick={onClick} Icon={PersonIcon} />
);
