import { Calculator } from "@app/double/spy/calculator";

test("should spy on add() and multiply() methods", () => {
  const calc = new Calculator();

  const spyAdd = jest.spyOn(calc, "add");
  const spyMultiply = jest.spyOn(calc, "multiply");

  const total = calc.calculateTotal(2, 3);

  expect(total).toBe(10);

  expect(spyAdd).toHaveBeenCalledWith(2, 3);
  expect(spyMultiply).toHaveBeenCalledWith(5, 2);

  expect(spyAdd).toHaveBeenCalledTimes(1);
  expect(spyMultiply).toHaveBeenCalledTimes(1);
});
