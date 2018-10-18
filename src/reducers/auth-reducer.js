import {
  SET_AUTH_TOKEN,
  CLEAR_AUTH,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_ERROR
} from '../actions/auth';

const initialState = {
  authToken: null, // authToken !== null does not mean it has been validated
  currentUser: null,
  loading: false,
  error: null
};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTH_TOKEN: {
      return Object.assign({}, state, {
        authToken: action.authToken
      });
    }

    case CLEAR_AUTH: {
      return Object.assign({}, state, {
        authToken: null,
        currentUser: null
      });
    }

    case AUTH_REQUEST: {
      return Object.assign({}, state, {
        loading: true,
        error: null
      });
    }

    case AUTH_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        currentUser: action.currentUser
      });
    }

    case AUTH_ERROR: {
      console.log('hello');
      return Object.assign({}, state, {
        loading: false,
        error: action.error
      });
    }

    default:
      return state;
  }
}
