// testing/02.practice/test/AsyncParam.test.ts

type User = {
  id: number;
  name: string;
};

async function fetchUser(id: number): Promise<User> {
  const users: Record<number, User> = {
    1: { id: 1, name: 'User One' },
    2: { id: 2, name: 'User Two' },
  };

  return new Promise((resolve) => {
    setTimeout(() => resolve(users[id]), 100);
  });
}

test.each([
  [1, 'User One'],
  [2, 'User Two'],
])('fetchUser(%i) returns %s', async (id, name) => {
  const user = await fetchUser(id);
  expect(user.name).toBe(name);
});
