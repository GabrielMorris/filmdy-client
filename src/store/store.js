// Redux/thunk
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

// App reducers
import { diaryReducer } from '../reducers/diary-reducer';
import { authReducer } from '../reducers/auth-reducer';
import { searchReducer } from '../reducers/search-reducer';
import { modalReducer } from '../reducers/modal-reducer';

// Redux form
import { reducer as formReducer } from 'redux-form';

// Burger
import { reducer as burgerMenu } from 'redux-burger-menu';

export default createStore(
  combineReducers({
    diary: diaryReducer,
    search: searchReducer,
    form: formReducer,
    auth: authReducer,
    modal: modalReducer,
    burgerMenu
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);
