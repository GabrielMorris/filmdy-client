/* Fetching diary films */
import { API_KEY } from '../config';
const SEARCH_URI = 'http://www.omdbapi.com/?s=';
const SEARCH_FILM_ONLY_PARAM = '&type=movie';

/* === Fetch search results === */
// Async
export const fetchSearchFilms = searchTerm => dispatch => {
  dispatch(searchFilmRequest());

  if (searchTerm) {
    const plussedSearchTerm = searchTerm
      ? searchTerm.toLowerCase().replace(/ /g, '+', -1)
      : '';

    return fetch(
      `${SEARCH_URI}${plussedSearchTerm}${SEARCH_FILM_ONLY_PARAM}${API_KEY}`
    )
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(response => {
        if (response.Error) {
          console.log('returning promise rejection');
          return Promise.reject(response.Error);
        }
        console.log(response);
        return response.Search;
      })
      .then(filmsSearchArray => {
        dispatch(searchFilmSuccess(filmsSearchArray));
      })
      .catch(error => {
        console.log('hitting error');
        console.log(error);
        dispatch(searchFilmError(error));
      });
  } else {
    dispatch(searchFilmError('Error: No search term provided'));
  }
};

/* === Clear search results === */
export const clearSearchResults = () => dispatch => {
  dispatch(clearSearchResultsSuccess());
};

// Sync
export const SEARCH_FILM_REQUEST = 'SEARCH_FILM_REQUEST';
export const searchFilmRequest = () => ({
  type: SEARCH_FILM_REQUEST
});

export const SEARCH_FILM_SUCCESS = 'SEARCH_FILM_SUCCESS';
export const searchFilmSuccess = (searchResults, searchTerm) => ({
  type: SEARCH_FILM_SUCCESS,
  searchResults,
  searchTerm
});

export const SEARCH_FILM_ERROR = 'SEARCH_FILM_ERROR';
export const searchFilmError = error => ({
  type: SEARCH_FILM_ERROR,
  error
});

export const CLEAR_SEARCH_RESULTS_REQUEST = 'CLEAR_SEARCH_RESULTS_REQUEST';
export const clearSearchResultsRequest = () => ({
  type: CLEAR_SEARCH_RESULTS_REQUEST
});

export const CLEAR_SEARCH_RESULTS_SUCCESS = 'CLEAR_SEARCH_RESULTS_SUCCESS';
export const clearSearchResultsSuccess = () => ({
  type: CLEAR_SEARCH_RESULTS_SUCCESS
});
