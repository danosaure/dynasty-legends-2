import { SECTION_KEYS } from '../constants';
import { HANZHONG_CITIES, HANZHONG_TERRITORIES, HANZHONG_WAR_TIERS } from '../data';
import {
  HANZHONG_TECH_SPECIAL_TRAINING_ROYAL_GUARDS,
  HANZHONG_TECH_SPECIAL_TRAINING_VALIANT_CAVALRY,
  HANZHONG_TECH_SPECIAL_TRAINING_VANGUARD_CAMP,
} from '../data/hanzhong-techs';
import type {
  HanzhongBonusType,
  HanzhongCityType,
  HanzhongContextGetValue,
  HanzhongTechType,
  HanzhongTerritoryLevelType,
  HanzhongTerritoryResourceType,
  HanzhongWarTierType,
} from '../types';
import { addHanzhongBonuses } from '../utils';

const SPECIAL_TRAINING_KEYS: string[] = [
  HANZHONG_TECH_SPECIAL_TRAINING_VANGUARD_CAMP.id,
  HANZHONG_TECH_SPECIAL_TRAINING_VALIANT_CAVALRY.id,
  HANZHONG_TECH_SPECIAL_TRAINING_ROYAL_GUARDS.id,
];

export const initializeEarnings = (getValue: HanzhongContextGetValue): HanzhongBonusType => {
  let bonuses: HanzhongBonusType = {
    territoryCap: 10, // Default.
  };

  bonuses = HANZHONG_CITIES.reduce((cumul: HanzhongBonusType, city: HanzhongCityType) => {
    const cityValue = getValue(SECTION_KEYS.CITIES, city.id);

    if (cityValue === 1) {
      return addHanzhongBonuses(cumul, city.earnings);
    }
    return cumul;
  }, bonuses);

  bonuses = HANZHONG_TERRITORIES.levels.reduce((cumul: HanzhongBonusType, level: HanzhongTerritoryLevelType): HanzhongBonusType => {
    return level.earnings.reduce(
      (territoryLevelEarnings: HanzhongBonusType, territoryLevel: HanzhongTerritoryResourceType): HanzhongBonusType => {
        const territoryCount = getValue(SECTION_KEYS.TERRITORIES, territoryLevel.id);
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

      const techLevel = getValue(SECTION_KEYS.TECHS, tech.id);
      if (techLevel) {
        return addHanzhongBonuses(techCumul, tech.levels[techLevel - 1].bonuses);
      }
      return techCumul;
    }, cumul);
  }, bonuses);

  return bonuses;
};
