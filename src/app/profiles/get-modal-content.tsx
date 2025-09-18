import type { ReactNode } from 'react';
import type { Profile } from './Profile';
import Alert from '@mui/material/Alert';
import { Officer } from './Officer';
import { Mount } from './Mount';

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
  } else if (profile.profileNature === 'mount') {
    return {
      title: 'Mount',
      jsx: <Mount id={profile.profileId} />,
    };
  } else {
    return {
      title: 'Invalid Profile',
      jsx: <Alert severity="error">Invalid Profile Nature</Alert>,
    };
  }
};
