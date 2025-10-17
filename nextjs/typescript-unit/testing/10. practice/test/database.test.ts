// database.test.ts
import { connect, disconnect, clearDB } from '../app/db';
import { getUser } from '../app/userService';

beforeAll(async () => {
  await connect(); // Connect once before all tests
});

beforeEach(async () => {
  await clearDB(); // Reset data before each test
});

afterAll(async () => {
  await disconnect(); // Close DB after all tests
});

test('should return a user by ID', async () => {
  const user = await getUser(1);
  expect(user.name).toBe('Mahesh');
});
