import type { HanzhongRequirementCheckResult } from '../types';

type ValidatorResponses = Record<string, HanzhongRequirementCheckResult>;

export const VALIDATOR_RESPONSE_VALUES: Record<string, number> = {
  NO_REQUIREMENTS: -100,
  UNKNOWN_REQUIREMENT_TYPE: -200,
} as const;

export const VALIDATOR_RESPONSES: ValidatorResponses = {
  NO_REQUIREMENTS: { satisfies: true, value: VALIDATOR_RESPONSE_VALUES.NO_REQUIREMENTS } as const,
  UNKNOWN_REQUIREMENT_TYPE: { satisfies: false, value: VALIDATOR_RESPONSE_VALUES.UNKNOWN_REQUIREMENT_TYPE } as const,
} as const;
