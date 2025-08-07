import type { HanzhongWarTierTaskType } from '../../types';
import type { HanzhongWarTierType } from './HanzhongWarTierType';
import { HANZHONG_WAR_TIERS } from './war-tiers';
import { WAR_TIER_TASKS } from './war-tiers-tasks';

type WarTierCache = Record<string, HanzhongWarTierType>;

const __CACHE__WAR_TIER__BY_ID: WarTierCache = HANZHONG_WAR_TIERS.reduce<WarTierCache>(
  (cache, warTier) => ({
    ...cache,
    [warTier.id]: warTier,
  }),
  {}
);

export const getWarTierIdById = (id: string): HanzhongWarTierType => __CACHE__WAR_TIER__BY_ID[id];

export const __CACHE__WAR_TIER__BY_NAME: WarTierCache = HANZHONG_WAR_TIERS.reduce<WarTierCache>(
  (cache, warTier) =>
    ({
      ...cache,
      [warTier.name]: warTier,
    } as const),
  {}
);

export const getWarTierIdByName = (name: string): HanzhongWarTierType => __CACHE__WAR_TIER__BY_NAME[name];

type WarTierTaskCache = Record<string, HanzhongWarTierTaskType>;

export const __CACHE__WAR_TIER_TASK__BY_ID: WarTierTaskCache = Object.values(WAR_TIER_TASKS).reduce<WarTierTaskCache>(
  (cache, warTierTasks: HanzhongWarTierTaskType[]) =>
    warTierTasks.reduce<WarTierTaskCache>(
      (warTierTasksCache, warTierTask: HanzhongWarTierTaskType) =>
        ({
          ...warTierTasksCache,
          [warTierTask.id]: warTierTask,
        } as const),
      cache
    ),
  {}
);

export const getWarTierTaskById = (id: string): HanzhongWarTierTaskType => __CACHE__WAR_TIER_TASK__BY_ID[id];
