import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router';

export const App404 = () => {
  const location = useLocation();
  console.log('App404: location=', location);

  return <Typography variant="h1">App 404</Typography>;
};
