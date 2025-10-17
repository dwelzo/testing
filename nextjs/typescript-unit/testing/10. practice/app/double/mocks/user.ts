import { sendEmail } from "./email";

export function registerUser(name: string, email: string): string {
  if (!email) throw new Error("Email required");

  sendEmail(email, "Welcome!", `Hi ${name}, welcome!`);
  return `User ${name} registered`;
}
