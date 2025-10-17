import { UserService } from "@app/double/dummy/userService";
import { EmailService } from "@app/double/dummy/emailService";

class DummyEmailService extends EmailService {
  sendEmail(to: string, subject: string, body: string) {

  }
}

test("registerUser() with dummy — ignores email sending", () => {
  const dummyEmailService = new DummyEmailService();
  const userService = new UserService(dummyEmailService);

  const result = userService.registerUser("Bob", "bob@example.com");
  expect(result).toBe("User Bob registered");
});