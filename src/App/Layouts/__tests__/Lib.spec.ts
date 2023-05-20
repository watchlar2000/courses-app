import { describe, expect, expectTypeOf, it } from 'vitest';
import { getCurrentYear } from '../Lib/index';

describe('getFullYear function', () => {
  it('returns correct year', () => {
    const currentYear = new Date().getFullYear();
    expect(getCurrentYear()).toEqual(currentYear);
  });

  it('returns correct type', () => {
    expectTypeOf(getCurrentYear()).toEqualTypeOf<number>();
  });
});
