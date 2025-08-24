import type { HanzhongRequirementBase } from '../requirements';

export type HanzhongTechBaseRequirement = HanzhongRequirementBase & {
  section: 'techs';
};

export type HanzhongTechLevelRequirement = HanzhongTechBaseRequirement & {
  type: 'level';
  value: number;
  techId: string;
};

export type HanzhongTechCountRequirement = HanzhongTechBaseRequirement & {
  type: 'count';
  value: number;
};

export type HanzhongTechRequirement = HanzhongTechLevelRequirement | HanzhongTechCountRequirement;
