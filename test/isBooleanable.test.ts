import { describe, it, expect } from 'vitest';
import { isBooleanable } from '../src/isBooleanable';

describe('isBooleanable()', () => {
  it('should return true for all boolean-like values', () => {
    expect(isBooleanable('false')).toBe(true);
    expect(isBooleanable('YES')).toBe(true);
    expect(isBooleanable('0')).toBe(true);
  });

  it('should return false for values that are not boolean-like', () => {
    expect(isBooleanable(123)).toBe(false);
    expect(isBooleanable('maybe')).toBe(false);
    expect(isBooleanable({})).toBe(false);
    expect(isBooleanable('34256rtfg')).toBe(false);
  });
});
