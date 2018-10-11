/* Fetching diary films */
// const API_KEY = process.env.OMDB_API_KEY;
import { API_KEY } from '../config';
const SEARCH_URI = 'http://www.omdbapi.com/?s=';

// Async
export const fetchSearchFilms = searchTerm => dispatch => {
  dispatch(searchFilmRequest());

  if (searchTerm) {
    const plussedSearchTerm = searchTerm
      ? searchTerm.toLowerCase().replace(/ /g, '+', -1)
      : '';

    return fetch(`${SEARCH_URI}${plussedSearchTerm}${API_KEY}`)
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
        console.error(error);
        dispatch(searchFilmError(error));
      });
  }
};

// Sync
export const SEARCH_FILM_REQUEST = 'SEARCH_FILM_REQUEST';
export const searchFilmRequest = () => ({
  type: SEARCH_FILM_REQUEST
});

export const SEARCH_FILM_SUCCESS = 'SEARCH_FILM_SUCCESS';
export const searchFilmSuccess = searchResults => ({
  type: SEARCH_FILM_SUCCESS,
  searchResults
});

export const SEARCH_FILM_ERROR = 'SEARCH_FILM_ERROR';
export const searchFilmError = error => ({
  type: SEARCH_FILM_ERROR,
  error
});
