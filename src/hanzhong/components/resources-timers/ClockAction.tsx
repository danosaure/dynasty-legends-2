import { useEffect, useState } from 'react';
import AlarmIcon from '@mui/icons-material/Alarm';
import AlarmOffIcon from '@mui/icons-material/AlarmOff';
import IconButton from '@mui/material/IconButton';

import { useHanzhongContext } from '../HanzhongContext';
import { isShowingClock, toggleClock } from './utils';

export const HanzhongClockAction = () => {
  const { user, onChange } = useHanzhongContext();
  const [showClocks, setShowClocks] = useState<boolean>(isShowingClock(user));

  useEffect(() => {
    setShowClocks(isShowingClock(user));
  }, [user]);

  const onClick = () => {
    toggleClock(onChange, showClocks);
    setShowClocks(!showClocks);
  };

  const Icon = showClocks ? AlarmOffIcon : AlarmIcon;

  return (
    <IconButton aria-label="Clock" onClick={onClick}>
      <Icon color="primary" />
    </IconButton>
  );
};
