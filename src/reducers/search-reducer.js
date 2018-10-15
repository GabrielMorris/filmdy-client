// Actions
import {
  SEARCH_FILM_REQUEST,
  SEARCH_FILM_SUCCESS,
  SEARCH_FILM_ERROR,
  UPDATE_WATCHED_STATUS_REQUEST,
  UPDATE_WATCHED_STATUS_SUCCESS,
  UPDATE_WATCHED_STATUS_ERROR
} from '../actions/search-actions';

// Initial state
const initialState = {
  searchResults: [],
  searchTerm: ''
};

export function searchReducer(state = initialState, action) {
  if (action.type === SEARCH_FILM_REQUEST) {
    console.log('search request in reducer');
  } else if (action.type === SEARCH_FILM_SUCCESS) {
    console.log('search success in reducer');
    console.log(action.searchResults);

    return Object.assign({}, state, {
      searchResults: action.searchResults,
      searchTerm: action.searchTerm
    });
  } else if (action.type === SEARCH_FILM_ERROR) {
    console.log('error in search reducer');
  } else if (action.type === UPDATE_WATCHED_STATUS_REQUEST) {
    console.log('update watched status request');
  } else if (action.type === UPDATE_WATCHED_STATUS_SUCCESS) {
    console.log('update watched status success');

    return Object.assign({}, state, {
      searchResults: action.watchedArray
    });
  } else if (action.type === UPDATE_WATCHED_STATUS_ERROR) {
    console.log('update watched status ERROR');
  }
  // Return initial state
  return state;
}
