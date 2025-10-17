test.each([
  ['hello', 5],
  ['jest', 4],
])('string %s has length %i', (str, len) => {
  expect(str.length).toBe(len);
});
