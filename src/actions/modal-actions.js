import { API_KEY } from '../config';
const FILM_BY_ID_URI = 'http://www.omdbapi.com/?i=';

export const toggleModal = (bool, imdbID = '') => dispatch => {
  dispatch(toggleModalRequest());

  if (imdbID !== '') {
    return fetch(`${FILM_BY_ID_URI}${imdbID}${API_KEY}`)
      .then(response => response.json())
      .then(film => {
        console.log(film);
        dispatch(toggleModalSuccess(bool, imdbID, film));
      })
      .catch(error => toggleModalError(error));
  } else {
    dispatch(toggleModalSuccess(false, '', {}));
  }
};

export const TOGGLE_MODAL_REQUEST = 'TOGGLE_MODAL_REQUEST';
export const toggleModalRequest = () => ({
  type: TOGGLE_MODAL_REQUEST
});

export const TOGGLE_MODAL_SUCCESS = 'TOGGLE_MODAL_SUCCESS';
export const toggleModalSuccess = (bool, imdbID, film) => ({
  type: TOGGLE_MODAL_SUCCESS,
  bool,
  imdbID,
  film
});

export const TOGGLE_MODAL_ERROR = 'TOGGLE_MODAL_ERROR';
export const toggleModalError = error => ({
  type: TOGGLE_MODAL_ERROR,
  error
});
