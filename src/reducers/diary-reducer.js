// Actions
import {
  FETCH_DIARY_FILMS_REQUEST,
  FETCH_DIARY_FILMS_SUCCESS,
  FETCH_DIARY_FILMS_ERROR,
  ADD_FILM_REQUEST,
  ADD_FILM_SUCCESS,
  ADD_FILM_ERROR,
  REMOVE_FILM_REQUEST,
  REMOVE_FILM_SUCCESS,
  REMOVE_FILM_ERROR,
  TOGGLE_LIKED_REQUEST,
  TOGGLE_LIKED_SUCCESS,
  TOGGLE_LIKED_ERROR
} from '../actions/diary-actions';

const initialState = {
  error: null,
  diaryFilms: [],
  filteredDiaryFilms: [],
  loading: false
};

export function diaryReducer(state = initialState, action) {
  switch (action.type) {
    /* === FETCHING === */
    case FETCH_DIARY_FILMS_REQUEST: {
      console.log('diary request in reducer');
      return Object.assign({}, state);
    }

    case FETCH_DIARY_FILMS_SUCCESS: {
      console.log('fetch diary success in reducer');

      return Object.assign({}, state, {
        diaryFilms: action.diaryFilms,
        filteredDiaryFilms: action.filteredDiaryFilms
      });
    }

    case FETCH_DIARY_FILMS_ERROR: {
      console.log('fetch diary error in reducer');
      return Object.assign({}, state, {
        error: action.error
      });
    }

    /* === ADDING === */
    case ADD_FILM_REQUEST: {
      console.log('add request reducer');
      return Object.assign({}, state);
    }

    case ADD_FILM_SUCCESS: {
      console.log('add success reducer');

      return Object.assign({}, state, {
        diaryFilms: action.diaryFilms,
        filteredDiaryFilms: action.diaryFilms
      });
    }

    case ADD_FILM_ERROR: {
      console.log('add error reducer');

      return Object.assign({}, state, {
        error: action.error
      });
    }

    /* === REMOVING === */
    case REMOVE_FILM_REQUEST: {
      console.log('remove request reducer');
      return Object.assign({}, state);
    }

    case REMOVE_FILM_SUCCESS: {
      console.log('remove success reducer');
      return Object.assign({}, state);
    }

    case REMOVE_FILM_ERROR: {
      console.log('remove error reducer');

      return Object.assign({}, state, {
        error: action.error
      });
    }

    /* === LIKING === */
    case TOGGLE_LIKED_REQUEST: {
      console.log('toggling like request');

      return Object.assign({}, state, {
        loading: true
      });
    }

    case TOGGLE_LIKED_SUCCESS: {
      console.log('toggling like success');

      return Object.assign({}, state, {
        error: null,
        loading: false
      });
    }

    case TOGGLE_LIKED_ERROR: {
      console.log('toggling like error');

      return Object.assign({}, state, {
        error: action.error
      });
    }

    default:
      console.log('returning initial state');
      return state;
  }
}
