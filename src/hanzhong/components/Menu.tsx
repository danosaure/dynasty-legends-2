import SaveIcon from '@mui/icons-material/Save';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

export type MenuProps = {
  isUserDataModified: boolean;
  onSave: () => void;
};

export const Menu = ({ isUserDataModified, onSave }: MenuProps) => {
  return (
    <Stack direction="row" spacing={3}>
      <IconButton aria-label="Save" disabled={!isUserDataModified} onClick={onSave}>
        <SaveIcon color={isUserDataModified ? 'primary' : 'disabled'} />
      </IconButton>
    </Stack>
  );
};
