import {
  setAuthToken,
  CLEAR_AUTH,
  SET_AUTH_TOKEN,
  clearAuth,
  authRequest,
  AUTH_REQUEST,
  authSuccess,
  AUTH_SUCCESS,
  authError,
  AUTH_ERROR
} from '../../actions/auth';

describe('Object actions', () => {
  it('Should return setAuthToken object', () => {
    const authToken = '';
    const action = setAuthToken(authToken);

    expect(action).toEqual({
      type: SET_AUTH_TOKEN,
      authToken
    });
  });

  it('Should return clearAuth', () => {
    const action = clearAuth();

    expect(action).toEqual({
      type: CLEAR_AUTH
    });
  });

  it('Should create authRequest object', () => {
    const action = authRequest();

    expect(action).toEqual({
      type: AUTH_REQUEST
    });
  });

  it('Should create auth success object', () => {
    const currentUser = {};
    const action = authSuccess(currentUser);

    expect(action).toEqual({
      type: AUTH_SUCCESS,
      currentUser
    });
  });

  it('Should create auth error object', () => {
    const error = '';
    const action = authError(error);

    expect(action).toEqual({
      type: AUTH_ERROR,
      error
    });
  });
});
