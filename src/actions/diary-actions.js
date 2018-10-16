/* Fetching diary films */
// Async
export const fetchDiaryFilms = (token, userID, searchTerm = '') => dispatch => {
  dispatch(fetchDiaryFilmsRequest());
  console.log('userID: ', userID);

  return fetch(`http://localhost:8080/api/films?userID=${userID}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => {
      console.log(response);
      if (!response.ok) {
        return Promise.reject(response.statusText);
      }
      console.log(response);
      return response.json();
    })
    .then(films => {
      console.log(films);
      return films[0].diaryFilms;
    })
    .then(diaryFilms => {
      if (searchTerm !== '') {
        // Filter and reverse the array so we have descending order
        const filteredDiary = diaryFilms
          .filter(film =>
            film.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .reverse();

        dispatch(fetchDiaryFilmsSuccess(diaryFilms, filteredDiary, searchTerm));
      } else {
        // Reverse the array so we have it in descending order
        const reversedDiaryFilms = diaryFilms.reverse();
        dispatch(
          fetchDiaryFilmsSuccess(
            reversedDiaryFilms,
            reversedDiaryFilms,
            searchTerm
          )
        );
      }
    })
    .catch(error => {
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
