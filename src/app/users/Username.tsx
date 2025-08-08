import PersonIcon from '@mui/icons-material/Person';
import Box from '@mui/material/Box';
import Typography, { type TypographyOwnProps } from '@mui/material/Typography';

export type UsernameProps = {
  username: string;
  icon?: boolean;
  small?: boolean;
};

export const Username = ({ username, icon, small }: UsernameProps) => {
  const color: TypographyOwnProps['color'] = username ? 'info' : 'warning';
  const fontStyle = username ? 'none' : 'italic';

  return (
    <Typography
      color={color}
      sx={{ fontStyle, justifyContent: 'center', alignItems: 'center', fontSize: small ? '12px' : 'inherit' }}
    >
      {icon && (
        <Box sx={{ display: 'inline' }}>
          <PersonIcon sx={{ fontSize: '1em' }} />
        </Box>
      )}
      <Box sx={{ display: 'inline' }}>{username || 'No Username'}</Box>
    </Typography>
  );
};
