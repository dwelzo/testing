// app/register.ts
import { logMessage } from './logger';

export const registerUser = (user: string | null): boolean => {
  if (!user) throw new Error('User required');
  logMessage(`User ${user} registered`);
  return true;
};
