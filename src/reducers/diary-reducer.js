// Actions
import {
  FETCH_DIARY_FILMS_REQUEST,
  FETCH_DIARY_FILMS_SUCCESS,
  FETCH_DIARY_FILMS_ERROR
} from '../actions/diary-actions';

const initialState = {
  error: null,
  diaryFilms: [],
  filteredDiaryFilms: []
};

export function diaryReducer(state = initialState, action) {
  if (action.type === FETCH_DIARY_FILMS_REQUEST) {
    // Request
    console.log('diary request in reducer');
  } else if (action.type === FETCH_DIARY_FILMS_SUCCESS) {
    // Success
    console.log('fetch diary success in reducer');
    console.log(action);
    return Object.assign({}, state, {
      diaryFilms: action.diaryFilms.reverse(),
      filteredDiaryFilms: action.filteredDiaryFilms.reverse()
    });
  } else if (action.type === FETCH_DIARY_FILMS_ERROR) {
    // Error
    console.log('fetch diary error in reducer');
  }
  // Return initial state
  console.log('returning initial state');
  return state;
}
