import type { ReactNode } from 'react';
import type { Profile } from './Profile';
import { Officer } from './Officer';
import { Mount } from './Mount';
import { GenericProfile } from './Generic';

export type ModalContentType = {
  title: string;
  jsx: ReactNode;
};

export const getModalContent = (profile: Profile): ModalContentType => {
  let jsx;
  let generic: boolean = false;

  if (profile.profileType === 'Officer') {
    jsx = <Officer id={profile.profileId} />;
  } else if (profile.profileType === 'Mount') {
    jsx = <Mount id={profile.profileId} />;
  } else {
    generic = true;
    jsx = <GenericProfile profile={profile} />;
  }

  return {
    title: `${profile.profileType}${generic ? ' - [GENERIC]' : ''}`,
    jsx,
  };
};
