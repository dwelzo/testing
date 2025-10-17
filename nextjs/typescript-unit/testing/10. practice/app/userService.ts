export const getUser = async (id: number) => {
  return { id, name: 'Mahesh' };
};

export const fetchUser = async (id: number) => {
  if (id <= 0) throw new Error('Invalid user ID');
  return { id, name: 'Mahesh' };
};

import { getUserFromDB } from './db';

export const getUserProfile = async (id: number) => {
  const user = await getUserFromDB(id);
  return `User: ${user.name}`;
};