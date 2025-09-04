import { calculateEarningsFromCities } from '../cities';
import { HANZHONG_TECH_IDS } from '../constants/items-ids';
import type { HanzhongTechType } from '../techs';
import { HANZHONG_TERRITORIES, type HanzhongTerritoryLevelType, type HanzhongTerritoryLevelEarningsType } from '../territories';
import type { HanzhongBonusType, HanzhongUserDataType } from '../types';
import { addHanzhongBonuses } from '../utils';
import { HANZHONG_WAR_TIERS, type HanzhongWarTierType } from '../war-tiers';

const SPECIAL_TRAINING_KEYS = [
  HANZHONG_TECH_IDS.SPECIAL_TRAINING__VANGUARD_CAMP,
  HANZHONG_TECH_IDS.SPECIAL_TRAINING__VALIANT_CAVALRY,
  HANZHONG_TECH_IDS.SPECIAL_TRAINING__ROYAL_GUARDS,
];

export const initializeEarnings = (userData: HanzhongUserDataType): HanzhongBonusType => {
  let bonuses: HanzhongBonusType = {
    territoryCap: 10, // Default.
  };

  bonuses = addHanzhongBonuses(bonuses, calculateEarningsFromCities(userData));

  bonuses = HANZHONG_TERRITORIES.levels.reduce((cumul: HanzhongBonusType, level: HanzhongTerritoryLevelType): HanzhongBonusType => {
    return level.earnings.reduce(
      (territoryLevelEarnings: HanzhongBonusType, territoryLevel: HanzhongTerritoryLevelEarningsType): HanzhongBonusType => {
        const territoryCount = userData[territoryLevel.id] ?? 0;
        if (territoryCount) {
          return addHanzhongBonuses(territoryLevelEarnings, territoryLevel.earnings, territoryCount);
        }
        return territoryLevelEarnings;
      },
      cumul
    );
  }, bonuses);

  bonuses = HANZHONG_WAR_TIERS.reduce((cumul: HanzhongBonusType, warTier: HanzhongWarTierType): HanzhongBonusType => {
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
