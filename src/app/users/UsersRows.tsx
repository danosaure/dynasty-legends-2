import Grid from '@mui/material/Grid';
import type { PersistenceUserDataType } from '../../persistence';
import { UserRow } from './UserRow';
import Typography from '@mui/material/Typography';

export type UsersRowsProps = {
  users: PersistenceUserDataType[];
  onUsernameChange: (id: string, username: string) => void;
  onDeleteClick: (id: string) => void;
  onCloneClick: (id: string) => void;
};

export const UsersRows = ({ users, onUsernameChange, onDeleteClick, onCloneClick }: UsersRowsProps) => {
  if (!users.length) {
    return (
      <Grid container size={12} sx={{ justifyContent: 'center' }}>
        <Typography color="warning">***** No users found *****</Typography>
      </Grid>
    );
  }
  return (
    <Grid container size={12}>
      {users.map((user) => (
        <UserRow
          key={user.id}
          user={user}
          onUsernameChange={onUsernameChange}
          onDeleteClick={onDeleteClick}
          onCloneClick={onCloneClick}
        />
      ))}
    </Grid>
  );
};
