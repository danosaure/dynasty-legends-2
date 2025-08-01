import { getTechById } from '../data';
import type { HanzhongTechResourceType } from '../types';

export const findResourcesNeededByTechIdAndLevel = (techId: string, level: number): HanzhongTechResourceType | -1 | null => {
  const tech = getTechById(techId);
  if (tech === null) {
    return null;
  }

  if (level >= tech.levels.length) {
    return -1;
  }

  return {
    ...tech.levels[level].resources,
  } as const;
};
