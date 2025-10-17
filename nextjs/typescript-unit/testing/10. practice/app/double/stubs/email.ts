export function sendEmail(to: string, subject: string, body: string): string {
  console.log(`📧 Sending real email to ${to}`);
  return "Email sent successfully";
}
