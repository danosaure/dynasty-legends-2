export type HanzhongRequirementResponse = {
  satisfied: boolean;
  value: number;
  message?: string;
};

export const HANZHONG_REQUIREMENT_RESPONSE_CODES: Record<string, number> = {
  INITIAL_VALUE: 0,
  ERROR: -1,
} as const;

export const HANZHONG_REQUIREMENT_RESPONSES: Record<string, HanzhongRequirementResponse> = {
  INITIAL_VALUE: { satisfied: true, value: HANZHONG_REQUIREMENT_RESPONSE_CODES.INITIAL_VALUE },
  ERROR: { satisfied: false, value: HANZHONG_REQUIREMENT_RESPONSE_CODES.ERROR },
} as const;

export const errorRequirementResponse = (message: string): HanzhongRequirementResponse => ({
  satisfied: false,
  value: HANZHONG_REQUIREMENT_RESPONSE_CODES.ERROR,
  message,
});

export const isErrorRequirementResponse = (check: HanzhongRequirementResponse): boolean =>
  check.satisfied === false && check.value === HANZHONG_REQUIREMENT_RESPONSE_CODES.ERROR;
