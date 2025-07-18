import { useEffect, useState } from 'react';
import AlarmIcon from '@mui/icons-material/Alarm';
import AlarmOffIcon from '@mui/icons-material/AlarmOff';
import IconButton from '@mui/material/IconButton';

import { useHanzhongContext } from '../HanzhongContext';
import { isShowingClocks, toggleClocks } from './utils';

export const HanzhongClockAction = () => {
  const { user, onChange } = useHanzhongContext();
  const [showClocks, setShowClocks] = useState<boolean>(isShowingClocks(user));

  useEffect(() => {
    setShowClocks(isShowingClocks(user));
  }, [user]);

  const onClick = () => {
    toggleClocks(onChange, showClocks);
    setShowClocks(!showClocks);
  };

  const Icon = showClocks ? AlarmOffIcon : AlarmIcon;

  return (
    <IconButton aria-label="Clock" onClick={onClick}>
      <Icon color="primary" />
    </IconButton>
  );
};
