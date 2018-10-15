/* Fetching diary films */
// const API_KEY = process.env.OMDB_API_KEY;
import { API_KEY } from '../config';
const SEARCH_URI = 'http://www.omdbapi.com/?s=';
const FILM_BY_ID_URI = 'http://www.omdbapi.com/?i=';

/* === Fetch search results === */
// Async
export const fetchSearchFilms = (searchTerm, token) => dispatch => {
  dispatch(searchFilmRequest());

  if (searchTerm) {
    const plussedSearchTerm = searchTerm
      ? searchTerm.toLowerCase().replace(/ /g, '+', -1)
      : '';

    let searchResults;

    return (
      fetch(`${SEARCH_URI}${plussedSearchTerm}${API_KEY}`)
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
          searchResults = response.Search;
        })
        .then(() =>
          fetch('http://localhost:8080/api/films', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
        )
        .then(response => {
          return response.json();
        })
        .then(response => console.log(response))
        // .then(filmsSearchArray => {
        //   // For every film we need to query the database and if it is found we set film.watched to true, otherwise false, then we dispatch it
        //   filmsSearchArray.forEach(film => {
        // fetch('http://localhost:8080/api/films', {
        //   headers: {
        //     Authorization: `Bearer ${token}`
        //   }
        // })
        //       .then(response => {
        //         console.log(response.json());
        //         return response.json();
        //       })
        //       .then(response => {
        //         console.log(response);
        //         if (
        //           response.find(diaryFilm => diaryFilm.imdbID === film.imdbID)
        //         ) {
        //           film.watched = true;
        //           filmsArrayWithWatchedStatus.push(film);
        //         } else {
        //           film.watched = false;
        //           filmsArrayWithWatchedStatus.push(film);
        //         }
        //       })
        //       .catch(error => console.log(error));
        //   });

        //   console.log(filmsArrayWithWatchedStatus);
        //   return filmsArrayWithWatchedStatus;
        // })
        // .then(filmsArrayWithWatchedStatus => {
        //   dispatch(searchFilmSuccess(filmsArrayWithWatchedStatus, searchTerm));
        // })
        .catch(error => {
          console.log('hitting error');
          console.error(error);
          dispatch(searchFilmError(error));
        })
    );
  }
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

/* === Update film watched status === */
// Async
export const updateWatchedStatus = imdbID => dispatch => {
  /*
  use search term to query
  */
};

// Sync
export const UPDATE_WATCHED_STATUS_REQUEST = 'UPDATE_WATCHED_STATUS_REQUEST';
export const updateWatchedStatusRequest = () => ({
  type: UPDATE_WATCHED_STATUS_REQUEST
});

export const UPDATE_WATCHED_STATUS_SUCCESS = 'UPDATE_WATCHED_STATUS_SUCCESS';
export const updateWatchedStatusSuccess = watchedArray => ({
  type: UPDATE_WATCHED_STATUS_REQUEST,
  watchedArray
});

export const UPDATE_WATCHED_STATUS_ERROR = 'UPDATE_WATCHED_STATUS_ERROR';
export const updateWatchedStatusError = error => ({
  type: UPDATE_WATCHED_STATUS_REQUEST,
  error
});
