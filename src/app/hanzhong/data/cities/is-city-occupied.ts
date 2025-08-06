import { getNumberValue } from '../../../utils';
import type { HanzhongUserDataType } from '../../types';
import type { HanzhongCityId } from './HanzhongCityId';

export const isCityOccupied = (cityId: HanzhongCityId, userData: HanzhongUserDataType): boolean =>
  getNumberValue(userData, cityId) === 1;
