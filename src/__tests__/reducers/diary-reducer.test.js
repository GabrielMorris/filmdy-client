import { diaryReducer } from '../../reducers/diary-reducer';
import {
  FETCH_DIARY_FILMS_REQUEST,
  FETCH_DIARY_FILMS_SUCCESS,
  FETCH_DIARY_FILMS_ERROR,
  ADD_FILM_REQUEST,
  ADD_FILM_SUCCESS,
  ADD_FILM_ERROR,
  REMOVE_FILM_SUCCESS,
  TOGGLE_LIKED_REQUEST,
  REMOVE_FILM_ERROR,
  TOGGLE_LIKED_SUCCESS,
  TOGGLE_LIKED_ERROR
} from '../../actions/diary-actions';
import { initialState } from '../../reducers/auth-reducer';

describe('Diary reducer tests', () => {
  it('Should return initial state for fetch request', () => {
    const state = {};
    const action = {
      type: FETCH_DIARY_FILMS_REQUEST
    };

    const newState = diaryReducer(state, action);

    expect(newState).toEqual(state);
  });

  it('Should set state to fetch success', () => {
    const diaryFilms = [];
    const filteredDiaryFilms = [];
    const state = {};
    const action = {
      type: FETCH_DIARY_FILMS_SUCCESS,
      diaryFilms,
      filteredDiaryFilms
    };

    const newState = diaryReducer(state, action);

    expect(newState).toEqual({
      diaryFilms,
      filteredDiaryFilms
    });
  });

  it('Should set fetch diary error', () => {
    const error = '';
    const state = {};
    const action = {
      type: FETCH_DIARY_FILMS_ERROR,
      error
    };

    const newState = diaryReducer(state, action);

    expect(newState).toEqual({ error });
  });

  it('Should set add film request', () => {
    const state = {};
    const action = {
      type: ADD_FILM_REQUEST
    };

    const newState = diaryReducer(state, action);

    expect(newState).toEqual(state);
  });

  it('Should set add film success', () => {
    const diaryFilms = [];
    const filteredDiaryFilms = [];
    const state = {};
    const action = {
      type: ADD_FILM_SUCCESS,
      diaryFilms,
      filteredDiaryFilms
    };

    const newState = diaryReducer(state, action);

    expect(newState).toEqual({ diaryFilms, filteredDiaryFilms });
  });

  it('Should set add film error', () => {
    const error = '';
    const state = {};
    const action = {
      type: ADD_FILM_ERROR,
      error
    };

    const newState = diaryReducer(state, action);

    expect(newState).toEqual({ error });
  });

  it('Should set remove film request', () => {
    const state = {};
    const action = {
      type: FETCH_DIARY_FILMS_REQUEST
    };

    const newState = diaryReducer(state, action);

    expect(newState).toEqual(state);
  });

  it('Should set remove film success', () => {
    const state = {};
    const action = {
      type: REMOVE_FILM_SUCCESS
    };

    const newState = diaryReducer(state, action);

    expect(newState).toEqual(state);
  });

  it('Should set remove film error', () => {
    const error = '';
    const state = {};
    const action = {
      type: REMOVE_FILM_ERROR,
      error
    };

    const newState = diaryReducer(state, action);

    expect(newState).toEqual({ error });
  });

  it('Should set toggle film request', () => {
    const state = {};
    const action = {
      type: TOGGLE_LIKED_REQUEST,
      loading: false
    };

    const newState = diaryReducer(state, action);

    expect(newState).toEqual({ loading: true });
  });

  it('Should set toggle film success', () => {
    const loading = true;
    const error = '';
    const state = {};
    const action = {
      type: TOGGLE_LIKED_SUCCESS,
      loading,
      error
    };

    const newState = diaryReducer(state, action);

    expect(newState).toEqual({
      loading: false,
      error: null
    });
  });

  it('Should set toggle film error', () => {
    const error = '';
    const state = {};
    const action = {
      type: TOGGLE_LIKED_ERROR,
      error
    };

    const newState = diaryReducer(state, action);

    expect(newState).toEqual({ error });
  });

  it('Should set default state', () => {
    const state = initialState;
    const action = {
      type: 13533563
    };

    const newState = diaryReducer(state, action);

    expect(newState).toEqual(state);
  });
});
