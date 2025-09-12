import { describe, expect, it } from 'vitest';
import { LEITNER_BOX_NAMES } from './box-names';

describe('LEITNER_BOX_NAMES', () => {
  it('Has known values', () => {
    expect(LEITNER_BOX_NAMES).to.deep.equal(['0259', '1360', '2471', '3582', '4691', '5704', '6815', '7926', '8037', '9148']);
  });
});
