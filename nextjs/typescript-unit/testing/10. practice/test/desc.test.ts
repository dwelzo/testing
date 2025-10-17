import { add, subtract, multiply, divide } from '../app/math';

// describe('Math Operations', () => {
//   it('should add numbers correctly', () => {
//     expect(add(2, 3)).toBe(5);
//   });

//   it('should subtract numbers correctly', () => {
//     expect(subtract(5, 3)).toBe(2);
//   });

//   it('should multiply numbers correctly', () => {
//     expect(multiply(2, 4)).toBe(8);
//   });

//   it('should divide numbers correctly', () => {
//     expect(divide(10, 2)).toBe(5);
//   });
// });
                                            
                                               
describe('Math Operations', () => {
  describe('Addition', () => {
    it('adds positive numbers', () => expect(add(2, 3)).toBe(5));
    it('adds negative numbers', () => expect(add(-2, -3)).toBe(-5));
  });

  describe('Division', () => {
    it('divides normally', () => expect(divide(10, 2)).toBe(5));
    it('throws on divide by zero', () =>
      expect(() => divide(10, 0)).toThrow('Cannot divide by zero'));
  });
});
