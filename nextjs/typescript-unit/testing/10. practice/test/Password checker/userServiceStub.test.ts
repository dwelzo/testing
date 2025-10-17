import { getUserProfile } from '@app/userService';

jest.mock('@app/db', () => ({
  getUserFromDB: jest.fn().mockResolvedValue({ id: 1, name: 'Mahesh' }),
}));

describe('Stub Example', () => {
  test('should return user profile using stubbed DB', async () => {
    const result = await getUserProfile(1);
    expect(result).toBe('User: Mahesh');
  });
});
