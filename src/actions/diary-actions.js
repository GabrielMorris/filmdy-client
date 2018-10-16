/* Fetching diary films */
// Async
export const fetchDiaryFilms = (token, userID, searchTerm = '') => dispatch => {
  dispatch(fetchDiaryFilmsRequest());
  console.log(1);
  console.log('hhhhh', userID);

  return fetch(`http://localhost:8080/api/films?userID=${userID}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
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
      if (searchTerm !== '') {
        const filteredDiary = diaryFilms.filter(film =>
          film.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        dispatch(fetchDiaryFilmsSuccess(diaryFilms, filteredDiary, searchTerm));
      } else {
        dispatch(fetchDiaryFilmsSuccess(diaryFilms, diaryFilms, searchTerm));
      }
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
