export class EmailService {
  sendEmail(to: string, subject: string, body: string) {
    console.log(`📧 Email sent to ${to}`);
  }
}

