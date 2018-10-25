import { API_BASE_URL } from '../../config';
import {
  ADD_FILM_REQUEST,
  ADD_FILM_SUCCESS,
  ADD_FILM_ERROR,
  addFilmRequest,
  addFilmSuccess,
  addFilmError,
  FETCH_DIARY_FILMS_REQUEST,
  FETCH_DIARY_FILMS_SUCCESS,
  FETCH_DIARY_FILMS_ERROR,
  fetchDiaryFilmsRequest,
  fetchDiaryFilmsSuccess,
  fetchDiaryFilmsError,
  REMOVE_FILM_REQUEST,
  REMOVE_FILM_SUCCESS,
  REMOVE_FILM_ERROR,
  removeFilmRequest,
  removeFilmSuccess,
  removeFilmError,
  TOGGLE_LIKED_REQUEST,
  TOGGLE_LIKED_SUCCESS,
  TOGGLE_LIKED_ERROR,
  toggleLikedRequest,
  toggleLikedSuccess,
  toggleLikedError,
  fetchDiaryFilms,
  addFilmToDiary
} from '../../actions/diary-actions';

describe('Diary request', () => {
  it('Should return an action', () => {
    const action = addFilmRequest();

    expect(action).toEqual({
      type: ADD_FILM_REQUEST
    });
  });

  it('Should return an action', () => {
    const action = fetchDiaryFilmsRequest();

    expect(action).toEqual({
      type: FETCH_DIARY_FILMS_REQUEST
    });
  });

  it('Should return an action', () => {
    const action = removeFilmRequest();

    expect(action).toEqual({
      type: REMOVE_FILM_REQUEST
    });
  });

  it('Should return an action', () => {
    const action = toggleLikedRequest();

    expect(action).toEqual({
      type: TOGGLE_LIKED_REQUEST
    });
  });
});

describe('Diary success', () => {
  it('Should return an action', () => {
    const action = addFilmSuccess([]);

    expect(action).toEqual({
      type: ADD_FILM_SUCCESS,
      diaryFilms: []
    });
  });

  it('Should return an action', () => {
    const action = fetchDiaryFilmsSuccess([], [], '');

    expect(action).toEqual({
      type: FETCH_DIARY_FILMS_SUCCESS,
      diaryFilms: [],
      filteredDiaryFilms: [],
      searchTerm: ''
    });
  });

  it('Should return an action', () => {
    const action = removeFilmSuccess();

    expect(action).toEqual({
      type: REMOVE_FILM_SUCCESS
    });
  });

  it('Should return an action', () => {
    const diaryFilms = [];
    const action = toggleLikedSuccess(diaryFilms);

    expect(action).toEqual({
      type: TOGGLE_LIKED_SUCCESS,
      diaryFilms
    });
  });
});

describe('Diary error', () => {
  it('Should return an action', () => {
    const error = '';
    const action = addFilmError(error);

    expect(action).toEqual({
      type: ADD_FILM_ERROR,
      error
    });
  });

  it('Should return an action', () => {
    const error = '';
    const action = fetchDiaryFilmsError(error);

    expect(action).toEqual({
      type: FETCH_DIARY_FILMS_ERROR,
      error
    });
  });

  it('Should return an action', () => {
    const error = '';
    const action = removeFilmError(error);

    expect(action).toEqual({
      type: REMOVE_FILM_ERROR,
      error
    });
  });

  it('Should return an action', () => {
    const error = '';
    const action = toggleLikedError(error);

    expect(action).toEqual({
      type: TOGGLE_LIKED_ERROR,
      error
    });
  });
});

describe('Async fetchDiaryFilms', () => {
  it('should call fetchdiaryfilmssuccess', () => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json() {
          return [{ diaryFilms: [] }];
        }
      })
    );

    const dispatch = jest.fn();

    return fetchDiaryFilms('hello', 'blade runner')(dispatch).then(() => {
      expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/films`, {
        headers: {
          Authorization: `Bearer hello`
        }
      });
      expect(dispatch).toHaveBeenCalledWith(
        fetchDiaryFilmsSuccess([], [], 'blade runner')
      );
    });
  });
});
