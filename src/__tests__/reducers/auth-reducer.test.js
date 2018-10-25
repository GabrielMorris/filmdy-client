import { authReducer, initialState } from '../../reducers/auth-reducer';
import {
  SET_AUTH_TOKEN,
  AUTH_REQUEST,
  CLEAR_AUTH,
  AUTH_SUCCESS,
  AUTH_ERROR
} from '../../actions/auth';

describe('Test the auth reducer', () => {
  it('Should return the current state when nothing is passed in', () => {
    const state = undefined;
    const action = {
      type: 'POTATO'
    };

    const newState = authReducer(state, action);

    expect(newState).toEqual(initialState);
  });

  it('Should set auth token state', () => {
    const state = {
      authToken: null
    };
    const action = {
      type: SET_AUTH_TOKEN,
      authToken: 'hello'
    };

    const newState = authReducer(state, action);

    expect(newState).toEqual({
      authToken: 'hello'
    });
  });

  it('Should set authtoken and currentuser to null', () => {
    const state = {
      authToken: true,
      currentUser: true
    };
    const action = {
      type: CLEAR_AUTH
    };

    const newState = authReducer(state, action);

    expect(newState).toEqual({
      authToken: null,
      currentUser: null
    });
  });

  it('Should set loading to true and error to null', () => {
    const state = {
      error: true,
      loading: false
    };
    const action = {
      type: AUTH_REQUEST
    };

    const newState = authReducer(state, action);
    expect(newState).toEqual({
      error: null,
      loading: true
    });
  });

  it('Should set auth success state', () => {
    const state = {
      loading: true,
      currentUser: true
    };
    const action = {
      type: AUTH_SUCCESS,
      currentUser: 'potato'
    };

    const newState = authReducer(state, action);

    expect(newState).toEqual({
      loading: false,
      currentUser: 'potato'
    });
  });

  it('Should set auth error', () => {
    const state = {
      loading: true,
      error: null
    };
    const action = {
      type: AUTH_ERROR,
      error: 'henlo'
    };

    const newState = authReducer(state, action);

    expect(newState).toEqual({
      loading: false,
      error: 'henlo'
    });
  });
});
