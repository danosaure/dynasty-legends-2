import SaveIcon from '@mui/icons-material/Save';
import Stack from '@mui/material/Stack';

import { WrappedIconButton } from '../../shared/WrappedIconButton';

export type ActionsMenuProps = {
  isUserDataModified: boolean;
  onSave: () => void;
};

export const ActionsMenu = ({ isUserDataModified, onSave }: ActionsMenuProps) => {
  return (
    <Stack direction="row" spacing={0}>
      <WrappedIconButton label="Save changes" disabled={!isUserDataModified} onClick={onSave} Icon={SaveIcon} withTooltip />
    </Stack>
  );
};
