import type { HanzhongUserDataType } from '../types';

export const calculateUserFormationTacticalPoints = (user: HanzhongUserDataType, formationId: string): number =>
  Object.keys(user).reduce((total, userKey) => total + (userKey.startsWith(formationId) ? user[userKey] : 0), 0);
