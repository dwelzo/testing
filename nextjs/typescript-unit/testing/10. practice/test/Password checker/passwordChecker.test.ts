import { checkPassword } from '@app/passwordChecker';

describe('Password Checker Kata', () => {
  test('should pass with a strong password', () => {
    const result = checkPassword('Strong@123');
    expect(result.valid).toBe(true);
  });

  test('should fail if password is too short', () => {
    const result = checkPassword('Ab1@');
    expect(result.errors).toContain('Password must be at least 8 characters long.');
  });

  test('should fail if missing uppercase letter', () => {
    const result = checkPassword('weak@123');
    expect(result.errors).toContain('Password must include at least one uppercase letter.');
  });

  test('should fail if missing lowercase letter', () => {
    const result = checkPassword('WEAK@123');
    expect(result.valid).toBe(false);
    expect(result.errors).toContain('Password must include at least one lowercase letter.');
  });

  test('should fail if missing digit', () => {
    const result = checkPassword('Weak@Pass');
    expect(result.valid).toBe(false);
    expect(result.errors).toContain('Password must include at least one digit.');
  });

  test('should fail if missing special character', () => {
    const result = checkPassword('Weak1234');
    expect(result.errors).toContain('Password must include at least one special character.');
  });

  test('should fail if contains spaces', () => {
    const result = checkPassword('Weak 1234@');
    expect(result.errors).toContain('Password cannot contain spaces.');
  });
});
