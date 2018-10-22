// Actions
import {
  SEARCH_FILM_REQUEST,
  SEARCH_FILM_SUCCESS,
  SEARCH_FILM_ERROR,
  CLEAR_SEARCH_RESULTS_REQUEST,
  CLEAR_SEARCH_RESULTS_SUCCESS
} from '../actions/search-actions';

// Initial state
const initialState = {
  searchResults: [],
  searchTerm: '',
  searchError: null,
  loading: null
};

export function searchReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_FILM_REQUEST: {
      console.log('search request in reducer');

      return Object.assign({}, state, {
        loading: true,
        searchError: null
      });
    }

    case SEARCH_FILM_SUCCESS: {
      console.log('search success in reducer');
      console.log(action.searchResults);

      return Object.assign({}, state, {
        searchResults: action.searchResults,
        searchTerm: action.searchTerm,
        searchError: null,
        loading: false
      });
    }

    case SEARCH_FILM_ERROR: {
      console.log('error in search reducer');

      return Object.assign({}, state, {
        searchError: action.error,
        loading: null
      });
    }

    case CLEAR_SEARCH_RESULTS_REQUEST: {
      console.log('clearing search results request');

      return Object.assign({}, state);
    }

    case CLEAR_SEARCH_RESULTS_SUCCESS: {
      console.log('CLEARING RESULTS');

      return Object.assign({}, state, initialState);
    }

    default:
      return state;
  }
}
