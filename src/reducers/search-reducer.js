// Actions
import {
  SEARCH_FILM_REQUEST,
  SEARCH_FILM_SUCCESS,
  SEARCH_FILM_ERROR,
  CLEAR_SEARCH_RESULTS_REQUEST,
  CLEAR_SEARCH_RESULTS_SUCCESS
} from '../actions/search-actions';

// Initial state
export const initialState = {
  searchResults: [],
  searchTerm: '',
  searchError: null,
  loading: null
};

export function searchReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_FILM_REQUEST: {
      return Object.assign({}, state, {
        loading: true,
        searchError: null
      });
    }

    case SEARCH_FILM_SUCCESS: {
      return Object.assign({}, state, {
        searchResults: action.searchResults,
        searchTerm: action.searchTerm,
        searchError: null,
        loading: false
      });
    }

    case SEARCH_FILM_ERROR: {
      return Object.assign({}, state, {
        searchError: action.error,
        loading: null
      });
    }

    case CLEAR_SEARCH_RESULTS_REQUEST: {
      return Object.assign({}, state);
    }

    case CLEAR_SEARCH_RESULTS_SUCCESS: {
      return Object.assign({}, state, initialState);
    }

    default:
      return state;
  }
}
