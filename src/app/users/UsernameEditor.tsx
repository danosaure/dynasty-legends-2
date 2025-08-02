import { useState, type ChangeEvent } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import InputBase from '@mui/material/InputBase';

import { WrappedIconButton } from '../shared';

export type UsernameEditorProps = {
  username: string;
  onDone: (username: string) => void;
  onCancel: () => void;
};

export const UsernameEditor = ({ username, onDone, onCancel }: UsernameEditorProps) => {
  const [modifiedUsername, setModifiedUsername] = useState<string>(username);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => setModifiedUsername(e.target.value);

  const confirmClicked = () => {
    if (username !== modifiedUsername) {
      onDone(modifiedUsername);
    }
  };

  const cancelClicked = () => {
    setModifiedUsername(username);
    onCancel();
  };

  return (
    <>
      <InputBase
        placeholder="Enter a username"
        defaultValue={username}
        value={modifiedUsername}
        onChange={onChange}
        sx={{ backgroundColor: 'rgba(195, 137, 0, 0.1)' }}
      />
      <WrappedIconButton
        Icon={DoneIcon}
        label="Confirm Edit"
        onClick={confirmClicked}
        disabled={!modifiedUsername || username === modifiedUsername}
      />
      <WrappedIconButton Icon={CloseIcon} label="Cancel Edit" onClick={cancelClicked} />
    </>
  );
};
