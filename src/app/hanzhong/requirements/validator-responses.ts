import { VALIDATOR_RESPONSE_VALUES } from './validator-response-values';
import type { ValidatorResponses } from './ValidatorResponses';

export const VALIDATOR_RESPONSES: ValidatorResponses = {
  INITIAL_VALUE: { satisfies: true, value: VALIDATOR_RESPONSE_VALUES.INITIAL_VALUE } as const,
  NO_REQUIREMENTS: { satisfies: true, value: VALIDATOR_RESPONSE_VALUES.NO_REQUIREMENTS } as const,
  UNKNOWN_REQUIREMENT_TYPE: { satisfies: false, value: VALIDATOR_RESPONSE_VALUES.UNKNOWN_REQUIREMENT_TYPE } as const,
  UNKNOWN_SECTION: { satisfies: false, value: VALIDATOR_RESPONSE_VALUES.UNKNOWN_SECTION } as const,
  ASSUME_DONE: { satisfies: true, value: VALIDATOR_RESPONSE_VALUES.ASSUME_DONE } as const,
} as const;
