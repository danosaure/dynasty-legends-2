import { getNumberValue } from '../../utils';
import type { HanzhongUserDataType } from '../types';

export const isBanditDefeated = (id: string, userData: HanzhongUserDataType): boolean => getNumberValue(userData, id) === 1;
