import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Grid from '@mui/material/Grid';

import type { PersistenceUserDataType } from '../../persistence';
import { WrappedIconButton } from '../shared';
import { Username } from './Username';
import { UsernameEditor } from './UsernameEditor';

export type UserRowProps = {
  user: PersistenceUserDataType;
  onUsernameChange: (id: string, username: string) => void;
  onDeleteClick: (id: string) => void;
};

export const UserRow = ({ user, onUsernameChange, onDeleteClick }: UserRowProps) => {
  const [editMode, setEditMode] = useState<boolean>(false);

  const onDone = (username: string) => {
    setEditMode(false);
    onUsernameChange(user.id, username);
  };

  const cancelEdit = () => {
    setEditMode(false);
  };

  const usernameJSX = editMode ? (
    <UsernameEditor username={user.username} onDone={onDone} onCancel={cancelEdit} />
  ) : (
    <Username username={user.username} />
  );

  return (
    <Grid container size={12}>
      <Grid size="grow">{usernameJSX}</Grid>
      <Grid size="auto">
        <WrappedIconButton Icon={EditIcon} label="Edit" onClick={() => setEditMode(true)} disabled={editMode} />
        <WrappedIconButton Icon={DeleteIcon} label="Delete" onClick={() => onDeleteClick(user.id)} />
      </Grid>
    </Grid>
  );
};
