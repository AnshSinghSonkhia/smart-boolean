import { describe, it, expect } from 'vitest';
import { boolean } from '../src/boolean';

describe('boolean()', () => {
  it('should return true for true-like values', () => {
    expect(boolean('true')).toBe(true);
    expect(boolean('YES')).toBe(true);
    expect(boolean(1)).toBe(true);
  });

  it('should return false for everything else', () => {
    expect(boolean('nope')).toBe(false);
    expect(boolean(null)).toBe(false);
    expect(boolean(false)).toBe(false);
  });
});
