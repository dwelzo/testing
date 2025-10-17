export class Calculator {
  add(a: number, b: number) {
    return a + b;
  }

  multiply(a: number, b: number) {
    return a * b;
  }

  calculateTotal(a: number, b: number) {
    const sum = this.add(a, b);
    const result = this.multiply(sum, 2);
    return result;
  }
}
