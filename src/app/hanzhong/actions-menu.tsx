import SaveIcon from '@mui/icons-material/Save';

import { WrappedIconButton } from '../shared';

export type ActionsMenuProps = {
  isUserDataModified: boolean;
  onSave: () => void;
};

export const ActionsMenu = ({ isUserDataModified, onSave }: ActionsMenuProps) => {
  return (
    <>
      <WrappedIconButton label="Save changes" disabled={!isUserDataModified} onClick={onSave} Icon={SaveIcon} withTooltip />
    </>
  );
};
