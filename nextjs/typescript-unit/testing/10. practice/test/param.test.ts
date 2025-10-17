import { add } from '../app/math';

describe('add()', () => {
  test.each([
    [1, 2, 3],
    [5, 7, 12],
    [-2, -3, -5],
  ])('adds %i and %i → %i', (a, b, expected) => {
    expect(add(a, b)).toBe(expected);
  });
});

