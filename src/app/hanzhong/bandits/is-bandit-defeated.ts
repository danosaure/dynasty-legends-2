import { getNumberValue } from '../../utils';
import type { HanzhongUserDataType } from '../types';

export const isBanditDefeated = (banditId: string, userData: HanzhongUserDataType): boolean =>
  getNumberValue(userData, banditId) === 1;
