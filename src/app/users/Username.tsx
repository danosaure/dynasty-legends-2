import Typography from '@mui/material/Typography';

export type UsernameProps = {
  username: string;
};

export const Username = ({ username }: UsernameProps) => {
  if (!username) {
    return (
      <Typography color="warning" sx={{ fontStyle: 'italic' }}>
        No Username
      </Typography>
    );
  }

  return <Typography>{username}</Typography>;
};
