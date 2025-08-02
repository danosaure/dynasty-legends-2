import { useState } from 'react';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import { isStorybookTest } from '../../utils';
import { useAppContext } from '../Context';
import { PaperWrapper } from '../shared';
import { UsersRows } from './UsersRows';
import { createUser } from '../persistence';

export const UserDashboard = () => {
  const { users, refreshApp } = useAppContext();
  const [deleteId, setDeleteId] = useState<string | null>(null);

  console.log(`<UserDashboard>: users=`, users);

  const onUsernameChange = (id: string, username: string) => {
    if (isStorybookTest()) {
      console.log(`Need to save id="${id}" with new username="${username}".`);
    } else {
      console.log(`Add interaction with IndexedDB.`);
    }
  };

  const onCreateUserClick = async () => {
    console.log(`Create a new User.`);
    await createUser();
    refreshApp();
  };

  return (
    <Grid container direction={'column'} spacing={2}>
      <PaperWrapper sx={{ p: 2 }}>
        <UsersRows users={users} onUsernameChange={onUsernameChange} onDeleteClick={setDeleteId} />
      </PaperWrapper>
      <Button variant="contained" color="primary" startIcon={<PersonAddIcon />} onClick={onCreateUserClick}>
        New User
      </Button>
    </Grid>
  );
};
