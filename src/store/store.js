import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { diaryReducer } from '../reducers/diary-reducer';
import { authReducer } from '../reducers/auth-reducer';
import { searchReducer } from '../reducers/search-reducer';
import { reducer as formReducer } from 'redux-form';
import { authRequest } from '../actions/auth';

export default createStore(
  combineReducers({
    diary: diaryReducer,
    search: searchReducer,
    form: formReducer,
    auth: authReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);
