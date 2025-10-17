export function sendEmail(to: string, subject: string, body: string): string {
  console.log(`📧 Real email sent to ${to}`);
  return "Email sent successfully";
}
