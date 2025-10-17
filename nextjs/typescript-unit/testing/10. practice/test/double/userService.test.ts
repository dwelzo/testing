// test/userService.test.ts
import { UserService } from "@app/double/userService";
import { UserRepository, User } from "@app/double/userRepository";

// 🧠 Create a stub class
class StubUserRepository implements Partial<UserRepository> {
  async findById(id: number): Promise<User | null> {
    if (id === 1) return { id, name: "Stubbed User" };
    return null;
  }
}

describe("UserService (using stubs)", () => {
  it("should return the user name for valid id", async () => {
    const repo = new StubUserRepository();
    const service = new UserService(repo as UserRepository);

    const result = await service.getUserName(1);
    expect(result).toBe("Stubbed User");
  });

  it("should throw an error if user not found", async () => {
    const repo = new StubUserRepository();
    const service = new UserService(repo as UserRepository);

    await expect(service.getUserName(99)).rejects.toThrow("User not found");
  });
});
