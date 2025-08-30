import { useState } from 'react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PersonIcon from '@mui/icons-material/Person';
import Grid from '@mui/material/Grid';

import type { PersistenceUserDataType } from '../../persistence';
import { WrappedIconButton } from '../shared';
import { Username } from './Username';
import { UsernameEditor } from './UsernameEditor';
import { useAppContext } from '../Context';

export type UserRowProps = {
  user: PersistenceUserDataType;
  onUsernameChange: (id: string, username: string) => void;
  onDeleteClick: (id: string) => void;
  onCloneClick: (id: string) => void;
};

export const UserRow = ({ user, onUsernameChange, onDeleteClick, onCloneClick }: UserRowProps) => {
  const { user: selectedUser, setCurrentUserId } = useAppContext();

  const [editMode, setEditMode] = useState<boolean>(false);

  const onDone = (username: string) => {
    setEditMode(false);
    onUsernameChange(user.id, username);
  };

  const cancelEdit = () => {
    setEditMode(false);
  };

  const isCurrentUser = selectedUser?.id === user.id;

  const usernameJSX = editMode ? (
    <UsernameEditor username={user.username} onDone={onDone} onCancel={cancelEdit} />
  ) : (
    <Username username={user.username} />
  );

  return (
    <Grid container size={12} sx={{ alignItems: 'center' }} spacing={0}>
      <Grid size="auto">
        <WrappedIconButton
          Icon={PersonIcon}
          label={isCurrentUser ? `Current user` : `Switch to ${user.username}`}
          onClick={() => setCurrentUserId(user.id)}
          withTooltip="right"
          selected={isCurrentUser}
        />
      </Grid>
      <Grid size="grow">{usernameJSX}</Grid>
      <Grid size="auto">
        <WrappedIconButton Icon={EditIcon} label="Edit" onClick={() => setEditMode(true)} disabled={editMode} />
        <WrappedIconButton Icon={DeleteIcon} label="Delete" onClick={() => onDeleteClick(user.id)} />
        <WrappedIconButton Icon={ContentCopyIcon} label="Clone" onClick={() => onCloneClick(user.id)} />
      </Grid>
    </Grid>
  );
};
