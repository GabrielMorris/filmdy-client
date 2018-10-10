// Actions
import {
  FETCH_DIARY_FILMS_REQUEST,
  FETCH_DIARY_FILMS_SUCCESS,
  FETCH_DIARY_FILMS_ERROR
} from '../actions/diary-actions';

const initialState = {
  error: null,
  diaryFilms: [
    {
      diaryID: '12345',
      imdbID: 'tt3896198',
      title: 'Guardians of the Galaxy Vol. 2',
      plot:
        'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
      actors: ['Jessica Chastain', 'Joaquin Phoenix']
    }
  ],
  searchFilms: [
    {
      imdbID: 'tt3896198',
      title: 'Guardians of the Galaxy Vol. 2'
    }
  ]
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
      diaryFilms: action.diaryFilms
    });
  } else if (action.type === FETCH_DIARY_FILMS_ERROR) {
    // Error
    console.log('fetch diary error in reducer');
  }
  // Return initial state
  console.log('returning initial state');
  return state;
}
