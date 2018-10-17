// Actions
import {
  SEARCH_FILM_REQUEST,
  SEARCH_FILM_SUCCESS,
  SEARCH_FILM_ERROR
} from '../actions/search-actions';

// Initial state
const initialState = {
  searchResults: [],
  searchTerm: '',
  searchError: null
};

export function searchReducer(state = initialState, action) {
  if (action.type === SEARCH_FILM_REQUEST) {
    console.log('search request in reducer');
  } else if (action.type === SEARCH_FILM_SUCCESS) {
    console.log('search success in reducer');
    console.log(action.searchResults);

    return Object.assign({}, state, {
      searchResults: action.searchResults,
      searchTerm: action.searchTerm,
      searchError: null
    });
  } else if (action.type === SEARCH_FILM_ERROR) {
    console.log('error in search reducer');

    return Object.assign({}, state, {
      searchError: action.error
    });
  }
  // Return initial state
  return state;
}
