import {
  required,
  nonEmpty,
  usernameLength,
  passwordLength
} from '../../components/authentication/validators';

describe('Validators', () => {
  // Required
  it('Should return required if there is no value', () => {
    expect(required()).toBe('Field is required');
  });

  it('Should return undefined if there is a value', () => {
    expect(required('Hello world')).toBe(undefined);
  });

  // Non-empty
  it('Should return undefined if field is not empty', () => {
    expect(nonEmpty('hello world')).toBe(undefined);
  });

  it('Should return error if arg is empty', () => {
    expect(nonEmpty('')).toBe('Field must not be empty');
  });

  // Username length
  it('Should return undefined if value is appropriate length', () => {
    expect(usernameLength('hello')).toBe(undefined);
  });

  it('Should return an error if value is not appropriate length', () => {
    expect(usernameLength('')).toBe('Username must be >=1 characters');
  });

  // Password length
  it('Should return undefined if value is appropriate length', () => {
    expect(passwordLength('hellopassword')).toBe(undefined);
  });

  it('Should return an error if value is not appropriate length', () => {
    expect(passwordLength('hello')).toBe('Password must be 8-72 characters');
  });
});
