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
      return Object.assign({}, state);
    }

    case FETCH_DIARY_FILMS_SUCCESS: {
      return Object.assign({}, state, {
        diaryFilms: action.diaryFilms,
        filteredDiaryFilms: action.filteredDiaryFilms
      });
    }

    case FETCH_DIARY_FILMS_ERROR: {
      return Object.assign({}, state, {
        error: action.error
      });
    }

    /* === ADDING === */
    case ADD_FILM_REQUEST: {
      return Object.assign({}, state);
    }

    case ADD_FILM_SUCCESS: {
      return Object.assign({}, state, {
        diaryFilms: action.diaryFilms,
        filteredDiaryFilms: action.diaryFilms
      });
    }

    case ADD_FILM_ERROR: {
      return Object.assign({}, state, {
        error: action.error
      });
    }

    /* === REMOVING === */
    case REMOVE_FILM_REQUEST: {
      return Object.assign({}, state);
    }

    case REMOVE_FILM_SUCCESS: {
      return Object.assign({}, state);
    }

    case REMOVE_FILM_ERROR: {
      return Object.assign({}, state, {
        error: action.error
      });
    }

    /* === LIKING === */
    case TOGGLE_LIKED_REQUEST: {
      return Object.assign({}, state, {
        loading: true
      });
    }

    case TOGGLE_LIKED_SUCCESS: {
      return Object.assign({}, state, {
        error: null,
        loading: false
      });
    }

    case TOGGLE_LIKED_ERROR: {
      return Object.assign({}, state, {
        error: action.error
      });
    }

    default:
      return state;
  }
}
