import { UserService } from "@app/double/dummy/userService"
import { EmailService } from "@app/double/dummy/emailService";

test("registerUser() without dummy — sends a real email", () => {
  const emailService = new EmailService(); // real object
  const userService = new UserService(emailService);

  const result = userService.registerUser("Alice", "alice@example.com");
  expect(result).toBe("User Alice registered");
});
