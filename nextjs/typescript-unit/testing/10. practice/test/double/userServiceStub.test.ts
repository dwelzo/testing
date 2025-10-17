// test/userServiceStub.test.ts
import { UserService } from "@app/double/userService";
import { StubUserRepository } from "@app/double/StubUserRepository";

describe("🧪 UserService with Stub Repository", () => {
  it("should return the user name when found", async () => {
    const stubRepo = new StubUserRepository();
    const service = new UserService(stubRepo as any);

    const result = await service.getUserName(1);
    expect(result).toBe("Stubbed User");
  });

  it("should throw error when user not found", async () => {
    const stubRepo = new StubUserRepository();
    const service = new UserService(stubRepo as any);

    await expect(service.getUserName(99)).rejects.toThrow("User not found");
  });
});
