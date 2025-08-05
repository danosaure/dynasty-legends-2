import { getOfficerById } from '../data';
import type { HanzhongFormationsUserData } from '../hanzhong/formations/types';

import { getStringValue } from './get-string-value';

export const getCommonFactionId = (formationsUserData: HanzhongFormationsUserData, officerKeys: string[]): string => {
  const officerIds = officerKeys.map((officerKey) => getStringValue(formationsUserData, officerKey));
  if (officerIds.includes('')) {
    return '';
  }

  const factionIds = officerIds.reduce<Set<string>>(
    (allFactionIds, officerId) => allFactionIds.add(getOfficerById(officerId).factionId),
    new Set()
  );

  if (factionIds.size === 1) {
    return [...factionIds.values()][0];
  }
  return '';
};
