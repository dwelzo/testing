import { divide } from '../app/math';

describe('divide()', () => {
  test.each([
    [10, 2, 5],
    [9, 3, 3],
    [-8, 2, -4],
  ])('divides %i by %i → %i', (a, b, expected) => {
    expect(divide(a, b)).toBe(expected);
  });

  test('throws error for division by zero', () => {
    expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
  });
});
