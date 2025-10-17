import { EmailService } from "./emailService";

export class UserService {
  constructor(private emailService: EmailService) {}

  registerUser(name: string, email: string) {
    // Business logic...
    if (!email) throw new Error("Email required");

    // Notify user
    this.emailService.sendEmail(email, "Welcome!", `Hi ${name}, welcome!`);
    return `User ${name} registered`;
  }
}
