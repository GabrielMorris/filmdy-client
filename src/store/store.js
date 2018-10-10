import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { diaryReducer } from '../reducers/diary-reducer';

export default createStore(diaryReducer, applyMiddleware(thunk));
