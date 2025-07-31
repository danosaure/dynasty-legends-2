import { describe, expect, it } from 'vitest';

import { sumValuesFromSection } from './sum-values-from-section';

describe('No values to add', () => {
  it('returns 0 when userData empty', () => {
    expect(sumValuesFromSection({})).toBe(0);
  });
});

describe('Base values', () => {
  it('returns value when only one element', () => {
    expect(
      sumValuesFromSection({
        bar: 1,
      })
    ).toBe(1);
  });

  it('returns value when two elements', () => {
    expect(
      sumValuesFromSection({
        bar: 1,
        baz: 2,
      })
    ).toBe(3);
  });
});

describe('With 0 or negative value', () => {
  it('ignores 0', () => {
    expect(
      sumValuesFromSection({
        bar: 1,
        baz: 2,
        qux: 0,
      })
    ).toBe(3);
  });

  it('ignores negative value', () => {
    expect(
      sumValuesFromSection({
        bar: 1,
        baz: 2,
        qux: 0,
        quux: -3,
      })
    ).toBe(3);
  });
});
