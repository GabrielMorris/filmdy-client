import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { diaryReducer } from '../reducers/diary-reducer';
import { reducer as formReducer } from 'redux-form';

export default createStore(
  combineReducers({ diary: diaryReducer, form: formReducer }),
  applyMiddleware(thunk)
);
