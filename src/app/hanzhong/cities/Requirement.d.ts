export type HanzhongCityRequirementBase = {
  section: 'cities';
};

export type HanzhongCityHanzhongRequirement = HanzhongCityRequirementBase & {
  type: 'hanzhong';
};

export type HanzhongCityNonHanzhongRequirement = HanzhongCityRequirementBase & {
  type: 'non-hanzhong';
  value: number;
};

export type HanzhongCityAmongstRequirement = HanzhongCityRequirementBase & {
  type: 'amongst';
  value: number;
  cityNames: string[];
};

export type HanzhongCityRequirement =
  | HanzhongCityHanzhongRequirement
  | HanzhongCityNonHanzhongRequirement
  | HanzhongCityAmongstRequirement;
