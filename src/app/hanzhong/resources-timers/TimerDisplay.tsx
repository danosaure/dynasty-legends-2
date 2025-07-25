import Typography from '@mui/material/Typography';

import { TIME_KEYS } from './utils';

const MINUTES_IN_AN_HOUR = 60;
const MAX_TIME = 24 * MINUTES_IN_AN_HOUR;

const __cache: Record<number, string> = {};

export type HanzhongTimerDisplayProps = {
  minutes: number | null;
};

const convertMinutesToString = (minutes: number | null): string => {
  if (minutes === null) {
    return TIME_KEYS.DONT_KNOW;
  } else if (minutes > MAX_TIME) {
    return TIME_KEYS.TOO_LONG;
  } else if (minutes === 0) {
    return TIME_KEYS.RIGHT_NOW;
  } else if (minutes === -1) {
    return TIME_KEYS.MAX_LEVEL_REACHED;
  }

  if (!__cache[minutes]) {
    const hoursDisplay = Math.floor(minutes / MINUTES_IN_AN_HOUR);
    const minutesDisplay = minutes % MINUTES_IN_AN_HOUR;

    let timeString: string = '';
    if (hoursDisplay) {
      timeString += `${hoursDisplay}h`;
    }

    if (minutesDisplay) {
      timeString += hoursDisplay ? `${('0' + minutesDisplay).slice(-2)}m` : `${minutesDisplay}m`;
    }

    __cache[minutes] = timeString;
  }

  return __cache[minutes];
};

const convertMinutesToColor = (minutes: number | null): string => {
  if (minutes === null || minutes > MAX_TIME) {
    return 'error';
  } else if (minutes === 0 || minutes === -1 || minutes <= 30) {
    return 'success';
  } else if (minutes <= 2 * MINUTES_IN_AN_HOUR) {
    return 'warning';
  } else {
    return 'error';
  }
};

export const HanzhongTimerDisplay = ({ minutes }: HanzhongTimerDisplayProps) => {
  const color = convertMinutesToColor(minutes);
  const timeString = convertMinutesToString(minutes);

  return (
    <Typography color={color} sx={{ fontSize: { xs: '12px', sm: '16px', md: '16px' } }}>
      {timeString}
    </Typography>
  );
};
