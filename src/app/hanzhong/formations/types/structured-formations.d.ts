export type StructuredOfficer = string;

export type StructuredTeam = [StructuredOfficer, StructuredOfficer];

export type StructuredFormation = {
  id: string;
  techId: string;
  name: string;
  teams: [StructuredTeam, StructuredTeam, StructuredTeam];
};

export type StructuredFormations = [StructuredFormation, StructuredFormation, StructuredFormation];
