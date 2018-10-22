// Require a field have values
export const required = value => (value ? undefined : 'Field is required');

// Require a field to not be empty
export const nonEmpty = value =>
  value.trim() !== '' ? undefined : 'Field must not be empty';

// Require username to be a certain length
export const usernameLength = value =>
  value.length >= 1 ? undefined : 'Username must be >=1 characters';

// Require password to be a certain lenth
export const passwordLength = value =>
  value.length >= 8 ? undefined : 'Password must be 8-72 characters';
