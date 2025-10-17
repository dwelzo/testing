import { add, subtract, multiply, divide } from "../app/math";

describe("add", () => {
  it("should add two numbers correctly", () => {
    expect(add(2, 3)).toBe(5);
  });

  it("should handle negative numbers", () => {
    expect(add(-2, -3)).toBe(-5);
  });

  test("should add zero correctly", () => {
    expect(add(0, 5)).toBe(5);
  });

  test("should minus vlaues ", () => {
    expect(subtract(5, 3)).toBe(2);
  });

  test("should multiply values", () => {
    expect(multiply(2, 3)).toBe(6);
  });

  it("should divide two numbers correctly", () => {
    expect(divide(6, 3)).toBe(2);
  });

  it("should handle division by zero", () => {
    expect(() => divide(6, 0)).toThrow("Cannot divide by zero");
  });
  
});
