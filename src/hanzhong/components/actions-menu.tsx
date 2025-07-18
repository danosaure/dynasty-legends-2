import IconButton from '@mui/material/IconButton';
import SaveIcon from '@mui/icons-material/Save';
import Stack from '@mui/material/Stack';

export type ActionsMenuProps = {
  isUserDataModified: boolean;
  onSave: () => void;
};

export const ActionsMenu = ({ isUserDataModified, onSave }: ActionsMenuProps) => {
  return (
    <Stack direction="row" spacing={0}>
      <IconButton aria-label="Save" disabled={!isUserDataModified} onClick={onSave}>
        <SaveIcon color={isUserDataModified ? 'primary' : 'disabled'} />
      </IconButton>
    </Stack>
  );
};
