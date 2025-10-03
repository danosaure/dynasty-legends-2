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
  let jsx;

  if (profile.profileType === 'Officer') {
    jsx = <Officer id={profile.profileId} />;
  } else if (profile.profileType === 'Mount') {
    jsx = <Mount id={profile.profileId} />;
  } else {
    jsx = <Alert severity="error">Profile Type "{profile.profileType}" not implemented yet.</Alert>;
  }

  return {
    title: profile.profileType,
    jsx,
  };
};
