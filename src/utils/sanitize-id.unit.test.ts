import { sanitizeId } from './sanitize-id';

import { describe, expect, it } from 'vitest';

describe('sanitizeId()', () => {
  it('sanitizes a simple string', () => {
    expect(sanitizeId('foo')).toBe('foo');
  });

  it('lowercase string', () => {
    expect(sanitizeId('Foo')).toBe('foo');
  });

  it('replaces spaces with dashes', () => {
    expect(sanitizeId('Foo Bar')).toBe('foo-bar');
  });

  it('replaces 3 dashes with 2', () => {
    expect(sanitizeId('Foo---Bar')).toBe('foo--bar');
  });

  it('replaces more than 3 dashes with 2', () => {
    expect(sanitizeId('Foo----Bar')).toBe('foo--bar');
  });

  it('handles case of mixed spaces and dashes', () => {
    expect(sanitizeId('Foo - Bar')).toBe('foo--bar');
  });
});
