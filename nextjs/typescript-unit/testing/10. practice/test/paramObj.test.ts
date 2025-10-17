describe('multiply()', () => {
  test.each([
    { a: 2, b: 3, expected: 6 },
    { a: 0, b: 5, expected: 0 },
    { a: -2, b: 4, expected: -8 },
  ])('returns $expected when $a × $b', ({ a, b, expected }) => {
    expect(a * b).toBe(expected);
  });
});
