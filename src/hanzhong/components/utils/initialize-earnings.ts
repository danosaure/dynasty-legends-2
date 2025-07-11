import type { HanzhongUserDataType } from '../../persistence/hanzhong-user-data-type';
import { HANZHONG_TECH_IDS } from '../../constants/items-ids';
import type {
  HanzhongBonusType,
  HanzhongCityType,
  HanzhongTechType,
  HanzhongTerritoryLevelType,
  HanzhongType,
  HanzhongWarTierType,
} from '../../types';
import type { HanzhongTerritoryResourceType } from '../../types/hanzhong-territory-level-type';
import { addHanzhongBonuses } from '../../utils';

const SPECIAL_TRAINING_KEYS = [
  HANZHONG_TECH_IDS.SPECIAL_TRAINING__VANGUARD_CAMP,
  HANZHONG_TECH_IDS.SPECIAL_TRAINING__VALIANT_CAVALRY,
  HANZHONG_TECH_IDS.SPECIAL_TRAINING__ROYAL_GUARDS,
];

export const initializeEarnings = (hanzhongData: HanzhongType, userData: HanzhongUserDataType): HanzhongBonusType => {
  let bonuses: HanzhongBonusType = {
    territoryCap: 10, // Default.
  };

  bonuses = hanzhongData.cities.reduce((cumul: HanzhongBonusType, city: HanzhongCityType) => {
    if (userData[city.id] === 1) {
      return addHanzhongBonuses(cumul, city.earnings);
    }
    return cumul;
  }, bonuses);

  bonuses = hanzhongData.territories.levels.reduce(
    (cumul: HanzhongBonusType, level: HanzhongTerritoryLevelType): HanzhongBonusType => {
      return level.earnings.reduce(
        (territoryLevelEarnings: HanzhongBonusType, territoryLevel: HanzhongTerritoryResourceType): HanzhongBonusType => {
          const territoryCount = userData[territoryLevel.id] ?? 0;
          if (territoryCount) {
            return addHanzhongBonuses(territoryLevelEarnings, territoryLevel.earnings, territoryCount);
          }
          return territoryLevelEarnings;
        },
        cumul
      );
    },
    bonuses
  );

  bonuses = hanzhongData.warTiers.reduce((cumul: HanzhongBonusType, warTier: HanzhongWarTierType): HanzhongBonusType => {
    return warTier.techs.reduce((techCumul: HanzhongBonusType, tech: HanzhongTechType): HanzhongBonusType => {
      if (SPECIAL_TRAINING_KEYS.includes(tech.id)) {
        return techCumul;
      }

      const techLevel = userData[tech.id] ?? 0;
      if (techLevel) {
        return addHanzhongBonuses(techCumul, tech.levels[techLevel - 1].bonuses);
      }
      return techCumul;
    }, cumul);
  }, bonuses);

  return bonuses;
};
