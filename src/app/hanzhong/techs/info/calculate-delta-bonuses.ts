import type { HanzhongBonusType } from '../../types';

export const calculateDeltaBonuses = (userBonuses: HanzhongBonusType, levelBonuses: HanzhongBonusType): HanzhongBonusType => {
  if (levelBonuses.description) {
    return {
      ...levelBonuses,
    } as const;
  }

  type NoDescriptionType = Omit<HanzhongBonusType, 'description'>;

  const userBonusesWithoutDescription: Record<string, number> = {
    ...(userBonuses as NoDescriptionType),
  };

  const levelBonusesWithoutDescription: Record<string, number> = {
    ...(levelBonuses as NoDescriptionType),
  };

  return Object.keys(levelBonusesWithoutDescription).reduce(
    (cumul, key) =>
      ({
        ...cumul,
        [key]: levelBonusesWithoutDescription[key] - (userBonusesWithoutDescription[key] ?? 0),
      } as const),
    {} as HanzhongBonusType
  );
};
