import { useState } from 'react';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import { UsersRows } from './UsersRows';
import { useAppContext } from '../Context';
import { PaperWrapper } from '../shared';

export const UserDashboard = () => {
  const { users } = useAppContext();
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const onUsernameChange = (id: string, username: string) => {
    console.log(`Need to save id="${id}" with new username="${username}".`);
  };

  console.log(`ID to delete="${deleteId}".`);

  return (
    <PaperWrapper sx={{ p: 2 }}>
      <Grid container direction={'column'} spacing={2}>
        <PaperWrapper sx={{ p: 2 }}>
          <UsersRows users={users} onUsernameChange={onUsernameChange} onDeleteClick={setDeleteId} />
        </PaperWrapper>
        <Button variant="contained" color="primary" startIcon={<PersonAddIcon />}>
          New User
        </Button>
      </Grid>
    </PaperWrapper>
  );
};
