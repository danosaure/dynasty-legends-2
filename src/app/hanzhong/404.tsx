import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router';

import { TitleTypographyWrapper } from '../shared';

export const Hanzhong404 = () => {
  const location = useLocation();

  return (
    <>
      <TitleTypographyWrapper variant="TITLE" color="error">
        Hanzhong 404
      </TitleTypographyWrapper>
      <Typography color="error">{location.pathname}</Typography>
    </>
  );
};
