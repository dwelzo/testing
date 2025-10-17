import * as emailModule from "@app/double/mocks/email"; 
import { registerUser } from "@app/double/mocks/user";

test("registerUser() calls sendEmail() with correct arguments", () => {
  // 1️⃣ Mock the sendEmail function
  const mockSendEmail = jest.spyOn(emailModule, "sendEmail").mockReturnValue("Email sent successfully");

  // 2️⃣ Call function under test
  const result = registerUser("Bob", "bob@example.com");

  // 3️⃣ Check result
  expect(result).toBe("User Bob registered");

  // 4️⃣ Verify interaction (mock behavior)
  expect(mockSendEmail).toHaveBeenCalledTimes(1);
  expect(mockSendEmail).toHaveBeenCalledWith(
    "bob@example.com",
    "Welcome!",
    expect.stringContaining("Bob")
  );

  // 5️⃣ Clean up mock
  jest.restoreAllMocks();
});
