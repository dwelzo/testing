import { sendEmail } from "./email";

export function registerUser(name: string, email: string): string {
  if (!email) throw new Error("Email required");

  const emailResult = sendEmail(email, "Welcome!", `Hi ${name}`);
  if (emailResult === "Email sent successfully") {
    return `User ${name} registered`;
  } else {
    return `Email failed`;
  }
}
