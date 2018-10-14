/* Fetching diary films */
// Async
export const fetchDiaryFilms = diaryFilms => dispatch => {
  dispatch(fetchDiaryFilmsRequest());
  console.log(1);

  return fetch('http://localhost:8080/api/films')
    .then(response => {
      console.log(response);
      if (!response.ok) {
        console.log(3);
        return Promise.reject(response.statusText);
      }
      console.log(4);
      console.log(response);
      return response.json();
    })
    .then(films => {
      console.log(5);
      console.log(films);
      // TODO: this will probably need to be changed
      return films[0].diaryFilms;
    })
    .then(diaryFilms => {
      console.log(6);
      dispatch(fetchDiaryFilmsSuccess(diaryFilms));
    })
    .catch(error => {
      console.log(7);
      console.error(error);
      dispatch(fetchDiaryFilmsError(error));
    });
};

// Sync
export const FETCH_DIARY_FILMS_REQUEST = 'FETCH_DIARY_FILMS_REQUEST';
export const fetchDiaryFilmsRequest = () => ({
  type: FETCH_DIARY_FILMS_REQUEST
});

export const FETCH_DIARY_FILMS_SUCCESS = 'FETCH_DIARY_FILMS_SUCCESS';
export const fetchDiaryFilmsSuccess = diaryFilms => ({
  type: FETCH_DIARY_FILMS_SUCCESS,
  diaryFilms
});

export const FETCH_DIARY_FILMS_ERROR = 'FETCH_DIARY_FILMS_ERROR';
export const fetchDiaryFilmsError = error => ({
  type: FETCH_DIARY_FILMS_ERROR,
  error
});
