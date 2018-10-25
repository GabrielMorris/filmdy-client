import {
  SET_AUTH_TOKEN,
  CLEAR_AUTH,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_ERROR
} from '../actions/auth';

export const initialState = {
  authToken: null, // authToken !== null does not mean it has been validated
  currentUser: null,
  loading: false,
  error: null
};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    // Setting auth token
    case SET_AUTH_TOKEN: {
      return Object.assign({}, state, {
        authToken: action.authToken
      });
    }

    // Clearing auth token and current user
    case CLEAR_AUTH: {
      return Object.assign({}, state, {
        authToken: null,
        currentUser: null
      });
    }

    // Auth request
    case AUTH_REQUEST: {
      return Object.assign({}, state, {
        loading: true,
        error: null
      });
    }

    // Auth success
    case AUTH_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        currentUser: action.currentUser
      });
    }

    // Auth error
    case AUTH_ERROR: {
      return Object.assign({}, state, {
        loading: false,
        error: action.error
      });
    }

    // Return state
    default:
      return state;
  }
}
