import type { HanzhongTechResourceType } from '../../types';

export const sumTechResources = (a: HanzhongTechResourceType, b: HanzhongTechResourceType): HanzhongTechResourceType =>
  ({
    lumber: a.lumber + b.lumber,
    grains: a.grains + b.grains,
    iron: a.iron + b.iron,
  } as const);
