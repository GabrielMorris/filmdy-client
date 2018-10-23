import { API_KEY } from '../config';
import { API_BASE_URL } from '../config';
const FILM_BY_ID_URI = 'https://www.omdbapi.com/?i=';

/* Fetching diary films */
export const fetchDiaryFilms = (token, searchTerm = '') => dispatch => {
  dispatch(fetchDiaryFilmsRequest());

  let actionSearchTerm;

  // Only search if we have more than a single character long search request
  if (searchTerm.length === 1) {
    actionSearchTerm = '';
  } else {
    actionSearchTerm = searchTerm;
  }

  return fetch(`${API_BASE_URL}/films`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => {
      if (!response.ok) {
        return Promise.reject(response.statusText);
      }

      return response.json();
    })
    .then(films => {
      console.log(films);
      return films[0].diaryFilms;
    })
    .then(diaryFilms => {
      if (actionSearchTerm !== '') {
        // Filter and reverse the array so we have descending order
        const filteredDiary = diaryFilms
          .filter(film =>
            film.title.toLowerCase().includes(actionSearchTerm.toLowerCase())
          )
          .reverse();

        dispatch(
          fetchDiaryFilmsSuccess(diaryFilms, filteredDiary, actionSearchTerm)
        );
      } else {
        // Reverse the array so we have it in descending order
        const reversedDiaryFilms = diaryFilms.reverse();
        dispatch(
          fetchDiaryFilmsSuccess(
            reversedDiaryFilms,
            reversedDiaryFilms,
            actionSearchTerm
          )
        );
      }
    })
    .catch(error => {
      console.error(error);
      dispatch(fetchDiaryFilmsError(error));
    });
};

/* === Adds film to diary === */
export const addFilmToDiary = (imdbID, token) => dispatch => {
  dispatch(addFilmRequest());

  fetch(`${FILM_BY_ID_URI}${imdbID}${API_KEY}`)
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(response => {
      console.log(response);

      const newFilmObject = {
        film: {
          imdbID,
          title: response.Title,
          plot: response.Plot,
          actors: response.Actors,
          poster: response.Poster,
          ratings: response.Ratings,
          userRating: true
        }
      };

      return newFilmObject;
    })
    .then(film => {
      console.log(film);

      return fetch(`${API_BASE_URL}/films`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(film)
      })
        .then(response => {
          return response.json();
        })
        .catch(err => console.error(err));
    })
    .then(userFilms => {
      console.log(userFilms);

      // Reverse the array so we have it in descending order
      const reversedDiaryFilms = userFilms.diaryFilms.reverse();

      dispatch(addFilmSuccess(reversedDiaryFilms));
    })
    .catch(error => {
      console.log('hitting error in update watched status');
      console.error(error);
      dispatch(addFilmError(error));
    });
};

/* === Removes film from diary === */
export const removeFilmFromDiary = (imdbID, token) => dispatch => {
  console.log('hello?');
  dispatch(removeFilmRequest());

  fetch(`${API_BASE_URL}/films`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      imdbID
    })
  })
    .then(() => dispatch(removeFilmSuccess()))
    .then(() => dispatch(fetchDiaryFilms(token)))
    .catch(error => dispatch(removeFilmError(error)));
};

/* === Toggles a film's liked status === */
export const toggleFilmLiked = (imdbID, token) => dispatch => {
  dispatch(toggleLikedRequest());

  return fetch(`${API_BASE_URL}/films`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      imdbID
    })
  })
    .then(response => response.json())
    .then(userFilms => dispatch(toggleLikedSuccess(userFilms.diaryFilms)))
    .then(() => dispatch(fetchDiaryFilms(token)))
    .catch(error => dispatch(toggleLikedError(error)));
};

/* === SYNC actions === */
// Add
export const ADD_FILM_REQUEST = 'ADD_FILM_REQUEST';
export const addFilmRequest = () => ({
  type: ADD_FILM_REQUEST
});

export const ADD_FILM_SUCCESS = 'ADD_FILM_SUCCESS';
export const addFilmSuccess = diaryFilms => ({
  type: ADD_FILM_SUCCESS,
  diaryFilms
});

export const ADD_FILM_ERROR = 'SEARCH_FILM_ERROR';
export const addFilmError = error => ({
  type: ADD_FILM_ERROR,
  error
});

// Fetch
export const FETCH_DIARY_FILMS_REQUEST = 'FETCH_DIARY_FILMS_REQUEST';
export const fetchDiaryFilmsRequest = () => ({
  type: FETCH_DIARY_FILMS_REQUEST
});

export const FETCH_DIARY_FILMS_SUCCESS = 'FETCH_DIARY_FILMS_SUCCESS';
export const fetchDiaryFilmsSuccess = (
  diaryFilms,
  filteredDiaryFilms,
  searchTerm
) => ({
  type: FETCH_DIARY_FILMS_SUCCESS,
  diaryFilms,
  filteredDiaryFilms,
  searchTerm
});

export const FETCH_DIARY_FILMS_ERROR = 'FETCH_DIARY_FILMS_ERROR';
export const fetchDiaryFilmsError = error => ({
  type: FETCH_DIARY_FILMS_ERROR,
  error
});

// Remove
export const REMOVE_FILM_REQUEST = 'REMOVE_FILM_REQUEST';
export const removeFilmRequest = () => ({
  type: REMOVE_FILM_REQUEST
});

export const REMOVE_FILM_SUCCESS = 'REMOVE_FILM_SUCCESS';
export const removeFilmSuccess = () => ({
  type: REMOVE_FILM_SUCCESS
});

export const REMOVE_FILM_ERROR = 'REMOVE_FILM_ERROR';
export const removeFilmError = error => ({
  type: REMOVE_FILM_ERROR,
  error
});

// Toggle liked status
export const TOGGLE_LIKED_REQUEST = 'TOGGLE_LIKED_REQUEST';
export const toggleLikedRequest = () => ({
  type: TOGGLE_LIKED_REQUEST
});

export const TOGGLE_LIKED_SUCCESS = 'TOGGLE_LIKED_SUCCESS';
export const toggleLikedSuccess = diaryFilms => ({
  type: TOGGLE_LIKED_SUCCESS,
  diaryFilms
});

export const TOGGLE_LIKED_ERROR = 'TOGGLE_LIKED_ERROR';
export const toggleLikedError = error => ({
  type: TOGGLE_LIKED_ERROR,
  error
});
