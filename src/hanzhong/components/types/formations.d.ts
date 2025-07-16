export type HanzhongFormationsCharacterType = {
  id: string;
};

export type HanzhongFormationsTeamType = [HanzhongFormationsCharacterType, HanzhongFormationsCharacterType];

export type HanzhongFormationsTeamsType = [HanzhongFormationsTeamType, HanzhongFormationsTeamType, HanzhongFormationsTeamType];

export type HanzhongFormationsFormationType = {
  name: string;
  teams: HanzhongFormationsTeamsType;
};

export type HanzhongFormationsType = [
  HanzhongFormationsFormationType,
  HanzhongFormationsFormationType,
  HanzhongFormationsFormationType
];
