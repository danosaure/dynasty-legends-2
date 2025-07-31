import type { HanzhongUserSectionData } from '../types';

export const sumValuesFromSection = (section: HanzhongUserSectionData): number => {
  return Object.keys(section).reduce<number>((sum, key) => {
    const value = section[key];
    if (typeof value === 'number' && value > 0) {
      return sum + value;
    }
    return sum;
  }, 0);
};
