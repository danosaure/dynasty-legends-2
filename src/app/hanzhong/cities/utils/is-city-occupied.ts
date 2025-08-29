import { getNumberValue } from '../../../utils';
import type { HanzhongUserDataType } from '../../types';

export const isCityOccupied = (cityId: string, userData: HanzhongUserDataType): boolean => getNumberValue(userData, cityId) === 1;
