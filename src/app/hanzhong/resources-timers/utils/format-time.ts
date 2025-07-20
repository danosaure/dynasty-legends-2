import { TIME_KEYS } from './constants';

const MINUTES_IN_AN_HOUR = 60;
const MAX_TIME = 24 * MINUTES_IN_AN_HOUR;

const __cache: Record<number, string> = {};

export const formatTime = (time: number): string => {
  if (time === 0) {
    return TIME_KEYS.RIGHT_NOW;
  }

  if (time > MAX_TIME) {
    return TIME_KEYS.TOO_LONG;
  }

  const cachedValue = __cache[time];
  if (cachedValue !== undefined) {
    return cachedValue;
  }

  const hours = Math.floor(time / MINUTES_IN_AN_HOUR);
  const minutes = time % MINUTES_IN_AN_HOUR;

  let timeString;
  if (hours && minutes) {
    timeString = `${hours}h${minutes}m`;
  } else if (hours) {
    timeString = `${hours}h`;
  } else {
    timeString = `${minutes}m`;
  }

  __cache[time] = timeString;
  return timeString;
};
