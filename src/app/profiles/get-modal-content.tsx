import type { ReactNode } from 'react';
import type { Profile } from './Profile';
import Alert from '@mui/material/Alert';
import { Officer } from './Officer';

export type ModalContentType = {
  title: string;
  jsx: ReactNode;
};

export const getModalContent = (profile: Profile): ModalContentType => {
  if (profile.profileNature === 'officer') {
    return {
      title: `Officer`,
      jsx: <Officer id={profile.profileId} />,
    };
  }

  return {
    title: 'Invalid Profile',
    jsx: <Alert severity="error">Invalid Profile Nature</Alert>,
  };
};
