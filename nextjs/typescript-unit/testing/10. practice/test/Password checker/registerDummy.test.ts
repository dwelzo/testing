import { registerUser } from '@app/register';
import * as logger from '@app/logger';

test('should register user successfully and call logger', () => {
  const spy = jest.spyOn(logger, 'logMessage').mockImplementation(() => {});

  const result = registerUser('Mahesh');
  expect(result).toBe(true);
  expect(spy).toHaveBeenCalledWith('User Mahesh registered');

  spy.mockRestore();
});
