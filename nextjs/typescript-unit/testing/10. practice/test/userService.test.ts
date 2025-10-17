import { fetchUser } from "@app/userService";

test("fetches user successfully", async () => {
  const user = await fetchUser(1);
  expect(user.name).toBe("Mahesh");
});

test("throws error for invalid user ID", async () => {
  await expect(fetchUser(-1)).rejects.toThrow("Invalid user ID");
});
