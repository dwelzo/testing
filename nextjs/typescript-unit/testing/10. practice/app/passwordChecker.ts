export const checkPassword = (password: string) => {
  const errors: string[] = [];

  if (password.length < 8) {
    errors.push('Password must be at least 8 characters long.');
  }

  if (!/[A-Z]/.test(password)) {
    errors.push('Password must include at least one uppercase letter.');
  }

  if (!/[a-z]/.test(password)) {
    errors.push('Password must include at least one lowercase letter.');
  }

  if (!/[0-9]/.test(password)) {
    errors.push('Password must include at least one digit.');
  }

  if (!/[!@#$%^&*]/.test(password)) {
    errors.push('Password must include at least one special character.');
  }

  if (/\s/.test(password)) {
    errors.push('Password cannot contain spaces.');
  }

  return {
    valid: errors.length === 0,
    errors,
  };
};
