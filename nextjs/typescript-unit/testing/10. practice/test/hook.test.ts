// math.test.ts
beforeAll(() => {
  console.log('👉 beforeAll - run once before all tests');
});

afterAll(() => {
  console.log('👋 afterAll - run once after all tests');
});

beforeEach(() => {
  console.log('🔁 beforeEach - runs before every test');
});

afterEach(() => {
  console.log('🧹 afterEach - runs after every test');
});

test('first test', () => {
  console.log('✅ running first test');
  expect(2 + 2).toBe(4);
});

test('second test', () => {
  console.log('✅ running second test');
  expect(3 + 3).toBe(6);
});
