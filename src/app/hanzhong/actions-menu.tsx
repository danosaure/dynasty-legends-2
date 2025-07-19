import SaveIcon from '@mui/icons-material/Save';

import { HanzhongUserSelectionActionIcon } from '../../hanzhong/components/HanzhongUserSelection/ActionIcon';
import { WrappedIconButton } from '../shared';

export type ActionsMenuProps = {
  isUserDataModified: boolean;
  onSave: () => void;
  username: string;
};

export const ActionsMenu = ({ isUserDataModified, onSave, username }: ActionsMenuProps) => {
  return (
    <>
      <HanzhongUserSelectionActionIcon username={username} />
      <WrappedIconButton label="Save changes" disabled={!isUserDataModified} onClick={onSave} Icon={SaveIcon} withTooltip />
    </>
  );
};
