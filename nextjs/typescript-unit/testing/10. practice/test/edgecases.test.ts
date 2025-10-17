import {divide} from "../app/math";


test.each([
  [10, 2, 5],
  [10, 0, 'Error'],
  [-10, 2, -5],
])('divide(%i, %i)', (a, b, expected) => {
  if (b === 0) {
    expect(() => divide(a, b)).toThrow('Cannot divide by zero');
  } else {
    expect(divide(a, b)).toBe(expected);
  }
});
