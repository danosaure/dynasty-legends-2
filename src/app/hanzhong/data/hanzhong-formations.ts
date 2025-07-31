import { sanitizeId } from '../../../utils';
import { getTechIdByName } from './hanzhong-techs';

export type HanzhongFormationTeamType = [string, string];
export type HanzhongFormationType = {
  id: string;
  techId: string;
  name: string;
  teams: [HanzhongFormationTeamType, HanzhongFormationTeamType, HanzhongFormationTeamType];
};
export type HanzhongFormationStructureType = [HanzhongFormationType, HanzhongFormationType, HanzhongFormationType];

export const HANZHONG_FORMATIONS: Record<string, string> = {
  VANGUARD_CAMP: 'Vanguard Camp',
  VALIANT_CAVALRY: 'Valiant Cavalry',
  ROYAL_GUARDS: 'Royal Guards',
} as const;

const HANZHONG_FORMATION_TEAMS: Record<string, string> = {
  TEAM_1: 'Team 1',
  TEAM_2: 'Team 2',
  TEAM_3: 'Team 3',
} as const;

const HANZHONG_FORMATION_RANKS: Record<string, string> = {
  GENERAL: 'General',
  LIEUTENANT: 'Lieutenant',
} as const;

export const HANZHONG_FORMATION_IDS: Record<string, string> = {
  ...['VANGUARD_CAMP', 'VALIANT_CAVALRY', 'ROYAL_GUARDS'].reduce(
    (cumulFormation, formation) =>
      ['TEAM_1', 'TEAM_2', 'TEAM_3'].reduce(
        (cumulTeam, team) =>
          ['GENERAL', 'LIEUTENANT'].reduce(
            (cumulRank, rank) => ({
              ...cumulRank,
              [`${formation}__${team}__${rank}`]: sanitizeId(
                `${HANZHONG_FORMATIONS[formation]}--${HANZHONG_FORMATION_TEAMS[team]}--${HANZHONG_FORMATION_RANKS[rank]}`
              ),
            }),
            cumulTeam
          ),
        cumulFormation
      ),
    {}
  ),
} as const;

const baseInfo = (name: string) => ({
  id: sanitizeId(name),
  techId: getTechIdByName(`Special Training - ${name}`),
  name,
});

export const STRUCTURED_HANZHONG_FORMATIONS: HanzhongFormationStructureType = [
  {
    ...baseInfo(HANZHONG_FORMATIONS.VANGUARD_CAMP),
    teams: [
      [HANZHONG_FORMATION_IDS.VANGUARD_CAMP__TEAM_1__GENERAL, HANZHONG_FORMATION_IDS.VANGUARD_CAMP__TEAM_1__LIEUTENANT],
      [HANZHONG_FORMATION_IDS.VANGUARD_CAMP__TEAM_2__GENERAL, HANZHONG_FORMATION_IDS.VANGUARD_CAMP__TEAM_2__LIEUTENANT],
      [HANZHONG_FORMATION_IDS.VANGUARD_CAMP__TEAM_3__GENERAL, HANZHONG_FORMATION_IDS.VANGUARD_CAMP__TEAM_3__LIEUTENANT],
    ],
  },
  {
    ...baseInfo(HANZHONG_FORMATIONS.VALIANT_CAVALRY),
    teams: [
      [HANZHONG_FORMATION_IDS.VALIANT_CAVALRY__TEAM_1__GENERAL, HANZHONG_FORMATION_IDS.VALIANT_CAVALRY__TEAM_1__LIEUTENANT],
      [HANZHONG_FORMATION_IDS.VALIANT_CAVALRY__TEAM_2__GENERAL, HANZHONG_FORMATION_IDS.VALIANT_CAVALRY__TEAM_2__LIEUTENANT],
      [HANZHONG_FORMATION_IDS.VALIANT_CAVALRY__TEAM_3__GENERAL, HANZHONG_FORMATION_IDS.VALIANT_CAVALRY__TEAM_3__LIEUTENANT],
    ],
  },
  {
    ...baseInfo(HANZHONG_FORMATIONS.ROYAL_GUARDS),
    teams: [
      [HANZHONG_FORMATION_IDS.ROYAL_GUARDS__TEAM_1__GENERAL, HANZHONG_FORMATION_IDS.ROYAL_GUARDS__TEAM_1__LIEUTENANT],
      [HANZHONG_FORMATION_IDS.ROYAL_GUARDS__TEAM_2__GENERAL, HANZHONG_FORMATION_IDS.ROYAL_GUARDS__TEAM_2__LIEUTENANT],
      [HANZHONG_FORMATION_IDS.ROYAL_GUARDS__TEAM_3__GENERAL, HANZHONG_FORMATION_IDS.ROYAL_GUARDS__TEAM_3__LIEUTENANT],
    ],
  },
] as const;
