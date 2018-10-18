export const required = value => (value ? undefined : 'Field is required');

export const nonEmpty = value =>
  value.trim() !== '' ? undefined : 'Field must not be empty';

export const isNumber = value =>
  value && !isNaN(Number(value)) && value.length === 5
    ? undefined
    : 'Tracking number must be a number';

export const usernameLength = value =>
  value.length >= 1 ? undefined : 'Username must be >=1 characters';

export const passwordLength = value =>
  value.length >= 8 ? undefined : 'Password must be 8-72 characters';
