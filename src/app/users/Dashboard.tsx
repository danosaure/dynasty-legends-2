import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import { isStorybookTest } from '../../utils';
import { useAppContext } from '../Context';
import { PaperWrapper } from '../shared';
import { UsersRows } from './UsersRows';
import { createUser } from '../persistence';
import { archiveUserData, getUserData, saveUserData } from '../../persistence';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { Username } from './Username';
import DialogActions from '@mui/material/DialogActions';

export const UserDashboard = () => {
  const { users, refreshApp } = useAppContext();
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const onUsernameChange = async (id: string, username: string): Promise<void> => {
    if (!isStorybookTest()) {
      const dbUserData = await getUserData(id);
      if (dbUserData) {
        dbUserData.username = username;
        await saveUserData(dbUserData);
        refreshApp();
      }
    }
  };

  const onCloneClick = async (id: string): Promise<void> => {
    if (!isStorybookTest()) {
      const dbUserData = await getUserData(id);
      if (dbUserData) {
        const clonedUserData = {
          ...dbUserData,
          username: `${dbUserData.username} [C]`,
          id: uuidv4(),
        };
        await saveUserData(clonedUserData);
        refreshApp();
      }
    }
  };

  const onCreateUserClick = async () => {
    await createUser();
    refreshApp();
  };

  const archiveUser = async (): Promise<void> => {
    if (deleteId && !isStorybookTest()) {
      await archiveUserData(deleteId);
      refreshApp();
    }
  };

  const onDialogClose = () => setDeleteId(null);

  return (
    <Grid container direction={'column'} spacing={2}>
      <PaperWrapper sx={{ p: 2 }}>
        <UsersRows users={users} onUsernameChange={onUsernameChange} onDeleteClick={setDeleteId} onCloneClick={onCloneClick} />
      </PaperWrapper>
      <Button variant="contained" color="primary" startIcon={<PersonAddIcon />} onClick={onCreateUserClick}>
        New User
      </Button>

      <Dialog open={deleteId !== null} onClose={onDialogClose} aria-labelledby="user-dashboard--delete-dialog--title">
        <DialogTitle id="user-dashboard--delete-dialog--title">Delete User</DialogTitle>
        <DialogContent>
          <DialogContentText id="user-dashboard--delete-dialog--description">
            Are you sure you want to delete user
            <Username username={users.find((user) => user.id === deleteId)?.username || ''} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="primary" onClick={onDialogClose}>
            Cancel
          </Button>
          <Button variant="outlined" color="error" onClick={archiveUser}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};
