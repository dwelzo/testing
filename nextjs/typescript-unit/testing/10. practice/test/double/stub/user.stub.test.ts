import * as emailModule from "@app/double/stubs/email"; // import whole module
import { registerUser } from "@app/double/stubs/user";

test("registerUser() should succeed when email service stub returns success", () => {
  jest.spyOn(emailModule, "sendEmail").mockReturnValue("Email sent successfully");

  const result = registerUser("Bob", "bob@example.com");
  expect(result).toBe("User Bob registered");

  // Clean up
  jest.restoreAllMocks();
});

test("registerUser() should fail when stub simulates email error", () => {
  jest.spyOn(emailModule, "sendEmail").mockReturnValue("Email failed");

  const result = registerUser("John", "john@example.com");
  expect(result).toBe("Email failed");

  jest.restoreAllMocks();
});
